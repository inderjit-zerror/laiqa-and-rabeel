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
        <div className="w-full h-[150vh] relative z-[-90] MMAINDDiv2">
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[18vh]">
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">Wedding</span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q text-[6vw] w-fit h-fit leading-[6vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">ITINERARY</span>
            </div>

            <div className="COLOR_TEXT_RED Font_Q w-fit h-fit tracking-tight overflow-hidden">

            <p className="Font_YV max-w-[600px] MainTI w-[90%] mx-auto mt-4">Join us in Marrakech from November 14–16, 2026 for a weekend of
              celebration. Festivities begin with a Mehndi Lunch and Sangeet
              Dinner on Saturday, followed by our Nikkah Ceremony and an elegant
              Black Tie Reception on Sunday.</p>
            </div>
          </div>

          <div className="w-full h-full absolute top-[15%] left-0  z-[-1] overflo-x-hidden ">
            <img
              src={`/assets/itnBG.png`}
              alt="Img"
              className="w-full h-full object-cover object-top scale-[1.3] stickyAnimation2"
            />
            
          </div>
             <div className="pointer-events-none absolute bottom-[0%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#ffffff]/60 to-[#ffffff] z-100" />

        </div>

        {/* Next-2-Sectiom */}
        {/* <div className="w-full Next-2-Sectiom  flex flex-col gap-10 h-screen bg-white  z-100 relative py-[40px]">
          <div className=" absolute right-0 bottom-0 w-[20%] h-fit p-[40px]">
            <img
              src={`/assets/s42.png`}
              alt="IMG"
              className="w-full object-cover object-center"
            />
          </div>

          <div className=" absolute right-0 top-[10%] w-[20%] h-fit p-[40px]">
            <img
              src={`/assets/s03.png`}
              alt="IMG"
              className="w-full object-cover scale-[0.8] object-center"
            />
          </div>

          <div className="w-[80%] h-[90%] bg-[#044BB2] mt-auto flex justify-center items-center relative overflow-hidden">
            <p className="Font_YV text-[white] w-[40%]  text-justify z-50">
              We will conclude with a relaxed
              Closing Brunch on Monday. All events will take place at The Oberoi
              Marrakech unless otherwise noted.
              <br /> <br />
              We’re so excited to celebrate our wedding with you in the magical
              city of Marrakech. Join us for a beautiful weekend filled with
              tradition, joy, and meaningful moments as we begin this new
              chapter together.
            </p>

            <img
              src={`/home/SandBG.jpg`}
              alt="img"
              className=" absolute w-full z-[10] h-full object-cover opacity-25 object-center top-0 left-0"
            />
          </div>
        </div> */}

        {/* Next-3-Sectiom */}
        <div className="w-full h-screen COLOR_BG_RED relative z-100 flex p-20 gap-10 px-10 justify-center items-center ">
          {/* T1 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit">
                  <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                    Mehndi Lunch
                  </h1>
                  <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                    Saturday, November 14
                  </p>
                </div>

                <div className="w-full aspect-2/1  flex justify-end items-end">
                  <img src="/assets/s10.png" className="w-[70%] object-cover" />
                </div>

                {/* <p className="text-[3vw] Font_YV COLOR_TEXT_RED">  </p> */}
              </div>

              {/* BACK */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-center Font_YV">
                  Timing ~ 12:00 PM <br />
                  <br />A vibrant daytime celebration to welcome the wedding
                  weekend, filled with music, henna, and festive colors.
                </p>
              </div>
            </div>
          </div>

          {/* T2 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit">
                  <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                    Sangeet Dinner
                  </h1>
                  <p className="text-[3vw] Font_YV COLOR_TEXT_RED">
                    Saturday, November 14
                  </p>
                </div>

                <div className="w-full aspect-2/1  flex justify-end items-end">
                  <img src="/assets/s35.png" className="w-[70%] object-cover" />
                </div>

                {/* <p className="text-[3vw] Font_YV COLOR_TEXT_RED"> </p> */}
              </div>

              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-center Font_YV">
                  Timing ~ 7:00 PM <br />
                  <br />
                  An evening of performances, dancing, and celebration.
                </p>
              </div>
            </div>
          </div>

          {/* T3 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit">
                  <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                    Nikkah Ceremony
                  </h1>
                  <p className="text-[14px] Font_YV COLOR_TEXT_RED">
                    {" "}
                    Sunday, November 15
                  </p>
                </div>

                <div className="w-full h-fit flex justify-end items-end ">
                  <img src="/assets/s05.png" className="w-[45%]  object-center object-cover" />
                </div>

                {/* <p className="text-[14px] Font_YV COLOR_TEXT_RED"> </p> */}
              </div>

              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-center Font_YV">
                  {" "}
                  Timing ~ 12:00 PM <br /> <br />
                  Our wedding ceremony.
                </p>
              </div>
            </div>
          </div>

          {/* T4 */}
          <div className="group w-1/4 h-[70%] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 backface-hidden bg-white border border-[#044BB2] py-10 px-5 flex flex-col justify-between">
                <div className="w-full h-fit">
                  <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                    Reception
                  </h1>
                  <p className="text-[14px] Font_YV COLOR_TEXT_RED">
                    Sunday, November 15
                  </p>
                </div>

                <div className="w-full aspect-2/1  flex justify-end items-end">
                  <img src="/assets/s19.png" className="w-[70%] object-cover" />
                </div>

                {/* <p className="text-[14px] Font_YV COLOR_TEXT_RED"></p> */}
              </div>

              <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-[#044BB2] text-white flex items-center justify-center p-5">
                <p className="text-[2vw] text-start Font_YV">
                  Timing ~ 6:00 PM <br />
                  <br />
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
    </>
  );
};

export default page;
