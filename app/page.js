import BentoGrid from "@/components/BentoGrid";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Portfolio from "@/components/Portfolio";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" relative">
        <Cursor />
        <Hero />
        <BentoGrid />
        <WhatWeDo />
        <Portfolio />
        <Contact />
        {/* <Loader /> */}
      </div>
    </>
  );
}
