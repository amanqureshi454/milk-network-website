"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Cursor from "./Cursor";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import Loader from "./Loader";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Hero = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const videoRef = useRef(null);
  const onScrollMenuHide = useRef(null);
  const [menuStick, setMenuStick] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);

  const navlinks = [
    { id: 1, title: "work" },
    { id: 2, title: "Expertise" },
    { id: 3, title: "Community" },
    { id: 4, title: "Discover" },
  ];

  const splitTextIntoSpans = (text) => {
    return (
      <>
        {text.split("").map((char, index) => (
          <h1
            key={index}
            style={{
              letterSpacing: char === " " ? "normal" : "-4px",
              display: char === " " ? "inline-block" : "inline",
            }}
            className="hero-text font-[Milk-2] font-medium leading-[1] text-black sm:text-[12vw] md:text-[10vw] xl:text-[8vw] xxl:text-[10vw]"
          >
            {char === " " ? "\u00A0" : char}
          </h1>
        ))}
      </>
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const isMobile = window.innerWidth <= 540;
    const elements = document.querySelectorAll(".hero-text");
    const cursor = cursorRef.current;
    const textElement = textRef.current;
    let lastScrollY = window.scrollY;

    gsap.set(elements, { opacity: 0, y: 100 });
    gsap.set(textElement, { opacity: 0, y: 100 });

    gsap.to(textElement, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2.3,
      ease: "ease",
    });

    gsap.fromTo(
      cursor,
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, duration: 0.5, repeat: -1, ease: "steps(1)" },
    );

    const texts = [
      "Businesses",
      "Dreams",
      "People",
      "Products",
      "Community",
      "Talents",
      "Knowledge",
      "Ideas",
      "Brands",
      "Partnerships",
    ];
    let t1Master = gsap.timeline({ repeat: -1 });
    texts.forEach((text, index) => {
      let t1Text = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      t1Text.to(textElement, { duration: 0.7, text: text });
      t1Master.add(t1Text);
    });

    elements.forEach((element, index) => {
      gsap.to(
        element,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "ease",
          stagger: 0.02,
          delay: index * 0.1,
        },
        2.3,
      );
    });

    const hideMenu = () => {
      if (onScrollMenuHide.current) {
        gsap.to(onScrollMenuHide.current, {
          y: "-100%",
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    const showMenu = () => {
      if (onScrollMenuHide.current) {
        gsap.to(onScrollMenuHide.current, {
          y: "0%",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const commonTriggerConfig = {
      trigger: container,
      start: "top top",
      pin: true,
      scrub: true,
      markers: false,
      onLeave: () => setMenuStick(true),
      onLeaveBack: () => setMenuStick(false),
      onEnterBack: () => setMenuStick(false),
      onUpdate: (self) => {
        const progress = self.progress;
        const width = isMobile ? 30 + progress * 60 : 25 + progress * 73;
        const height = isMobile ? 15 + progress * 20 : 30 + progress * 70;

        gsap.to(video, {
          width: `${width}%`,
          height: `${height}vh`,
          ease: "none",
          overwrite: "auto",
        });

        if (progress > 0.1) {
          hideMenu();
        } else {
          showMenu();
        }

        lastScrollY = window.scrollY;
      },
    };

    ScrollTrigger.create(
      isMobile
        ? { ...commonTriggerConfig, end: "+=50%" }
        : { ...commonTriggerConfig, end: "+=100%" },
    );

    const AnimationHandler = () => {
      gsap.fromTo(
        ".right-text",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 2.3,
          y: 0,
          ease: "ease.in",
        },
      );
    };

    AnimationHandler();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const text =
    "Milk Network is a brand development firm that works in thought and in action.";

  const splitText = text.split(" ");

  return (
    <>
      {isLoading && <Loader onLoad={() => setIsLoading(false)} />}

      <Cursor />
      <div
        ref={containerRef}
        className="hero-section relative h-screen w-full overflow-hidden bg-white px-4 sm:h-[110vh]"
      >
        <div
          ref={onScrollMenuHide}
          className={`nav ml-auto flex w-1/2 items-center justify-between pl-12 pt-2 sm:hidden md:hidden`}
        >
          <div className="mobile__links flex w-full items-start justify-start gap-10 overflow-y-hidden">
            {navlinks.map((item, index) => (
              <h4
                key={index}
                className="hover-links cursor-pointer font-[Milk-2] font-light capitalize text-black lg:text-lg xl:text-lg xxl:text-3xl"
              >
                {item.title}
              </h4>
            ))}
          </div>

          <a
            href="/contact"
            className="hover-links font-[Milk-2] font-light capitalize text-black lg:text-lg xl:text-lg xxl:text-3xl"
          >
            contact
          </a>
        </div>
        <a
          onClick={() => setMenuIsOpen((open) => !open)}
          className="absolute right-5 top-3 z-10 hidden cursor-pointer font-[Milk-2] font-light capitalize text-black sm:block md:block md:text-2xl lg:text-lg xl:text-lg xxl:text-3xl"
        >
          Menu
        </a>
        {menuIsOpen && (
          <MobileNavbar
            menuIsOpen={menuIsOpen}
            setMenuIsOpen={setMenuIsOpen}
            links={navlinks}
          />
        )}
        <div className="main__text absolute left-5 top-2">
          <div className="flex overflow-hidden">
            {splitTextIntoSpans("We Grow")}
          </div>
          <div className="overflow-hidden">
            <h1
              style={{ letterSpacing: "-4px" }}
              className="type-text font-[Milk-2] font-medium capitalize leading-[1] text-black sm:text-[12vw] md:text-[10vw] xl:text-[8vw] xxl:text-[10vw]"
            >
              <span id="cursor">_</span>

              <span id="animated-text" ref={textRef}></span>
            </h1>
          </div>
        </div>
        <span className="absolute -top-5 left-1/2 h-screen w-[1px] -translate-x-1/2 transform bg-gray-300 sm:hidden"></span>
        <div className="main__subtitle absolute sm:bottom-0 sm:left-2 sm:w-[90%] md:bottom-[20%] md:right-[5%] md:w-[40%] lg:bottom-24 lg:right-[30px] lg:w-[450px] xl:bottom-28 xl:right-[230px] xl:w-[480px] xxl:bottom-60 xxl:right-[370px] xxl:w-[850px]">
          <div className="relative overflow-hidden">
            {splitText.map((item, i) => {
              return (
                <div className="inline-block overflow-hidden" key={i}>
                  <span className="right-text mr-2 block font-[Milk] font-medium leading-[1.1] text-black sm:text-xl md:text-[20px] xl:text-[32px] xxl:text-[56px]">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bottom-hero absolute bottom-2 left-5 flex w-[58%] items-center justify-between sm:hidden md:w-[65%]">
          <h4 className="font-[Milk] font-extrabold md:text-[32px] xl:text-[40px] xxl:text-[56px]">
            milk
          </h4>
          <div className="border-b-2 border-gray-300">
            <h4 className="font-[Milk-2] font-light leading-none text-gray-300 md:text-lg xl:text-lg xxl:text-4xl">
              Scroll down
            </h4>
          </div>
        </div>
        <div
          ref={videoRef}
          className="video__center absolute left-1/2 top-1/2 z-10 h-[30%] w-[25%] -translate-x-1/2 -translate-y-1/2 transform rounded-xl border border-gray-300 bg-black xxl:rounded-3xl"
        >
          <video
            ref={videoRef}
            className="h-full w-full rounded-xl xxl:rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="images/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      {menuStick && (
        <div className="menu_after-scroll_animation fixed left-0 top-0 z-[47] w-full">
          <div
            ref={onScrollMenuHide}
            className={`nav ml-auto flex w-full items-center justify-between bg-white px-4 shadow-sm shadow-white sm:hidden md:py-2`}
          >
            <h4 className="font-[Milk] font-extrabold md:text-[32px] xl:text-[40px] xxl:text-[56px]">
              milk
            </h4>
            <div className="mobile__links flex items-start justify-start gap-10 overflow-y-hidden">
              {navlinks.map((item, index) => (
                <h4
                  key={index}
                  className="hover-links cursor-pointer font-[Milk-2] font-light capitalize text-black md:text-xl xl:text-lg xxl:text-3xl"
                >
                  {item.title}
                </h4>
              ))}
            </div>

            <a
              href="/contact"
              className="hover-links font-[Milk-2] font-light capitalize text-black lg:text-lg xl:text-lg xxl:text-3xl"
            >
              contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
