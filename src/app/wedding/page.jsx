"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const isTouchDevice = () =>
  typeof window !== "undefined" && "ontouchstart" in window;

const FlipCard = ({ children, className }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (isTouchDevice()) setRevealed((prev) => !prev);
  };
  const handleMouseEnter = () => {
    if (!isTouchDevice()) setRevealed(true);
  };
  const handleMouseLeave = () => {
    if (!isTouchDevice()) setRevealed(false);
  };

  const childArray = React.Children.toArray(children);

  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <div className="relative w-full h-full max-md:h-[50vh]">
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease",
            opacity: revealed ? 0 : 1,
            pointerEvents: revealed ? "none" : "auto",
          }}
        >
          {childArray[0]}
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease",
            opacity: revealed ? 1 : 0,
            pointerEvents: revealed ? "auto" : "none",
          }}
        >
          {childArray[1]}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const containerRefN3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();

      intro
        .from(".stickyAnimation2", {
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          ".MainTI",
          {
            y: "200%",
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.1,
          },
          "-=0.8"
        );

      gsap.to(".stickyAnimation2", {
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".MMAINDDiv2",
          start: "top top",
          end: "top -100%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen relative MMAINDDiv overflow-x-hidden">
        <div className="w-full h-[100vh] relative z-[-90] MMAINDDiv2">
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[18vh]">
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">Wedding</span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] max-md:text-[14vw] max-md:leading-[14vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">ITINERARY</span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q w-fit h-fit tracking-tight overflow-hidden">
              <p className="Font_YV max-w-[600px] MainTI w-[90%] mx-auto mt-4">
                Join us in Marrakech from November 14–16, 2026 for a weekend of
                celebration. Festivities begin with a Mehndi Lunch and Sangeet
                Dinner on Saturday, followed by our Nikkah Ceremony and an
                elegant Black Tie Reception on Sunday.
              </p>
            </div>
          </div>

          <div className="w-full h-full absolute top-[0%] left-0 z-[-1] overflow-x-hidden">
            <img
              src={`/assets/IT3.png`}
              alt="Img"
              className="w-full h-full object-cover object-bottom max-sm:object-[80%_0%] stickyAnimation2"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#ffffff]/60 to-[#ffffff] z-100" />
        </div>

        {/* Cards Section */}
        <div className="w-full h-screen max-md:h-fit COLOR_BG_RED relative z-100 flex max-md:flex-col p-20 max-md:gap-10 gap-10 px-10 justify-center items-center">

          {/* T1 — Mehndi Lunch */}
          <FlipCard className="w-1/4 h-[70%] max-md:h-fit max-md:w-[90%]">
            {/* FRONT */}
            <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
              <div className="w-full h-fit">
                <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                  Mehndi Lunch
                </h1>
                <span className="text-[14px] leading-[16px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                  Saturday, November 14
                </span>
              </div>
              <div className="w-full aspect-2/1 flex justify-end items-end">
                <img src="/assets/s10.png" className="w-[70%] object-cover" />
              </div>
              <span className="md:hidden text-[10px] Font_YV COLOR_TEXT_RED opacity-40 mt-1">
                Tap to flip
              </span>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-[#044BB2] text-white flex items-center justify-center p-5">
              <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                Timing ~ 12:00 PM <br />
                <br />
                A vibrant daytime celebration to welcome the wedding weekend,
                filled with music, henna, and festive colors.
              </p>
            </div>
          </FlipCard>

          {/* T2 — Sangeet Dinner */}
          <FlipCard className="w-1/4 h-[70%] max-md:h-fit max-md:w-[90%]">
            {/* FRONT */}
            <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
              <div className="w-full h-fit">
                <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                  Sangeet Dinner
                </h1>
                <span className="text-[14px] leading-[16px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                  Saturday, November 14
                </span>
              </div>
              <div className="w-full aspect-2/1 flex justify-end items-end">
                <img src="/assets/s35.png" className="w-[70%] object-cover" />
              </div>
              <span className="md:hidden text-[10px] Font_YV COLOR_TEXT_RED opacity-40 mt-1">
                Tap to flip
              </span>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-[#044BB2] text-white flex items-center justify-center p-5">
              <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                Timing ~ 7:00 PM <br />
                <br />
                An evening of performances, dancing, and celebration.
              </p>
            </div>
          </FlipCard>

          {/* T3 — Nikkah Ceremony */}
          <FlipCard className="w-1/4 h-[70%] max-md:h-fit max-md:w-[90%]">
            {/* FRONT */}
            <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
              <div className="w-full h-fit">
                <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                  Nikkah Ceremony
                </h1>
                <span className="text-[14px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                  Sunday, November 15
                </span>
              </div>
              <div className="w-full h-fit flex justify-end items-end">
                <img
                  src="/assets/s05.png"
                  className="w-[45%] object-center object-cover"
                />
              </div>
              <span className="md:hidden text-[10px] Font_YV COLOR_TEXT_RED opacity-40 mt-1">
                Tap to flip
              </span>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-[#044BB2] text-white flex items-center justify-center p-5">
              <p className="text-[2vw] max-md:text-[4vw] text-center Font_YV">
                Timing ~ 12:00 PM <br />
                <br />
                Our wedding ceremony.
              </p>
            </div>
          </FlipCard>

          {/* T4 — Reception */}
          <FlipCard className="w-1/4 h-[70%] max-md:h-fit max-md:w-[90%]">
            {/* FRONT */}
            <div className="absolute inset-0 bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
              <div className="w-full h-fit">
                <h1 className="text-[3vw] leading-[3vw] max-md:text-[7vw] max-md:leading-[7vw] Font_Q COLOR_TEXT_RED">
                  Reception
                </h1>
                <span className="text-[14px] max-md:text-[4vw] Font_YV COLOR_TEXT_RED">
                  Sunday, November 15
                </span>
              </div>
              <div className="w-full aspect-2/1 flex justify-end items-end">
                <img src="/assets/s19.png" className="w-[70%] object-cover" />
              </div>
              <span className="md:hidden text-[10px] Font_YV COLOR_TEXT_RED opacity-40 mt-1">
                Tap to flip
              </span>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 bg-[#044BB2] text-white flex items-center justify-center p-5">
              <p className="text-[2vw] max-md:text-[4vw] text-start Font_YV">
                Timing ~ 6:00 PM <br />
                <br />
                An elegant evening of dinner, speeches, and dancing. <br />
                • Grand entrance <br />
                • Dinner reception <br />
                • Celebration into the night <br />
              </p>
            </div>
          </FlipCard>

        </div>
      </div>
    </>
  );
};

export default page;