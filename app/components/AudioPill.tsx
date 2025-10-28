"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

/**
 * Minimal pill-style WaveSurfer player (like the screenshot)
 * Drop in: app/components/AudioPill.tsx
 * Usage: <AudioPill src="/audio/voice.mp3" />
 */
export default function AudioPill({
  src,
  height = 40,
}: {
  src: string;
  height?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);

  // Options that don't depend on a DOM node
  const baseOptions: Omit<WaveSurferOptions, "container"> = useMemo(
    () => ({
      url: src,
      height,
      waveColor: "#A3A3A3", // neutral-400
      progressColor: "#FFFFFF",
      cursorColor: "#A3A3A3",
      cursorWidth: 2,
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      normalize: true,
      dragToSeek: true,
      interact: true,
      hideScrollbar: true,
      fillParent: true,
      autoCenter: true,
      minPxPerSec: 25,
    }),
    [src, height]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window === "undefined") return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      ...baseOptions,
    });
    wavesurferRef.current = ws;

    const onReady = () => setIsReady(true);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => setCurrent(ws.getCurrentTime());

    ws.on("ready", onReady);
    ws.on("play", onPlay);
    ws.on("pause", onPause);
    ws.on("timeupdate", onTimeUpdate);

    return () => {
      ws.unAll();
      ws.destroy();
      wavesurferRef.current = null;
    };
  }, [baseOptions]);

  const toggle = () => wavesurferRef.current?.playPause();

  const fmt = (t: number) => {
    const m = Math.floor(t / 60).toString();
    const s = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="w-full rounded-full bg-[#262626] border border-[#404040] px-3 py-2 text-white">
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          disabled={!isReady}
          className="h-10 w-10 shrink-0 grid place-items-center rounded-full transition disabled:opacity-50"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Image src="/pause.svg" alt="pause" width={32} height={32} />
          ) : (
            <Image src="/play.svg" alt="play" width={32} height={32} />
          )}
        </button>

        {/* Waveform */}
        <div className="flex-1">
          <div ref={containerRef} className="select-none" />
        </div>

        {/* Current time */}
        <div className="text-sm tabular-nums text-neutral-300 w-10 text-right">
          {fmt(current)}
        </div>
      </div>
    </div>
  );
}
