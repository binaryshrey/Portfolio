"use client";

import Image from "next/image";
import { Globe, ArrowUpRight } from "lucide-react";
import LinkCard from "./LinkCard";
import SpotlightCard from "./SpotlightCard";
import AudioPill from "./AudioPill";
import LINKS from "./BentoGridLinks";

const BentoDesktopLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 max-w-6xl mx-auto p-8">
      {/* Substack */}
      <LinkCard
        href={LINKS.SUBSTACK}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open substack.com"
        className="md:col-span-2 md:row-span-1 p-4 h-64 flex justify-between cursor-pointer"
      >
        <div className="flex flex-col justify-between">
          <h2 className="text-xl font-medium">Preaching Mindfulness ☘️</h2>
          <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
              <Globe size={16} />
              <p>substack.com</p>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/substack.webp"
              alt="mindfulness"
              width={800}
              height={300}
              className="w-100 h-56 object-cover"
            />
          </div>
        </div>
      </LinkCard>

      {/* Portfolio */}
      <LinkCard
        href={LINKS.PORTFOLIO}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open shreyanshsaurabh.com"
        className="p-4 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/banner.webp"
            alt="portfolio"
            width={400}
            height={200}
            className="w-full h-30 object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">My Portfolio</h2>
        </div>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <Globe size={16} />
            <p>shreyanshsaurabh.com</p>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </LinkCard>

      {/* Background (div -> SpotlightCard) */}
      <SpotlightCard className="p-4 h-64 flex flex-col">
        <h2 className="text-lg font-medium">My Background</h2>
        <p className="text-sm text-neutral-400 mt-2">
          NYU graduate with 3+ years of professional & entrepreneurial
          experience with leading Fortune-100 companies and emerging tech
          startups
        </p>
      </SpotlightCard>

      {/* Github */}
      <LinkCard
        href={LINKS.GITHUB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open github.com"
        className="p-4 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/github.webp"
            alt="portfolio"
            width={400}
            height={200}
            className="w-full h-30 object-cover"
          />
        </div>
        <h2 className="text-lg font-medium">My Workspace</h2>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <Globe size={16} />
            <p>github.com</p>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </LinkCard>

      {/* Main (div -> SpotlightCard) */}
      <SpotlightCard className="md:col-span-2 p-4 h-64">
        <div className="flex mt-8 gap-4">
          <Image
            src="/profile_pic.webp"
            alt="Shreyansh Saurabh"
            width={120}
            height={120}
            className="rounded-2xl mb-3"
          />
          <div className="flex flex-col justify-between mb-4">
            <div />
            <div>
              <h2 className="text-4xl font-medium">Shreyansh Saurabh</h2>
              <p className="text-lg text-normal text-[#808080]">
                MSCE @NYU &#39;27
              </p>
            </div>
          </div>
        </div>
        <AudioPill src="/hello.mp3" />
      </SpotlightCard>

      {/* Hashnode */}
      <LinkCard
        href={LINKS.HASHNODE}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open hashnode.com"
        className="p-4 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/blog.webp"
            alt="blogs"
            width={400}
            height={200}
            className="w-full h-30 object-cover"
          />
        </div>
        <h2 className="text-lg font-medium">My Blogs</h2>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <Globe size={16} />
            <p>hashnode.com</p>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </LinkCard>

      {/* Location (div -> SpotlightCard) */}
      <SpotlightCard className="p-4 h-64 flex flex-col justify-center items-center">
        <Image
          src="/NY.webp"
          alt="NY"
          width={400}
          height={200}
          className="w-full h-80 object-cover rounded-2xl"
        />
      </SpotlightCard>

      {/* Cal */}
      <LinkCard
        href={LINKS.CAL}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open cal.com"
        className="p-4 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/call.webp"
            alt="call"
            width={400}
            height={200}
            className="w-full h-30 object-cover"
          />
        </div>
        <h2 className="text-lg font-medium">Let&#39;s Talk!</h2>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <Globe size={16} />
            <p>cal.com</p>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </LinkCard>

      {/* Socials (div -> SpotlightCard) */}
      <SpotlightCard className="md:col-span-2 p-4 h-64 flex gap-18">
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-medium" />
          <h2 className="text-lg font-medium">Find me here</h2>
        </div>
        <div className="flex flex-col justify-between">
          <div />
          <div className="flex flex-col gap-2">
            <LinkCard
              href={LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Open GitHub"
              className="bg-neutral-800/60 border-[#404040] rounded-4xl px-3 w-80 py-2 text-sm transition"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#404040]">
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={12}
                    height={12}
                  />
                </span>
                <p>Github</p>
              </div>
            </LinkCard>

            <LinkCard
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Open LinkedIn"
              className="bg-neutral-800/60 border-[#404040] rounded-4xl px-3 w-80 py-2 text-sm transition"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#404040]">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={12}
                    height={12}
                  />
                </span>
                <p>LinkedIN</p>
              </div>
            </LinkCard>

            <LinkCard
              href={LINKS.X}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Open X (Twitter)"
              className="bg-[#262626] rounded-full px-3 w-80 py-2 transition border border-[#404040]"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#404040]">
                  <Image
                    src="/twitter.svg"
                    alt="Twitter"
                    width={12}
                    height={12}
                  />
                </span>
                <p>Twitter - X</p>
              </div>
            </LinkCard>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default BentoDesktopLayout;
