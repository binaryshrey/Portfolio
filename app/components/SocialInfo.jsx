import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import db from "../data/db.json";
import { FaLinkedin, FaGithub, FaTwitter, FaSpotify } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const SocialInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const socials = [
    { href: db.socials.LinkedIn, icon: FaLinkedin, delay: 500 },
    { href: db.socials.Github, icon: FaGithub, delay: 600 },
    { href: db.socials.Twitter, icon: FaTwitter, delay: 700 },
    { href: db.socials.Hashnode, icon: SiHashnode, delay: 800 },
    { href: db.socials.Spotify, icon: FaSpotify, delay: 900 },
  ];

  return (
    <div className="flex my-4 md:my-2">
      {socials.map(({ href, icon: Icon, delay }, idx) => (
        <div
          key={idx}
          data-aos="zoom-in"
          data-aos-duration={delay}
          className="pr-2 last:pr-0"
        >
          <a
            href={href}
            className="text-zinc-400 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={20} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialInfo;
