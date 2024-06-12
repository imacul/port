import Hero from "@/components/Hero";
import React from "react";
import Clients from "../../components/Clients";
import Benefits from "@/components/Benefits";
import Approach from "@/components/Approach";
import Packages from "@/components/Packages";
import AdditionalServices from "../../components/AdditionalServices";
import Budget from "@/components/Budget";


export default function Home() {
  return (
    <main>
        <Hero />
        <Benefits />
        <Clients />
        <Budget />
        <Packages />
        <AdditionalServices />
        <Approach />
    </main>
  );
}
