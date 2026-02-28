import React from "react";
import { v4 as uuidv4 } from "uuid";
import db from "../data/db.json";
import NavBar from "./NavBar";
import Contents from "./Contents";
import AboutContent from "./AboutContent";
import Footer from "./Footer";

const DesktopLayout = ({ filter }) => {
  return (
    <div className="flex min-h-screen max-w-full mx-auto">
      {/* Sidebar */}
      <aside className="flex-shrink-0 w-60 h-screen overflow-auto sticky top-0 bg-[#000]">
        <NavBar />
      </aside>

      {/* Main content area */}
      <main className="flex-grow  bg-[#000]">
        {filter === "About" ? (
          <AboutContent />
        ) : (
          <div>
            {db.contents &&
              db.contents.map((item) => {
                if (filter === "Home") {
                  return <Contents key={uuidv4()} content={item} />;
                } else {
                  return item.type.includes(filter) ? (
                    <Contents key={uuidv4()} content={item} />
                  ) : null;
                }
              })}
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default DesktopLayout;
