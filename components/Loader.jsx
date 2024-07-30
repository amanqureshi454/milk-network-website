"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

function Loader({ onLoad }) {
  const splitTextIntoSpans = (text) => {
    return (
      <>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="intro mb-2 h-max w-max text-left font-[Milk] text-[35vw] font-[900] leading-[.8] text-black sm:text-[45vw]"
          >
            {char}
          </span>
        ))}
      </>
    );
  };

  useEffect(() => {
    // Create the GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Call onLoad function when the animation completes
        onLoad();
      },
    });

    // Set initial state and animate
    tl.set(".intro", { opacity: 0, y: 600 })
      .to(".intro", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease.in",
        stagger: {
          amount: 0.6, // Total time for the stagger
          from: "start", // Start the stagger from the beginning
          each: 0.2, // Delay each character's animation by 0.2 seconds
        },
      })
      .to(".intro", {
        letterSpacing: 0,
        fontSize: "40px", // Target font size
        duration: 1, // Duration of the font size animation
        ease: "power2.inOut",
      });

    // Cleanup function to kill GSAP animations if the component unmounts
    return () => {
      tl.kill();
    };
  }, [onLoad]);

  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-full bg-white px-4">
      <div className="flex h-full w-full items-end justify-start gap-0">
        {splitTextIntoSpans("milk")}
      </div>
    </div>
  );
}

export default Loader;
