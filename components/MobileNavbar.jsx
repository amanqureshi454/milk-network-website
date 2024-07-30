import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MobileNavbar = ({ links, menuIsOpen, setMenuIsOpen }) => {
  const menuContainer = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const menu = menuContainer.current;

    // Set initial state of elements
    gsap.set(".hover-links", { y: -100, opacity: 0 });
    gsap.set(".social-links li", { y: -100, opacity: 0 });

    // Create timeline for animations
    tl.current
      .to(menu, {
        height: "100%",
        duration: 0.8,
        ease: "power3.inOut",
      })
      .to(
        ".hover-links",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.6", // Overlap the animations
      )
      .to(
        ".social-links li",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.inOut",
        },
        "-=0.6", // Overlap the animations
      );
  }, []);

  useEffect(() => {
    if (menuIsOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuIsOpen]);

  const openMenuHandler = () => {
    setMenuIsOpen(false);
  };
  return (
    <div className="mobile__navbar lg:hidden xl:hidden">
      {menuIsOpen && (
        <div
          ref={menuContainer}
          className="menu fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-start justify-between overflow-y-hidden bg-white pb-2"
        >
          <div className="w-full">
            <div className="mobile__header flex w-full items-center justify-end overflow-y-hidden px-4 py-4 shadow-md">
              <div
                onClick={openMenuHandler}
                className="close__icon cursor-pointer font-[Milk-2] font-light capitalize text-black underline"
              >
                close
              </div>
            </div>
            <div className="mobile__links mt-14 flex w-full flex-col items-start justify-start gap-3 overflow-y-hidden px-4">
              {links.map((item, index) => (
                <div  key={index} className="overflow-hidden">
                  <div
                   
                    className="hover-links font-[Milk-2] text-5xl font-light capitalize text-black"
                    href={item.href}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-links flex w-full flex-col items-start justify-start overflow-y-hidden px-4">
            <div className="overflow-hidden">
              <li className="decoration-none list-none font-[Milk-2] text-lg font-light capitalize text-black">
                Office
              </li>
            </div>
            <div className="overflow-hidden">
              <li className="decoration-none list-none font-[Milk-2] text-2xl font-light capitalize text-black">
                Jeddah
              </li>
            </div>
            <div className="overflow-hidden">
              <li className="decoration-none list-none font-[Milk-2] text-2xl font-light capitalize text-black">
                Turkey
              </li>{" "}
            </div>
            <div className="overflow-hidden">
              <li className="decoration-none list-none font-[Milk-2] text-2xl font-light capitalize text-black">
                Japan
              </li>
            </div>
          </div>
          <h6 className="hover-links px-2 font-[Milk-2] text-sm font-normal capitalize text-black">
            ©️ 2024 Milk Network All Rights & Reserved
          </h6>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
