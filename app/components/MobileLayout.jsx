import React from "react";
import { v4 as uuidv4 } from "uuid";
import db from "../data/db.json";
import NavBar from "./NavBar";
import Contents from "./Contents";
import AboutContent from "./AboutContent";
import Footer from "./Footer";

const MobileLayout = ({ filter }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#111] shadow-md">
        <NavBar />
      </header>

      {/* Main content area */}
      <main className="flex-1 px-4 py-6 space-y-4">
        {filter === "About" ? (
          <AboutContent />
        ) : (
          <div className="flex flex-col gap-6">
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
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-[#111] py-4 border-t border-gray-800">
        <Footer />
      </footer>
    </div>
  );
};

export default MobileLayout;
