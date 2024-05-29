import Hero from "@/components/Hero";
import React from "react";
import Clients from "../../components/Clients";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Benefits />
        <Clients />
      </div>
    </main>
  );
}
