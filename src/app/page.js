"use client";

import 'bootstrap/dist/css/bootstrap.css'
import Hero from "@/components/Hero"
import Level from "@/components/Level"
import Inhabit from "@/components/Inhabit"
import Team from "@/components/Team"
import Design from "@/components/Design"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whats from "@/components/Whats"
import Update from "@/components/Update"
import Timeline from "@/components/Timeline"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <Hero />
      <Design />
      <Level />
      <Inhabit />
      <Team />
      <Whats />
      <Timeline />
      <Update />
      <Footer />


    </>
  );
}