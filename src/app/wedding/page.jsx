"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// export const metadata = {
//   title: "Wedding Itinerary | Sonal & Kush",
//   description:
//     "Explore the complete wedding itinerary of Sonal & Kush including Mehendi, Haldi, Sangeet, Wedding Ceremony, and Reception details.",

//   openGraph: {
//     title: "Wedding Itinerary | Sonal & Kush",
//     description: "Complete schedule of Sonal & Kush's wedding celebrations.",
//     url: "https://www.sonalskushie.com/wedding",
//     type: "website",
//   },
// };

const page = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // duplicate content for seamless loop
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          return `${parseFloat(x) % totalWidth}px`;
        },
      },
    });
  }, []);


  return (
    <>
      <div className="w-full min-h-screen relative">
        <div className="w-full h-[101vh] relative">
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center mt-[20vh]">
            <div className="COLOR_TEXT_RED Font_Q text-[10vw] w-fit h-fit leading-[8vw] tracking-tight">Wedding</div>
            <div className="COLOR_TEXT_RED Font_Q text-[10vw] w-fit h-fit leading-[8vw] tracking-tight">ITINERARY.</div>
          </div>

          {/* InfoImg */}

          {/* Right TOP */}
          <div className=" absolute top-[5%] right-[2%] w-[10vw] aspect-3/4 COLOR_BG_RED">
          </div>

          {/* Right Bottom */}
          <div className=" absolute top-[55%] right-[10%] w-[10vw] aspect-3/4 COLOR_BG_RED">
          </div>

          {/* Left-Medium */}
          <div className=" absolute top-[20%] left-[5%] w-[10vw] aspect-3/4 COLOR_BG_RED">
          </div>
        </div>


        {/* CD-Drive */}
        <div className="fixed  top-4/6 left-1/2 -translate-x-1/2 z-[-1] -translate-y-1/3 w-[20vw] aspect-square rounded-full COLOR_BG_RED">
        </div>

        {/* Next-2-Sectiom */}
        <div className="w-full h-screen COLOR_BG_RED flex">

          {/* Left */}
          <div className="w-[70%] h-fit">

            {/* Text */}
            <div className="w-full h-fit flex Font_Q pl-10 pt-10 flex-col">
              <div className="text-[3vw] leading-[3vw] text-justify text-white w-full  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugit quasi itaque excepturi aliquam itaque excepturi aliquam.Atque voluptatem fugit quasi itaque excepturi aliquam itaque excepturi aliquam.
              </div>

              <div className="w-full h-fit flex justify-start items-center gap-10 mt-20">
                <div className="w-fit h-fit flex flex-col Font_Q text-[4vw] leading-[4vw] text-white">
                  30+
                  <p className="Font_YV text-[1rem]">Places</p>
                </div>
                <div className="w-fit h-fit flex flex-col Font_Q text-[4vw] leading-[4vw] text-white">
                  3000+
                  <p className="Font_YV text-[1rem]">People</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right */}
          <div className="w-[30%] h-screen  p-10 flex justify-end items-end z-[100]">

            <div className="w-full h-2/3 bg-white">

            </div>

          </div>



        </div>


        {/* Next-3-Section */}
        <div className="w-full min-h-screen relative bg-[#D9E5F1]">

          {/* Background Move Text */}
          <div className="w-full overflow-hidden py-6 sticky h-screen left-0  top-0 flex  items-center  ">
            <div
              ref={containerRef}
              className="flex whitespace-nowrap  text-4xl font-bold gap-10 COLOR_TEXT_RED"
            >
              {/* Duplicate content for smooth infinite effect */}
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                  <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                  <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                  <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                  <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* TOP_LEVEL_CONT */}
          <div className="w-full min-h-screen relative flex flex-col gap-[10vh] py-[10vh] z-100 justify-center items-center ">
            {
              [1,2,3,4].map((item,index)=>{
                return(
                  <div key={index} className="w-[80%] min-h-[70vh] bg-[#044BB2]">

                  </div>
                )
              })
            }
          </div>

        </div>


      </div>
    </>
  );
};

export default page;
