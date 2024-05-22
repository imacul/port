import React from 'react'
import { Spotlight } from './ui/Spotlight';
import Link from 'next/link';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">Online business services from {''}
            <Link href="https://projects-mastery.vercel.app" target="_blank">
            <span className="text-purple">Projects Mastery</span>
            </Link> 
            </h2>
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transform Your Business with Cutting-Edge Web Solutions"
             />
             <p className="text-center my-4 text-sm md:text-lg lg:text-lg">At Projects Mastery Connect, we specialize in delivering top-notch web solutions. Whether you're looking to revamp your existing site or build a new one from scratch, we provide the tools and expertise to elevate your online presence.</p>
             <Link href="#about">
              <MagicButton
                title="Get your website Now!"
                icon={<FaLocationArrow />}
                position={'right'}
               />
            </Link> 
        </div>
    </div>
    </section>
  )
}

export default Hero;