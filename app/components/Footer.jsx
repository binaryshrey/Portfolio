import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 mb-12 mx-3 md:mx-12">
      <div className="h-0.5 w-12 bg-white mb-6"></div>

      <p className="text-gray-100 text-sm mb-1">© 2025 - Shreyansh Saurabh</p>

      <p className="text-zinc-500 text-sm">
        Built with
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-zinc-500 hover:text-zinc-400 underline"
        >
          NextJS
        </a>
      </p>
    </footer>
  );
};

export default Footer;
