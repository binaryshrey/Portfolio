import React from "react";
import { v4 as uuidv4 } from "uuid";
import db from "../data/db.json";
import NavBar from "./NavBar";
import Contents from "./Contents";
import AboutContent from "./AboutContent";
import Footer from "./Footer";

const MobileLayout = ({ filter }) => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Navbar */}
      <NavBar />

      {/* Main content area */}
      <main className="flex-1  py-6 space-y-4">
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
      <footer className="mt-auto py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default MobileLayout;
