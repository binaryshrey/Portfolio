"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import { AiFillCalendar } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { RiDownloadCloudFill } from "react-icons/ri";
import { GoClockFill } from "react-icons/go";

const Contents = ({ content }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  // Fallbacks in case some content fields are missing
  const {
    link,
    imageURI,
    imageURIMobile,
    name,
    description,
    publishedOn,
    readTime,
    stars,
    downloads,
    tags = [],
  } = content;

  return (
    <div data-aos="fade-up" className=" md:my-12 mx-3 md:mx-12">
      {/* Card Container */}
      <div className="bg-[#202020] rounded-xl overflow-hidden shadow-md transition-transform">
        {/* Image */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <picture>
            <source srcSet={imageURI} media="(min-width: 768px)" />
            <img
              src={imageURIMobile}
              alt={name || "content image"}
              className="w-full h-auto max-h-[36rem] object-cover object-top"
            />
          </picture>
        </a>

        {/* Content Body */}
        <div className="p-6">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap mb-6">
              {tags.map((tag) => (
                <a
                  key={uuidv4()}
                  href={tag.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  <span className="bg-[#000] text-xs px-3 py-1 rounded-full mr-2 mb-2 cursor-pointer transition-colors hover:bg-zinc-700">
                    {tag.name}
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* Title */}
          {name && (
            <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
          )}

          {/* Description */}
          {description && (
            <p className="text-md text-zinc-400 whitespace-pre-line mb-6">
              {description}
            </p>
          )}

          {/* Footer Info (Date, Time, Stars, Downloads) */}
          {publishedOn && (
            <div className="flex flex-col flex-row items-center justify-between text-zinc-400 text-sm mt-4 gap-3">
              {/* Date */}
              <div className="flex items-center">
                <AiFillCalendar size={16} />
                <span className="ml-2 text-sm">{publishedOn}</span>
              </div>

              {/* Secondary info */}
              <div className="flex items-center">
                {readTime ? (
                  <>
                    <GoClockFill size={16} />
                    <span className="ml-2 text-sm">{readTime} min read</span>
                  </>
                ) : stars ? (
                  <>
                    <FaStar size={16} />
                    <span className="ml-2 text-sm">{stars} stars</span>
                  </>
                ) : (
                  <>
                    <RiDownloadCloudFill size={16} />
                    <span className="ml-2 text-sm">{downloads} downloads</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contents;
