"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GallerySection from "@/components/sections/newhome/GallerySection";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const containerRefN3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // INTRO TIMELINE
      // =========================
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
          "-=0.8",
        );

      // =========================
      // SCROLL 1 (zoom bg)
      // =========================
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

      // =========================
      // SECTION 2
      // =========================
      // const sec2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".Next-2-Sectiom",
      //     start: "top 50%",
      //     end: "top 10%",
      //     scrub: true,
      //   },
      // });

      // sec2
      //   .to(".NextSImg", { height: 0, ease: "none" })
      //   .from(".NextSImgMain", { scale: 1.5, ease: "none" }, 0);

      // // counter optimized
      // gsap.utils.toArray(".counter").forEach((el) => {
      //   const end = +el.dataset.value;

      //   gsap.fromTo(
      //     el,
      //     { innerText: 0 },
      //     {
      //       innerText: end,
      //       snap: { innerText: 1 },
      //       ease: "none",
      //       scrollTrigger: {
      //         trigger: el,
      //         start: "top 80%",
      //       },
      //       onUpdate: function () {
      //         el.innerText = Math.floor(el.innerText);
      //       },
      //     },
      //   );
      // });

      // =========================
      // CD ROTATION
      // // =========================
      // gsap.to(".CD_DIV", {
      //   y: "80%",
      //   rotateZ: 180,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".MMAINDDiv",
      //     start: "top 10%",
      //     end: "top -50%",
      //     scrub: true,
      //   },
      // });

      // // =========================
      // // SECTION 3 (hover reveal scroll)
      // // =========================
      // gsap.to(".Clr", {
      //   scale: 1,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".Next3Sectiom",
      //     start: "top 40%",
      //     end: "top 10%",
      //     scrub: true,
      //   },
      // });

      // gsap.to(".clrimg", {
      //   scale: 1,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".Next3Sectiom",
      //     start: "top 40%",
      //     end: "top 10%",
      //     scrub: true,
      //   },
      // });

      // =========================
      // MOUSE PARALLAX (OPTIMIZED 🔥)
      // =========================
      // let mouseX = 0;
      // let mouseY = 0;

      // const move = { x: 0, y: 0 };

      // const update = () => {
      //   move.x += (mouseX - move.x) * 0.1;
      //   move.y += (mouseY - move.y) * 0.1;

      //   gsap.set(".stickyAnimation2", {
      //     x: move.x,
      //     y: move.y,
      //   });

      //   gsap.set(".LTM, .RTM, .GatImg, .DemoAllItem, .NAMEWED", {
      //     y: move.y,
      //   });

      //   requestAnimationFrame(update);
      // };

      // window.addEventListener("mousemove", (e) => {
      //   const x = (e.clientX / window.innerWidth - 0.5) * -20;
      //   const y = (e.clientY / window.innerHeight - 0.5) * -20;

      //   mouseX = x;
      //   mouseY = y;
      // });

      // update(); // start loop
    });

    return () => ctx.revert(); // 🔥 cleanup everything
  }, []);
  return (
    <>
      <div className="w-full min-h-screen relative MMAINDDiv overflow-x-hidden ">
        <div className="w-full h-[101vh] relative z-[-90] MMAINDDiv2">
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[15vh]">
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">Wedding</span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">ITINERARY.</span>
            </div>
          </div>

          <div className="w-full h-full absolute top-0 left-0  z-[-1] overflow-hidden ">
            <img
              src={`/assets/itnBG.png`}
              alt="Img"
              className="w-full h-full object-top object-cover scale-[1.1] stickyAnimation2"
            />
          </div>
        </div>

        {/* Next-2-Sectiom */}
        <div className="w-full Next-2-Sectiom  h-screen bg-white flex z-100 relative">
          {/* Left */}
          <div className="w-[50%] h-fit">
            {/* Text */}
            <div className="w-full h-fit flex Font_Q pl-10 pt-10 flex-col">
              <div className="text-[2.5vw] leading-[2.5vw] text-justify text-[#044BB2] w-full  ">
                A wedding itinerary outlines the sequence of events for the
                special day, ensuring everything runs smoothly and on time. It
                typically begins with the bride and groom getting ready,
                followed by the ceremony, where vows are exchanged.
              </div>
            </div>
          </div>

          <div className=" h-full w-[50%]  aspect-[3.5/2] z-[-1] flex justify-end items-center px-20">
            <img
              src={`/assets/s30.png`}
              alt="IMG"
              className="h-full  object-center object-cover "
            />
          </div>
        </div>

        {/* Next-4-Sectiom */}
        <div className="w-full h-screen COLOR_BG_RED relative z-100 flex p-20 gap-10 px-10 justify-center items-center ">
          {/* T1 */}
          {/* <div className="w-1/4 aspect-4/5 py-10 px-5 relative border border-[#044BB2]  origin-bottom   bg-[#ffffff] gap-10  flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Wedding
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                src={`/assets/s10.png`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                A wedding is the sacred union of two people, symbolizing love, commitment, and the beginning of a lifelong journey together.{" "}
              </p>
            </div>
          </div> */}

          {/* T2 */}
          {/* <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom border border-[#044BB2]   bg-[#ffffff] gap-10 flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Event
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                src={`/assets/s41.png`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                An event refers to the organized occasion where all wedding activities take place, including the ceremony and reception.{" "}
              </p>
            </div>
          </div> */}

          {/* T3 */}
          {/* <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom border border-[#044BB2]  bg-[#ffffff] gap-10 flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                src={`/assets/s20.png`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
               A celebration is the joyful expression of happiness during the wedding, filled with music, dancing, laughter, and togetherness.{" "}
              </p>
            </div>
          </div> */}

          {/* T4 */}
          {/* <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom border border-[#044BB2]  bg-[#ffffff] gap-10 flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                src={`/assets/s36.png`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                A celebration is the joyful expression of happiness during the wedding, filled with music, dancing, laughter, and togetherness.{" "}
              </p>
            </div>
          </div> */}

          {/* T1 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                  Mehndi Lunch
                </h1>

                <div className="w-full aspect-2/1">
                  <img
                    src="/assets/s10.png"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[3vw] Font_YV COLOR_TEXT_RED"> Timing ~ 12:00 PM</p>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-center">
                  A vibrant daytime celebration to welcome the wedding weekend,
                  filled with music, henna, and festive colors.
                </p>
              </div>
            </div>
          </div>

          {/* T2 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                  Sangeet Dinner
                </h1>

                <div className="w-full aspect-2/1">
                  <img
                    src="/assets/s41.png"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[3vw] Font_YV COLOR_TEXT_RED"> Timing ~ 7:00 PM</p>
              </div>

              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-center">
                  An evening of performances, dancing, and celebration.
                </p>
              </div>
            </div>
          </div>

          {/* T3 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                  Nikkah Ceremony
                </h1>

                <div className="w-full aspect-2/1">
                  <img
                    src="/assets/s20.png"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[14px] Font_YV COLOR_TEXT_RED"> Timing ~ 12:00 PM</p>
              </div>

              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-center">Our wedding ceremony.</p>
              </div>
            </div>
          </div>

          {/* T4 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">Reception</h1>

                <div className="w-full aspect-2/1">
                  <img
                    src="/assets/s36.png"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[14px] Font_YV COLOR_TEXT_RED">Timing ~ 6:00 PM</p>
              </div>

              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-start">
                  An elegant evening of dinner, speeches, and dancing. <br />
                  • Grand entrance <br />
                  • Dinner reception <br />
                  • Celebration into the night <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <GallerySection /> */}
    </>
  );
};

export default page;
