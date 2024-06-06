import Hero from "@/components/Hero";
import React from "react";
import Clients from "../../components/Clients";
import Benefits from "@/components/Benefits";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main>
        <Hero />
        <Benefits />
        <Clients />
        <Approach />
    </main>
  );
}
