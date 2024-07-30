"use client";

import React, { useEffect, useRef } from "react";
import CustomLink from "./CustomLink";
import { gsap } from "gsap";

const Portfolio = () => {
  const container = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#cursor",
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, duration: 0.5, repeat: -1, ease: "steps(1)" },
    );
  }, []);
  return (
    <>
      <div
        ref={container}
        className="relative mt-[250px] h-full w-full border-t border-gray-300 px-4 py-4 sm:mt-[150px] xxl:mt-[400px] xxl:py-8"
      >
        <div className="portfolio__head flex w-full items-start justify-between">
          <div className="flex w-1/2 items-center justify-start gap-2 xxl:gap-4">
            <div className="h-3 w-3 rounded-full bg-black xxl:h-5 xxl:w-5" />
            <h2 className="text-center font-[Milk-2] text-lg leading-normal text-black xxl:text-3xl">
              Portfolio
            </h2>
          </div>
          <div className="flex w-1/2 items-start justify-between sm:justify-end">
            <div className="overflow-hidden">
              <h4
                ref={text}
                className="w-[380px] text-left font-[Milk] text-[34px] font-semibold leading-[1.2] text-black sm:hidden xxl:w-[600px] xxl:text-5xl xxl:leading-[1.4]"
              >
                We help brands grow and tell their stories to the world.
              </h4>
            </div>
            <h4 className="font-[Milk] text-[34px] font-semibold leading-[1.2] text-black xxl:text-5xl xxl:leading-[1.4]">
              <span id="cursor">_</span>13
            </h4>
          </div>
        </div>
        <h4 className="hidden w-[380px] text-left font-[Milk] text-[34px] font-semibold leading-[1.2] text-black sm:block sm:text-xl sm:font-normal xxl:w-[600px] xxl:text-5xl xxl:leading-[1.4]">
          We help brands grow and tell their stories to the world.
        </h4>
        <div className="portfolio_img-container mt-[100px] flex h-full w-full items-center justify-between gap-3 sm:mt-[50px] sm:flex-col sm:gap-4 xxl:gap-6">
          <div className="hover-parent img-hover w-1/2 sm:w-full">
            <div className="h-[500px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[450px] xxl:h-[800px] xxl:rounded-2xl">
              <img
                src="/images/port-1.gif"
                className="images-zoom h-full w-full rounded-xl object-cover"
                alt="Communication"
              />
            </div>
            <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
              Milk Network Grow Brands - Campaign Edition
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
              Campaign
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
              (2024)
            </h4>
          </div>
          <div className="hover-parent img-hover w-1/2 sm:w-full">
            <div className="h-[500px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[450px] xxl:h-[800px] xxl:rounded-2xl">
              <img
                src="/images/port-3.png"
                className="images-zoom h-full w-full rounded-xl object-cover"
                alt="Communication"
              />
            </div>
            <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
              Environmental Branding & Way Finding System
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
              Way-finding
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
              (2021)
            </h4>
          </div>
        </div>
        {/* container-2 */}
        <div className="portfolio_img-container mt-[40px] flex h-full w-full items-start justify-between gap-3 sm:flex-col sm:gap-4 xxl:gap-6">
          <div className="hover-parent img-hover w-1/2 sm:w-full">
            <div className="h-[500px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[450px] xxl:h-[800px] xxl:rounded-2xl">
              <img
                src="/images/port-6.png"
                className="images-zoom h-full w-full rounded-xl object-cover"
                alt="Communication"
              />
            </div>
            <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
              Milk Network Grow Brands - Campaign Edition
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
              Campaign
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
              (2024)
            </h4>
          </div>
          <div className="flex w-1/2 items-center justify-center gap-3 sm:w-full sm:flex-col sm:gap-4 xxl:gap-6">
            <div className="hover-parent img-hover w-1/2 sm:w-full">
              <div className="h-[300px] w-full overflow-hidden rounded-xl lg:h-[250px] xxl:h-[500px] xxl:rounded-2xl">
                <img
                  src="/images/port-5.png"
                  className="images-zoom h-full w-full rounded-xl object-cover"
                  alt="Communication"
                />
              </div>
              <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
                Environmental Branding
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
                Way-finding
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
                (2021)
              </h4>
            </div>
            <div className="hover-parent img-hover w-1/2 sm:w-full">
              <div className="h-[300px] w-full overflow-hidden rounded-xl lg:h-[250px] xxl:h-[500px] xxl:rounded-2xl">
                <img
                  src="/images/port-4.png"
                  className="images-zoom h-full w-full rounded-xl object-cover"
                  alt="Communication"
                />
              </div>
              <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
                Saudi Lime
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
                Way-finding, Strategy, Brands
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
                (2021)
              </h4>
            </div>
          </div>
        </div>
        {/* container-3 */}
        <div className="portfolio_img-container mt-[40px] flex h-full w-full items-center justify-between gap-3 sm:flex-col sm:gap-4 xxl:gap-6">
          <div className="hover-parent img-hover w-1/2 sm:w-full">
            <div className="h-[500px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[450px] xxl:h-[800px] xxl:rounded-2xl">
              <img
                src="/images/port-8.png"
                className="images-zoom h-full w-full rounded-xl object-cover"
                alt="Communication"
              />
            </div>
            <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
              Milk Network Grow Brands - Campaign Edition
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
              Campaign
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
              (2024)
            </h4>
          </div>
          <div className="hover-parent img-hover w-1/2 sm:w-full">
            <div className="h-[500px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[450px] xxl:h-[800px] xxl:rounded-2xl">
              <img
                src="/images/port-4.png"
                className="images-zoom h-full w-full rounded-xl object-cover"
                alt="Communication"
              />
            </div>
            <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
              Environmental Branding & Way Finding System
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
              Way-finding
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
              (2021)
            </h4>
          </div>
        </div>
        {/* container-4 */}
        <div className="portfolio_img-container mt-[40px] flex h-full w-full flex-row-reverse items-start justify-between gap-3 sm:flex-col sm:gap-4 xxl:gap-6">
          <div className="hover-parent img-hover w-1/2 sm:w-full">
            <div className="h-[500px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[450px] xxl:h-[800px] xxl:rounded-2xl">
              <img
                src="/images/port-3.png"
                className="images-zoom h-full w-full rounded-xl object-cover"
                alt="Communication"
              />
            </div>
            <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
              Milk Network Grow Brands - Campaign Edition
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
              Campaign
            </h4>
            <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
              (2024)
            </h4>
          </div>
          <div className="flex w-1/2 items-center justify-center gap-3 sm:w-full sm:flex-col xxl:gap-6">
            <div className="hover-parent img-hover w-1/2 sm:w-full">
              <div className="h-[300px] w-full overflow-hidden rounded-xl lg:h-[250px] xxl:h-[500px] xxl:rounded-2xl">
                <img
                  src="/images/port-5.png"
                  className="images-zoom h-full w-full rounded-xl object-cover"
                  alt="Communication"
                />
              </div>
              <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal sm:text-[15px] xxl:text-3xl">
                Environmental Branding
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] sm:text-[15px] xxl:text-2xl">
                Way-finding
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-normal sm:text-[15px] xxl:text-2xl">
                (2021)
              </h4>
            </div>
            <div className="hover-parent img-hover w-1/2 sm:w-full">
              <div className="h-[300px] w-full overflow-hidden rounded-xl lg:h-[250px] xxl:h-[500px] xxl:rounded-2xl">
                <img
                  src="/images/port-4.png"
                  className="images-zoom h-full w-full rounded-xl object-cover"
                  alt="Communication"
                />
              </div>
              <h4 className="hover-line mt-5 font-[Milk-2] text-lg font-normal xxl:text-3xl">
                Saudi Lime
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-[.9] xxl:text-2xl">
                Way-finding, Strategy, Brands
              </h4>
              <h4 className="font-[Milk-2] text-lg font-normal leading-normal xxl:text-2xl">
                (2021)
              </h4>
            </div>
          </div>
        </div>
      </div>
      <CustomLink
        title={"Works"}
        date={"_35"}
        buttonText={"Discover all works"}
      />
    </>
  );
};

export default Portfolio;
