"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const imageRefs = {
    image1: useRef(null),
    image2: useRef(null),
    image3: useRef(null),
  };

  useEffect(() => {
    const container = containerRef.current;
    const images = Object.values(imageRefs).map((ref) => ref.current);

    // Initial widths for images
    images.forEach((image, index) => {
      gsap.set(image, {
        width: index === 0 ? "70%" : index === 1 ? "30%" : "0%",
      });
    });

    images.forEach((image, index) => {
      // Create a timeline for each image
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "center 40%",
          scrub: true, // Smooth animation
          onUpdate: (self) => {
            // Calculate width based on scroll progress
            const progress = self.progress;
            const minWidth = index === 0 ? 70 : index === 1 ? 30 : 0; // Initial widths for images
            const maxWidth = 100; // Maximum width you want to reach
            const newWidth = minWidth + (maxWidth - minWidth) * progress;

            // Update image width
            gsap.to(image, {
              width: `${newWidth}%`,
              duration: 1, // Adjust animation speed
              ease: "ease.inOut",
            });
          },
        },
      });
    });

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);
  return (
    <>
      <div
        ref={containerRef}
        className="what-we-do-section relative mt-[100px] h-full w-full px-5"
      >
        <div className="wrapper-work flex w-full flex-col items-center justify-center">
          <div className="flex h-[240px] w-full items-center justify-between border-y border-gray-300 py-3 sm:h-[324px] sm:flex-col sm:items-start sm:justify-start xxl:h-[500px] xxl:py-10">
            <div className="flex h-full flex-col items-start justify-between sm:h-max sm:flex-row">
              <div className="flex items-center justify-start gap-2">
                <div className="h-3 w-3 rounded-full bg-black xxl:h-6 xxl:w-6" />
                <h2 className="text-center font-[Milk-2] text-lg leading-normal text-black xxl:text-5xl">
                  What We Do
                </h2>
              </div>
              <h2 className="text-center font-[Milk-2] text-3xl font-normal leading-[.9] text-black sm:hidden xxl:text-5xl">
                Strategy
              </h2>
            </div>
            <div className="img h-full w-1/2 rounded-lg sm:mt-3 sm:flex sm:h-[95%] sm:w-full sm:flex-col">
              <img
                ref={imageRefs.image1}
                src="/images/work-1.png"
                className="h-full w-full rounded-lg object-cover"
                alt="work-1"
              />
              <h2 className="mt-4 hidden text-center font-[Milk-2] text-3xl font-normal leading-[.9] text-black sm:block sm:text-left sm:text-xl xxl:text-5xl">
                Strategy
              </h2>
            </div>
          </div>
          <div className="flex h-[240px] w-full items-center justify-between border-y border-gray-300 py-3 sm:h-[300px] sm:flex-col sm:items-start sm:justify-start xxl:h-[500px] xxl:py-10">
            <div className="flex h-full flex-col items-start justify-end sm:h-max sm:flex-row">
              <h2 className="text-center font-[Milk-2] text-3xl font-normal leading-[.9] text-black sm:hidden xxl:text-5xl">
                Visual identity
              </h2>
            </div>
            <div className="img h-full w-1/2 rounded-lg sm:mt-3 sm:flex sm:h-[95%] sm:w-full sm:flex-col">
              <img
                ref={imageRefs.image2}
                src="/images/work-2.png"
                className="h-full w-full rounded-lg object-cover"
                alt="work-1"
              />
              <h2 className="mt-4 hidden text-center font-[Milk-2] text-3xl font-normal leading-[.9] text-black sm:block sm:text-left sm:text-xl xxl:text-5xl">
                Visual identity
              </h2>
            </div>
          </div>
          <div className="flex h-[240px] w-full items-center justify-between border-y border-gray-300 py-3 sm:h-[300px] sm:flex-col sm:items-start sm:justify-start xxl:h-[500px] xxl:py-10">
            <div className="flex h-full flex-col items-start justify-end sm:h-max sm:flex-row">
              <h2 className="text-center font-[Milk-2] text-3xl font-normal leading-[.9] text-black sm:hidden xxl:text-5xl">
                Communication
              </h2>
            </div>
            <div className="img h-full w-1/2 rounded-lg sm:mt-3 sm:flex sm:h-[95%] sm:w-full sm:flex-col">
              <img
                ref={imageRefs.image3}
                src="/images/work-3.jpg"
                className="h-full w-full rounded-lg object-cover"
                alt="work-1"
              />
              <h2 className="mt-4 hidden text-center font-[Milk-2] text-3xl font-normal leading-[.9] text-black sm:block sm:text-left sm:text-xl xxl:text-5xl">
                Communication
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
