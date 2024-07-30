"use client";

import React, { useEffect, useRef } from "react";
import CustomLink from "./CustomLink";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const containerRef = useRef(null);

  const splitTextIntoSpans = (text) => {
    return (
      <>
        {text.split("").map((char, index) => (
          <h4
            key={index}
            className="animated-text inline-block overflow-hidden font-[Milk-2] text-[7vw] font-medium leading-[.9] sm:text-[55px]"
          >
            {char}
          </h4>
        ))}
      </>
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    const elements = document.querySelectorAll(".animated-text");
    const plusIcons = document.querySelectorAll(".plus-icon");

    // Set initial opacity of the container
    gsap.set(container, { opacity: 0 });
    gsap.set(elements, { opacity: 0, y: 100 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top 40%",
      end: "top 15%",
      onEnter: () => {
        // Reveal container
        gsap.to(container, { opacity: 1, duration: 1 });

        // Animate text elements and plus icons simultaneously
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "ease",
        });

        plusIcons.forEach((icon) => {
          gsap.to(icon, {
            rotate: 180,
            duration: 0.5,
            ease: "power1.inOut",
          });
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const plusIconAnimation = (event) => {
    gsap.to(event.currentTarget.querySelector(".plus-icon"), {
      rotate: 180,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  const resetPlusIconAnimation = (event) => {
    gsap.to(event.currentTarget.querySelector(".plus-icon"), {
      rotate: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };
  return (
    <>
      <div
        ref={containerRef}
        className="bento__grid relative mt-8 h-full w-full px-4"
      >
        <div className="grid-1 flex w-full items-center justify-center gap-3 sm:flex-col lg:justify-between xxl:gap-6">
          <div className="item-1 flex w-1/2 items-start justify-start gap-4 rounded-xl bg-black p-6 sm:h-[200px] sm:w-full md:h-[250px] lg:h-[320px] xl:h-[380px] xxl:h-[580px] xxl:p-12">
            <div className="circle h-8 w-8 rounded-full bg-white xxl:h-12 xxl:w-12" />
            <h3 className="font-[Milk-2] font-medium leading-[.7] text-white sm:text-3xl lg:text-[35px] xl:text-[52px] xxl:text-[75px]">
              Number and Facts
            </h3>
          </div>
          <div className="flex w-1/2 items-center justify-center gap-3 sm:w-full xxl:gap-6">
            <div
              onMouseEnter={plusIconAnimation}
              onMouseLeave={resetPlusIconAnimation}
              className="item-1 duration-800 flex w-1/2 flex-col items-start justify-between rounded-xl bg-gray-100 py-4 transition hover:bg-[#ffe943] sm:h-[200px] md:h-[250px] lg:h-[320px] xl:h-[380px] xxl:h-[580px] xxl:px-6 xxl:py-10"
            >
              <div className="overflow-hidden px-5">
                {splitTextIntoSpans("200+")}
              </div>
              <div className="bento-grids flex w-full flex-col items-start justify-start gap-2 border-t border-gray-300 py-4 sm:py-0 sm:pt-2 xxl:gap-4">
                <h6 className="px-5 font-[Milk] text-2xl leading-normal text-black sm:text-xl xxl:text-5xl">
                  Brands
                </h6>
                <div className="px-5">
                  <img
                    src="/images/plus-main.png"
                    className="plus-icon h-8 w-8 object-cover sm:h-6 sm:w-6 xxl:h-16 xxl:w-16"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              onMouseEnter={plusIconAnimation}
              onMouseLeave={resetPlusIconAnimation}
              className="item-2 duration-400 flex w-1/2 flex-col items-start justify-between rounded-xl bg-gray-100 py-4 transition-all ease-in-out hover:bg-[#ffe943] sm:h-[200px] md:h-[250px] lg:h-[320px] xl:h-[380px] xxl:h-[580px] xxl:p-10 xxl:px-6"
            >
              <div className="overflow-hidden px-5">
                {splitTextIntoSpans("120+")}
              </div>
              <div className="bento-grids flex w-full flex-col items-start justify-start gap-2 border-t border-gray-300 py-4 sm:py-0 sm:pt-2 xxl:gap-4">
                <h6 className="px-5 font-[Milk] text-2xl leading-normal text-black sm:text-xl xxl:text-5xl">
                  Videos
                </h6>
                <div className="px-5">
                  <img
                    src="/images/plus-main.png"
                    className="plus-icon h-8 w-8 object-cover sm:h-6 sm:w-6 xxl:h-16 xxl:w-16"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-2 mt-3 flex w-full items-center justify-center gap-3 xxl:gap-6">
          <div
            onMouseEnter={plusIconAnimation}
            onMouseLeave={resetPlusIconAnimation}
            className="item-1 duration-400 flex h-[380px] w-1/2 flex-col items-start justify-between rounded-xl bg-gray-100 py-4 transition-all ease-in-out hover:bg-[#ffe943] sm:h-[200px] md:h-[250px] lg:h-[320px] xl:h-[380px] xxl:h-[580px] xxl:p-10 xxl:px-6"
          >
            <div className="overflow-hidden px-5">
              {splitTextIntoSpans("78+")}
            </div>
            <div className="bento-grids flex w-full flex-col items-start justify-start gap-2 border-t border-gray-300 py-4 sm:py-0 sm:pt-2 xxl:gap-4">
              <h6 className="px-5 font-[Milk] text-2xl leading-normal text-black sm:text-xl xxl:text-5xl">
                Strategies
              </h6>
              <div className="px-5">
                <img
                  src="/images/plus-main.png"
                  className="plus-icon h-8 w-8 object-cover sm:h-6 sm:w-6 xxl:h-16 xxl:w-16"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={plusIconAnimation}
            onMouseLeave={resetPlusIconAnimation}
            className="item-2 duration-400 flex h-[380px] w-1/2 flex-col items-start justify-between rounded-xl bg-gray-100 py-4 transition-all ease-in-out hover:bg-[#ffe943] sm:h-[200px] md:h-[250px] lg:h-[320px] xl:h-[380px] xxl:h-[580px] xxl:p-10 xxl:px-6"
          >
            <div className="overflow-hidden px-5">
              {splitTextIntoSpans("16+")}
            </div>
            <div className="bento-grids flex w-full flex-col items-start justify-start gap-2 border-t border-gray-300 py-4 sm:py-0 sm:pt-2 xxl:gap-4">
              <h6 className="px-5 font-[Milk] text-2xl leading-normal text-black sm:text-xl xxl:text-5xl">
                Industries
              </h6>
              <div className="px-5">
                <img
                  src="/images/plus-main.png"
                  className="plus-icon h-8 w-8 object-cover sm:h-6 sm:w-6 xxl:h-16 xxl:w-16"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomLink
        title={"About us"}
        date={"©️12-24"}
        buttonText={"Read more"}
      />
    </>
  );
};

export default BentoGrid;
