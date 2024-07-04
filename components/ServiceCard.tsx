"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

interface ServicesProps {
  title: string;
  description: string;
  price: string;
  benefits: string[];
  cta: string;
  href: string;
}

export function ServicesCard({ title, description, price, benefits, cta, href }: ServicesProps) {
  return (
    <div>
      <BackgroundGradient className="rounded-md p-4 sm:p-10 bg-black-100">
        <h3 className="text-xl font-bold leading-[1.6] text-white">
          {title}
        </h3>

        <p className="text-sm my-4 text-white-200">
          {description}
        </p>
        <span className="text-white font-bold my-3">{price}</span>
        <ul className="space-y-1 my-4">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-700"/>
          {benefit}
        </li>
          ))}
        </ul>
        <Link href={href} target="_blank">
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