"use client";

import { Component, useCallback, useState } from "react";
import dynamic from "next/dynamic";

const BLOCK_MARGIN = 2;
const NOMINAL_BLOCK = 10;
const NOMINAL_PITCH = NOMINAL_BLOCK + BLOCK_MARGIN;
// The API only ever returns a rolling year, so never ask for more columns.
const MAX_WEEKS = 52;
const GRAPH_HEIGHT = 7 * NOMINAL_PITCH - BLOCK_MARGIN;

const Placeholder = () => <div style={{ height: GRAPH_HEIGHT }} />;

const ErrorNote = () => (
  <div
    style={{ height: GRAPH_HEIGHT }}
    className="flex items-center text-xs text-neutral-500"
  >
    Couldn&#39;t load contributions
  </div>
);

// react-activity-calendar validates its data during render and throws on
// anything unexpected — an empty list, a payload without `contributions`, a
// malformed day. Those throws are synchronous, so without a boundary a bad
// response from the contributions API takes the whole page down.
class CalendarBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <ErrorNote /> : this.props.children;
  }
}

// The calendar derives its skeleton from the current date and fetches on the
// client, so server and client markup can never agree. Load it client-side only
// and reserve the space up front to avoid a layout shift.
const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false, loading: Placeholder },
);

const toISODate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

// Keep the most recent `weeks` whole columns and drop everything older, so the
// graph always ends on today.
const keepRecentWeeks = (weeks) => (data) => {
  // The API can answer 200 with a body that has no usable contributions. Hand
  // back an empty list so the boundary above renders the fallback instead of
  // letting a TypeError escape.
  if (!Array.isArray(data) || data.length === 0) return [];
  if (!weeks) return data;

  const last = new Date(`${data[data.length - 1].date}T00:00:00`);
  const start = new Date(last);
  // Back up to the Sunday starting the final column, then span `weeks` columns.
  start.setDate(last.getDate() - last.getDay() - (weeks - 1) * 7);
  const from = toISODate(start);

  return data.filter((day) => day.date >= from);
};

const GithubGraph = ({ username = "binaryshrey" }) => {
  const [width, setWidth] = useState(0);

  const measureRef = useCallback((node) => {
    if (!node) return;
    const measure = () => {
      const next = node.clientWidth;
      // Ignore zero-width readings. They happen while the card is display:none
      // or mid-layout, and dropping back to 0 would unmount the calendar and
      // restart its fetch — which is how a scroll right after a refresh ends up
      // hammering the contributions API.
      if (next > 0) setWidth(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Pick a column count near the nominal block size, then solve for the block
  // size that divides the measured width exactly — otherwise the rounding
  // remainder shows up as dead space on the right. The 0.01 shaves off float
  // error so the SVG can never end up a hair wider than its container.
  const weeks = width
    ? Math.min(MAX_WEEKS, Math.max(1, Math.round((width + BLOCK_MARGIN) / NOMINAL_PITCH)))
    : 0;
  const blockSize = weeks
    ? (width + BLOCK_MARGIN) / weeks - BLOCK_MARGIN - 0.01
    : NOMINAL_BLOCK;

  return (
    <div ref={measureRef} style={{ width: "100%" }}>
      {weeks > 0 ? (
        <CalendarBoundary>
          <GitHubCalendar
            username={username}
            year="last"
            transformData={keepRecentWeeks(weeks)}
            colorScheme="dark"
            theme={{
              dark: ["#262626", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            blockSize={blockSize}
            blockMargin={BLOCK_MARGIN}
            blockRadius={2}
            showColorLegend={false}
            showTotalCount={false}
            showMonthLabels={false}
            showWeekdayLabels={false}
            errorMessage="Couldn't load contributions"
          />
        </CalendarBoundary>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

export default GithubGraph;
