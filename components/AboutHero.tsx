"use client";

import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export function AboutHero() {
  return (
    <section className="pb-20 pt-36">
    <div className="relative flex justify-center antialiased">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h1 className="relative z-10 text-[40px] md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Welcome to Projects Mastery Connect.
        </h1>
        <p className="text-white-200 max-w-lg mx-auto my-4 text-sm text-center relative z-10">We&apos;re a cutting-edge start-up software development and
           website development company dedicated to transforming your business
           vision into digital reality. With expertise, innovation, and passion,
            we deliver exceptional digital experiences that drive success.
          </p>
      </div>
      <BackgroundBeams />
    </div>
    </section>
  );
}