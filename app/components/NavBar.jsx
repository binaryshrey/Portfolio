"use client"; // <-- Add this at the top

import React from "react";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";
import SocialInfo from "./SocialInfo";
import ProfileInfo from "./ProfileInfo";
import ProfileImage from "./ProfileImage";

const NavBar = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  const toggleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <>
      {/* Top section */}
      <div className="pt-12 px-4 flex flex-col gap-4">
        {/* Profile + Hamburger (mobile only) */}
        <div className="flex justify-between ">
          <ProfileImage />

          {/* Hamburger visible only on mobile */}
          <div className="block md:hidden">
            <Hamburger toggled={showLinks} toggle={toggleShowLinks} />
          </div>
        </div>

        <ProfileInfo />
        <SocialInfo />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:block">
        <NavLinks />
      </div>

      {/* Mobile Nav Links (toggle + smooth transition) */}
      <div
        className={`block md:hidden transition-all duration-500 ease-in${
          showLinks
            ? "opacity-100 max-h-96"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <NavLinks />
      </div>
    </>
  );
};

export default NavBar;
