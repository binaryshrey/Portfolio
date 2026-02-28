"use client";

import React from "react";
import Link from "next/link";
import db from "../data/db.json";

import { RiHome3Fill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBookBookmark } from "react-icons/bi";
import { HiBriefcase } from "react-icons/hi2";
import { BsFileEarmarkTextFill } from "react-icons/bs";

// import { usePathname } from "next/navigation";

const NavLinks = () => {
  // const pathName = usePathname(); // get current path (unused for now)

  const links = [
    { href: "/home", label: "Home", icon: RiHome3Fill },
    { href: "/about", label: "About", icon: BsFillPersonFill },
    { href: "/blogs", label: "Blogs", icon: BiSolidBookBookmark },
    { href: "/projects", label: "Projects", icon: HiBriefcase },
  ];

  return (
    <nav className="w-full bg-[#202020] md:bg-[#000] py-4 md:py-8 transition-colors duration-300">
      <ul className="max-w-[22.5rem] mx-auto flex flex-col">
        {links.map(({ href, label, icon: Icon }) => {
          return (
            <li key={href} className="py-2 ">
              <Link
                href={href}
                className="flex items-center gap-2 md:px-5 py-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
              >
                <Icon size={18} />
                <span className="text-sm mx-4 text-zinc-400 hover:text-white">
                  {label}
                </span>
              </Link>
            </li>
          );
        })}

        {/* Resume link (external) */}
        <li className="py-2">
          <a
            href={db.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:px-5 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
          >
            <BsFileEarmarkTextFill size={18} />
            <span className="text-sm mx-4">Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
