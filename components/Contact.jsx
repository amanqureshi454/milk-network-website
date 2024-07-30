"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomLink from "./CustomLink";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const lines = document.querySelectorAll(".line");
    gsap.set(lines, {
      y: 20, // Start from 20px below
      opacity: 0, // Start invisible
    });

    lines.forEach((line, index) => {
      gsap.to(line, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Trigger animation when top of the container reaches 60% of viewport
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "ease.in",
        delay: index * 0.3, // Stagger the animations
      });
    });
  }, []);

  useEffect(() => {
    const movingImages = document.querySelectorAll(".moving_image");
    const milkImage = document.querySelector(".rotate-image");

    if (overlayIsOpen) {
      const animations = [];

      movingImages.forEach((image, index) => {
        const anim = gsap.to(image, {
          y: -window.innerHeight - 1500, // Adjust the value as needed
          duration: 15,
          ease: "ease.inOut",
          delay: index * 0.3, // Stagger the animations
          onUpdate: function () {
            const progress = this.progress(); // Get the current progress of the animation
            image.style.transform = `translateY(${progress * (-window.innerHeight - 1500)}px)`; // Update the transform property
          },
        });
        animations.push(anim);
      });

      const milkAnim = gsap.to(milkImage, {
        rotate: 360,
        duration: 15,
        ease: "ease.inOut",
        onUpdate: function () {
          const progress = this.progress(); // Access progress from the tween object
          milkImage.style.transform = `rotate(${progress * 360}deg)`; // Update the transform property
        },
      });
      animations.push(milkAnim);

      gsap
        .timeline({
          onComplete: () => {
            setOverlayIsOpen(false);
          },
        })
        .add(animations);
    }
  }, [overlayIsOpen]);
  return (
    <>
      <div
        ref={containerRef}
        className="contact__section relative mb-16 mt-[100px] h-full w-full overflow-hidden px-4 sm:mt-[50px] lg:mt-10"
      >
        <div
          style={{ backgroundImage: 'url("/images/contact.jpg")' }}
          className="contact-img img-hover relative flex h-screen w-full flex-col items-start justify-between rounded-xl bg-cover bg-center sm:h-[70vh] md:h-[70vh] lg:h-[80vh] xl:h-screen"
        >
          <div className="flex h-full w-full items-start justify-between px-8 py-5 sm:px-3 sm:py-3 xxl:px-12 xxl:py-8">
            <div className="flex items-start justify-start gap-4">
              <div className="overflow-hidden">
                <h2 className="text-left font-[Milk-2] leading-[.9] text-black sm:text-3xl sm:leading-[.8] md:text-[40px] xl:text-[60px] xxl:text-[75px]">
                  <span className="inline-block h-10 w-10 rounded-full bg-black sm:h-5 sm:w-5 lg:h-8 lg:w-8"></span>{" "}
                  <span
                    className="line py-1"
                    style={{ display: "inline-block" }}
                  >
                    From dreams to reality:
                  </span>
                  <span className="line py-1" style={{ display: "block" }}>
                    creating brands that
                  </span>
                  <span className="line py-1" style={{ display: "block" }}>
                    change the world.
                  </span>
                </h2>
              </div>
            </div>
            <div
              onMouseEnter={() => setOverlayIsOpen(true)}
              onMouseLeave={() => setOverlayIsOpen(false)}
              className="milk__img relative z-[48] flex h-[180px] w-[180px] cursor-pointer items-center justify-center rounded-full bg-[#bea4ad] sm:hidden xxl:h-[300px] xxl:w-[300px]"
            >
              <img
                src="/images/bottle.png"
                className="h-20 w-32 object-cover xxl:h-44 xxl:w-56"
                alt="bottle"
              />
              {overlayIsOpen && <OverlayOnMilkIcon />}
            </div>
          </div>
          <div className="w-full px-8 pb-6 sm:bottom-3 sm:px-3">
            <div className="flex w-full items-center justify-start">
              <div className="flex w-full flex-col items-center justify-center">
                <div className="flex w-full items-center justify-between">
                  <h4 className="font-[Milk-2] text-3xl font-medium leading-normal text-black sm:text-xl xxl:text-[50px]">
                    Get in touch
                  </h4>
                  <h4 className="font-[Milk-2] text-3xl font-medium leading-normal text-black sm:text-xl xxl:text-[50px]">
                    20:30
                  </h4>
                </div>
                <div className="custom-link SMN_effect-31 mt-2 flex h-12 w-full items-center justify-between rounded-lg bg-black px-5 xxl:h-28 xxl:rounded-2xl xxl:px-10">
                  <h5 className="centro font-[Milk-2] text-lg font-medium leading-normal text-white sm:text-xl xxl:text-4xl">
                    Contact us
                    <span> Contact us</span>
                  </h5>
                  <div className="arrow font-[Milk-2] text-xl leading-normal text-white xxl:text-4xl">
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex h-full w-full items-center justify-start sm:flex-col sm:gap-6">
          <h1 className="w-1/2 text-left font-[Milk] text-[20vw] md:text-[18vw] font-extrabold leading-[1] text-gray-300 transition-colors duration-200 ease-in-out hover:text-gray-400 sm:w-full sm:text-[45vw]">
            milk
          </h1>
          <div className="flex w-[550px] md:w-1/2 flex-col items-start justify-start gap-10 sm:w-full xxl:w-[850px]">
            <h3 className="font-[Milk-2] text-[45px] font-normal leading-none sm:text-3xl sm:leading-[.9] md:text-[35px] xxl:text-[60px]">
              Milk Network <br /> is a brand development firm that works in
              thought and in action:
            </h3>
            <h3 className="font-[Milk-2] text-[45px] font-normal leading-none underline sm:text-3xl sm:leading-[.9] md:text-[35px] xxl:text-[60px]">
              hello@amanqureshi.com
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

const OverlayOnMilkIcon = () => {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-40 flex min-h-screen w-full flex-col items-center justify-start bg-black px-10 transition-colors duration-300 ease-in-out">
      <div className="milk__img relative z-50 ml-auto mr-5 mt-20 flex h-[180px] w-[180px] cursor-pointer items-center justify-center rounded-full bg-white sm:hidden xxl:h-[300px] xxl:w-[300px]">
        <img
          src="/images/bottle.png"
          className="rotate-image h-20 w-32 object-cover xxl:h-44 xxl:w-56"
          alt="bottle"
        />
      </div>
      <div className="mt-20 flex w-full items-center justify-between">
        <div className="moving_image h-[500px] w-[400px] rounded-lg">
          <img
            src="/images/port-5.png"
            className="h-full w-full rounded-lg object-cover"
            alt="bottle"
          />
        </div>
        <div className="moving_image h-[400px] w-[400px] rounded-lg">
          <img
            src="/images/port-3.png"
            className="h-full w-full rounded-lg object-cover"
            alt="bottle"
          />
        </div>
      </div>
      <div className="moving_image mx-auto h-[300px] w-[400px] rounded-lg">
        <img
          src="/images/port-8.png"
          className="h-full w-full rounded-lg object-cover"
          alt="bottle"
        />
      </div>
      <div className="moving_image ml-auto h-[200px] w-[300px] rounded-lg">
        <img
          src="/images/port-4.png"
          className="h-full w-full rounded-lg object-cover"
          alt="bottle"
        />
      </div>{" "}
      <div className="moving_image h-[200px] w-[300px] rounded-lg">
        <img
          src="/images/port-4.png"
          className="h-full w-full rounded-lg object-cover"
          alt="bottle"
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="moving_image h-[500px] w-[400px] rounded-lg">
          <img
            src="/images/port-5.png"
            className="h-full w-full rounded-lg object-cover"
            alt="bottle"
          />
        </div>
        <div className="moving_image h-[400px] w-[400px] rounded-lg">
          <img
            src="/images/port-3.png"
            className="h-full w-full rounded-lg object-cover"
            alt="bottle"
          />
        </div>
      </div>
    </div>
  );
};
