"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeOff } from "lucide-react";
import {
  RiArrowRightUpLine,
  RiBriefcaseFill,
  RiGithubFill,
  RiGlobalLine,
  RiGraduationCapFill,
  RiLinkedinFill,
  RiPushpinFill,
  RiTwitterFill,
} from "@remixicon/react";
import LinkCard from "./LinkCard";
import SpotlightCard from "./SpotlightCard";
import GithubGraph from "./GithubGraph";
import LINKS from "./BentoGridLinks";

const BentoMobileLayout = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element on component mount
    audioRef.current = new Audio("/song.mp3");
    audioRef.current.loop = true;
    audioRef.current.muted = true;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      // Start playing if not already playing (handles first interaction)
      if (audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }

      // Toggle mute state based on current audio muted property
      const newMutedState = !audioRef.current.muted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-2 max-w-6xl mx-auto p-2">
      {/* Main (div -> SpotlightCard) */}
      <SpotlightCard className="md:col-span-2 p-3 h-64 relative flex flex-col justify-between">
        <a
          href="https://www.nyu.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1.5 right-1.5 cursor-pointer"
        >
          <Image
            src="/nyu.svg"
            alt="NYU"
            width={36}
            height={36}
            className="brightness-0 invert"
          />
        </a>
        <div className="flex items-center gap-4">
          <Image
            src="/profile_pic.webp"
            alt="Shreyansh Saurabh"
            width={120}
            height={120}
            className="rounded-2xl"
          />
          <div>
            <h2 className="text-2xl font-medium">Shreyansh Saurabh</h2>
            <div className="mt-1 flex flex-col gap-1 text-sm text-[#808080]">
              <p className="flex items-center gap-2">
                <RiGraduationCapFill size={14} className="shrink-0" />
                MSCE @New York University
              </p>
              <p className="flex items-center gap-2">
                <RiBriefcaseFill size={14} className="shrink-0" />
                StarSling (YC 25), Bank of America
              </p>
            </div>
          </div>
        </div>
        <GithubGraph />
      </SpotlightCard>

      {/* Substack */}
      <LinkCard
        href={LINKS.SUBSTACK}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open substack.com"
        className="p-3 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/substack.webp"
            alt="mindfulness"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-medium mt-2">Preaching Mindfulness ☘️</h2>
          <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
              <RiGlobalLine size={12} />
              <p className="text-sm">substack.com</p>
              <RiArrowRightUpLine size={12} />
            </div>
          </div>
        </div>
        <div></div>
      </LinkCard>

      {/* Portfolio */}
      <LinkCard
        href={LINKS.PORTFOLIO}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open shreyanshsaurabh.com"
        className="p-3 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden h-40">
          <Image
            src="/sp.webp"
            alt="portfolio"
            width={400}
            height={200}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h2 className="text-xl font-medium mt-2">My Portfolio</h2>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <RiGlobalLine size={12} />
            <p>shreyanshsaurabh.com</p>
            <RiArrowRightUpLine size={12} />
          </div>
        </div>
      </LinkCard>

      {/* Background (div -> SpotlightCard) */}
      <SpotlightCard className="p-3 h-64 flex flex-col">
        <h2 className="text-xl font-medium">My Background</h2>
        <p className="text-sm text-neutral-400 mt-4">
          New York University graduate with 3+ years of professional &
          entrepreneurial experience with leading Fortune-100 companies and
          emerging tech startups.
        </p>
      </SpotlightCard>

      {/* Github */}
      <LinkCard
        href={LINKS.GITHUB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open github.com"
        className="p-3 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/github.webp"
            alt="portfolio"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
        </div>
        <h2 className="text-xl font-medium mt-2">My Workspace</h2>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <RiGlobalLine size={12} />
            <p>github.com</p>
            <RiArrowRightUpLine size={12} />
          </div>
        </div>
      </LinkCard>

      {/* Hashnode */}
      <div className="relative">
        <LinkCard
          href={LINKS.HASHNODE}
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="Open hashnode.com"
          className="p-3 h-64 flex flex-col justify-between cursor-pointer"
        >
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/blog.webp"
              alt="blogs"
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
          </div>
          <h2 className="text-xl font-medium mt-2">My Blogs</h2>
          <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
              <RiGlobalLine size={16} />
              <p>hashnode.com</p>
              <RiArrowRightUpLine size={16} />
            </div>
          </div>
        </LinkCard>

        <a
          href={LINKS.PINNED_BLOG}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinned post: Introducing sling, an agent-first CLI for your CI"
          className="absolute left-[38%] right-3 top-3 z-10 rounded-md border border-[#404040] bg-[#262626] px-3.5 pt-3.5 pb-5 text-white shadow-lg shadow-black/50"
        >
          <RiPushpinFill
            size={20}
            className="absolute -top-2 -right-1 -rotate-6 text-[#e5484d] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
          />
          <p className="text-[13px] font-medium leading-snug">
            Introducing sling: an agent-first CLI for your CI
          </p>
          <span className="mt-1.5 block text-[11px] font-medium opacity-60">
            starsling.dev
          </span>
        </a>
      </div>

      {/* Cal */}
      <LinkCard
        href={LINKS.CAL}
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Open cal.com"
        className="p-3 h-64 flex flex-col justify-between cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/call.webp"
            alt="call"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
        </div>
        <h2 className="text-xl font-medium">Let&#39;s Talk!</h2>
        <div className="text-sm mt-4 opacity-70 group-hover:opacity-100 transition">
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white">
            <RiGlobalLine size={12} />
            <p>cal.com</p>
            <RiArrowRightUpLine size={12} />
          </div>
        </div>
      </LinkCard>

      {/* Location (div -> SpotlightCard) */}
      <SpotlightCard className="p-4 h-64 overflow-hidden">
        <div className="flex flex-col justify-start items-start h-full overflow-hidden">
          <div className="self-center flex items-center h-[120px]">
            {/* Album cover */}
            <div className="relative z-10 w-[120px] h-[120px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 border-2 border-white/10">
              <Image
                src="/cover.webp"
                alt="album cover"
                fill
                className="object-cover"
              />
            </div>
            {/* Vinyl disc - overlapping behind album cover */}
            <div className="-ml-8 z-0 flex-shrink-0 relative">
              <Image
                src="/vinyl.webp"
                alt="vinyl"
                width={110}
                height={110}
                className="animate-[spin_4s_linear_infinite]"
              />
              <Image
                src="/piano.webp"
                alt="piano"
                width={44}
                height={44}
                className="absolute top-[33px] left-[33px] z-10 rounded-full"
              />
            </div>
          </div>
          <h2 className="text-lg font-medium pt-3">Now Listening</h2>
          <h2 className="text-sm font-medium text-zinc-400">
            Comptine d'un autre été, l'après-midi
          </h2>
          <div className="text-sm mt-3 opacity-70 group-hover:opacity-100 transition flex gap-2">
            <div
              onClick={() =>
                window.open(
                  "https://open.spotify.com/track/14rZjW3RioG7WesZhYESso?si=f3ae9d652f364c38",
                  "_blank",
                )
              }
              className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white hover:cursor-pointer"
            >
              <RiGlobalLine size={16} />
              <p>spotify.com</p>
              <RiArrowRightUpLine size={16} />
            </div>
            <div>
              <div
                onClick={toggleMute}
                className="inline-flex items-center gap-1 px-2 py-1 bg-[#404040] rounded-xl text-white hover:cursor-pointer"
              >
                {isMuted ? <VolumeOff size={20} /> : <Volume2 size={20} />}
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Socials (div -> SpotlightCard) */}
      <SpotlightCard className="md:col-span-2 p-3 h-64 flex flex-col justify-between">
        <h2 className="text-lg font-medium">Find me here</h2>
        <div>
          <div>
            <div className="flex flex-col gap-1">
              <LinkCard
                href={LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Open GitHub"
                className="bg-neutral-800/60 border-[#404040] rounded-4xl px-3 w-full py-2 text-sm transition"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#404040]">
                    <RiGithubFill size={18} />
                  </span>
                  <p>Github</p>
                </div>
              </LinkCard>

              <LinkCard
                href={LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Open LinkedIn"
                className="bg-neutral-800/60 border-[#404040] rounded-4xl px-3 w-full py-2 text-sm transition"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#404040]">
                    <RiLinkedinFill size={18} />
                  </span>
                  <p>LinkedIN</p>
                </div>
              </LinkCard>

              <LinkCard
                href={LINKS.X}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Open X (Twitter)"
                className="bg-[#262626] rounded-full px-3 w-full  py-2 transition border border-[#404040]"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#404040]">
                    <RiTwitterFill size={18} />
                  </span>
                  <p>Twitter - X</p>
                </div>
              </LinkCard>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default BentoMobileLayout;
