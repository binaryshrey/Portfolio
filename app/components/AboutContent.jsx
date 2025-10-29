import React from "react";
import db from "../data/db.json";

const AboutContent = () => {
  return (
    <div
      className="
        bg-[#2a2a2a]
        rounded-xl
        mx-3
        mt-12
        mb-6
        p-4
        md:mx-12
        transition-colors
        duration-300
        shadow-md
      "
    >
      <div className="m-2">
        <h2 className="text-lg font-semibold text-white pb-3">
          Hey, this is Shreyansh :)
        </h2>

        <p className="text-gray-300 whitespace-pre-line mt-8">
          {db.description1}
        </p>

        <p className="text-gray-300 whitespace-pre-line mt-8">
          {db.description2}
        </p>

        <p className="text-gray-300 whitespace-pre-line mt-8">
          {db.description3}
        </p>

        <p className="text-gray-300 whitespace-pre-line mt-8">
          {db.description4}
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
