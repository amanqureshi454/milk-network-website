"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      gsap.to(".cursor", {
        x: e.clientX ,
        y: e.clientY,
        duration: 0.5,
        ease: "ease.inOut",
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorVariant]);

  const handleMouseEnterText = () => {
    setCursorVariant("→");
    gsap.to(".cursor", {
      height: 70,
      width: 70,
      backgroundColor: "black",
      mixBlendMode: "normal",
      duration: 0.5,
      ease: "ease.inOut",
    });
  };

  const handleMouseLeaveText = () => {
    setCursorVariant(" ");
    gsap.to(".cursor", {
      height: "20px",
      width: "20px",
      backgroundColor: "black",
      mixBlendMode: "normal",
      duration: 0.5,
      ease: "ease.inOut",
    });
  };

  useEffect(() => {
    const textElements = document.querySelectorAll(".img-hover");
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterText);
      el.addEventListener("mouseleave", handleMouseLeaveText);
    });

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterText);
        el.removeEventListener("mouseleave", handleMouseLeaveText);
      });
    };
  }, []);

  return (
    <div className="cursor pointer-events-none fixed left-0 top-0 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
      {cursorVariant}
    </div>
  );
};

export default Cursor;
