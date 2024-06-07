"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


interface PackageProps {
  title: string;
  description: string;
  price: string;
  benefits: string[];
  cta: string;
}

export function PackagesCard({ title, description, price, benefits, cta }: PackageProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-md p-4 sm:p-10 bg-black-100">
        <h3 className="text-center text-sm md:text-lg text-white">
          {title}
        </h3>

        <p className="text-sm my-4 text-white-200">
          {description}
        </p>
        <span className="text-white font-bold my-3">{price}</span>
        <ul className="space-y-1 my-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3 justify-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-700"/>
            {benefit}
          </li>
          ))}
        </ul>
        <Link href="/">
        <MagicButton
          title={cta}
          icon={<FaLocationArrow />}
          position={'right'}
        />
      </Link> 
      </BackgroundGradient>
    </div>
  );
}