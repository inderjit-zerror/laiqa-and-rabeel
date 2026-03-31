"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GallerySection from "@/components/sections/newhome/GallerySection";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
    // intro
    const TI = gsap.timeline();
    TI.from(
      ".MainTI",
      {
        y: "200%",
        duration: 2,
        ease: "power4.inOut",
      },
      "a1",
    );
    TI.to(
      ".revelINMGI",
      {
        height: 0,
        duration: 2,
        ease: "power4.inOut",
      },
      "a1",
    );
    TI.from(
      ".refBackImg",
      {
        scale: 1.5,
        duration: 2,
        ease: "power4.inOut",
      },
      "a1",
    );
    TI.from(
      ".CD_DIV",
      {
        delay: 0.7,
        top: "150%",
        duration: 2,
        ease: "power4.inOut",
      },
      "a1",
    );
  }, []);

  useEffect(() => {
    const SecC = gsap.timeline({
      scrollTrigger: {
        trigger: ".Next-2-Sectiom ",
        start: "top `50%",
        end: "top 10%",
        scrub: "true",
        // markers: true
      },
    });
    SecC.to(
      ".NextSImg",
      {
        height: 0,
        ease: "none",
      },
      "qq",
    );
    SecC.from(
      ".NextSImgMain",
      {
        scale: 1.5,
        ease: "none",
      },
      "qq",
    );

    const counters = document.querySelectorAll(".counter");

    counters.forEach((el) => {
      const endValue = parseInt(el.getAttribute("data-value"));

      SecC.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 1,
          ease: "none",
          snap: { innerText: 1 }, // integer increment
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText);
          },
        },
        "qq", // start at same time as image animation
      );
    });
  }, []);

  const onEnter = (Clr, clrimg) => {
    const w = gsap.timeline();
    w.to(
      Clr,
      {
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "q1",
    );
    w.to(clrimg, {
      delay: -0.3,
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  const onleave = (Clr, clrimg) => {
    const q = gsap.timeline();

    q.to(
      clrimg,
      {
        scale: 0,
        duration: 0.5,
        ease: "power2.inOut",
      },
      "w1",
    );
    q.to(Clr, {
      delay: -0.3,
      scale: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    const PG = gsap.timeline({
      scrollTrigger: {
        trigger: ".MMAINDDiv",
        start: "top 10%",
        end: "top -50%",
        scrub: true,
        // markers:true
      },
    });
    PG.to(".CD_DIV", {
      y: '80%', // move down smoothly
      rotateZ: 180,
      ease: "none",
    });
   
  }, []);


  useEffect(()=>{
    const GS = gsap.timeline({
      scrollTrigger:{
        trigger:'.Next3Sectiom',
        start:'top 40%',
        end:'top 10%',
        scrub:true,
        // markers:true
      }
    })
   GS.to(
      '.Clr',
      {
        scale: 1,
        duration: 0.5,
        ease: "none",
      },
      "q1",
    );
    GS.to('.clrimg', {
      delay: -0.3,
      scale: 1,
      duration: 0.5,
      ease: "none",
    });
  },[])


  const containerRefN3 = useRef(null);

  useEffect(() => {
    const el = containerRefN3.current;

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
      <div className="w-full min-h-screen relative MMAINDDiv ">
        <div className="w-full h-[101vh] relative z-[-90] MMAINDDiv2">

           
          {/* TEXT */}
          <div className="w-full h-fit flex flex-col justify-center text-center items-center pt-[20vh]">
            <div className="COLOR_TEXT_RED Font_Q text-[9vw] w-fit h-fit leading-[9vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">Wedding</span>
            </div>
            <div className="COLOR_TEXT_RED Font_Q text-[9vw] w-fit h-fit leading-[9vw] tracking-tight overflow-hidden">
              <span className="flex MainTI">ITINERARY.</span>
            </div>
          </div>

          {/* InfoImg */}

          {/* Right TOP */}
          <div className=" absolute top-[5%] overflow-hidden right-[2%] w-[10vw] aspect-3/4 COLOR_BG_RED">
            <div className="w-full h-full absolute top-0 left-0 bg-[#D9E5F1] revelINMGI z-100"></div>
            <img
              src={`/imgs/newItinerary/h6.webp`}
              alt="CD"
              className="w-full refBackImg h-full object-center object-cover"
            />
          </div>

          {/* Right Bottom */}
          <div className=" absolute top-[55%] overflow-hidden right-[10%] w-[10vw] aspect-3/4 COLOR_BG_RED">
            <div className="w-full h-full absolute top-0 left-0 bg-[#D9E5F1] revelINMGI z-100"></div>
            <img
              src={`/imgs/newItinerary/h7.webp`}
              alt="CD"
              className="w-full refBackImg h-full object-center object-cover"
            />
          </div>

          {/* Left-Medium */}
          <div className=" absolute top-[20%] overflow-hidden left-[5%] w-[10vw] aspect-3/4 COLOR_BG_RED">
            <div className="w-full absolute top-0 left-0 h-full bg-[#D9E5F1] revelINMGI z-[100]"></div>
            <img
              src={`/imgs/newItinerary/h7.webp`}
              alt="CD"
              className="w-full refBackImg h-full object-center object-cover"
            />
          </div>

          <div className=" absolute  CD_DIV top-[60%] left-1/2 -translate-x-1/2 z-[-1] -translate-y-1/3 rotate-z-90 w-[20vw] aspect-square rounded-full  overflow-hidden">
            <img
              src={`/imgs/newItinerary/CD.svg`}
              alt="CD"
              className="w-full h-full object-center scale-[1.1] object-cover flex CDIMh"
            />
          </div>
        </div>

        {/* CD-Drive */}
        {/* <div className="fixed  CD_DIV top-4/6 left-1/2 -translate-x-1/2 z-[-1] -translate-y-1/3 rotate-z-90 w-[20vw] aspect-square rounded-full  overflow-hidden">
          <img src={`/imgs/newItinerary/CD.svg`} alt="CD" className="w-full h-full object-center scale-[1.1] object-cover" />
        </div> */}

        {/* Next-2-Sectiom */}
        <div className="w-full Next-2-Sectiom  h-screen COLOR_BG_RED flex z-100">
          {/* Left */}
          <div className="w-[70%] h-fit">
            {/* Text */}
            <div className="w-full h-fit flex Font_Q pl-10 pt-10 flex-col">
              <div className="text-[3vw] leading-[3vw] text-justify text-white w-full  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptatem fugit quasi itaque excepturi aliquam itaque excepturi
                aliquam.Atque voluptatem fugit quasi itaque excepturi aliquam
                itaque excepturi aliquam.
              </div>

              <div className="w-full h-fit flex justify-start items-center gap-10 mt-20">
                <div className="w-fit h-fit flex flex-col Font_Q text-[4vw] leading-[4vw] text-white">
                  <div className="flex">
                    <span className="counter" data-value="30">
                      0
                    </span>
                    +
                  </div>
                  <p className="Font_YV text-[1rem]">Places</p>
                </div>
                <div className="w-fit h-fit flex flex-col Font_Q text-[4vw] leading-[4vw] text-white">
                  <div className="flex">
                    <span className="counter" data-value="3000">
                      0
                    </span>
                    +
                  </div>
                  <p className="Font_YV text-[1rem]">People</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-[30%] h-screen  p-10 flex justify-end items-end z-[100]">
            <div className="w-full h-2/3 overflow-hidden relative">
              <div className="w-full absolute top-0 left-0 h-full COLOR_BG_RED NextSImg z-[100]"></div>
              <img
                src={`/imgs/newItinerary/h6.webp`}
                alt="IMG"
                className="w-full h-full object-cover z-[90] NextSImgMain object-center"
              />
            </div>
          </div>
        </div>

         {/* Next-4-Sectiom */}
        <div className="w-full h-screen COLOR_BG_RED relative z-100 flex p-20 gap-10 px-10 justify-center items-center ">
          {/* T1 */}
          <div className="w-1/4 aspect-4/5 py-10 px-5 relative  origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1]   flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Wedding
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item overflow-hidden ">
              <img
                src={`/imgs/newExplorMarK/Wedding2.jpg`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            {/* <div className="w-[90%] h-fit py-2 mx-auto rounded-full flex justify-center items-center border border-[#044BB2]">
              <p className="Font_Q COLOR_TEXT_RED ">Read More</p>
            </div> */}
          </div>

          {/* T2 */}
          <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1]  flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Event
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item overflow-hidden ">
              <img
                src={`/imgs/newItinerary/h8.webp`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            {/* <div className="w-[90%] h-fit py-2 mx-auto rounded-full flex justify-center items-center border border-[#044BB2]">
              <p className="Font_Q COLOR_TEXT_RED ">Read More</p>
            </div> */}
          </div>

          {/* T3 */}
          <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1] flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item overflow-hidden ">
              <img
                src={`/imgs/newItinerary/h7.webp`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            {/* <div className="w-[90%] h-fit py-2 mx-auto rounded-full flex justify-center items-center border border-[#044BB2]">
              <p className="Font_Q COLOR_TEXT_RED ">Read More</p>
            </div> */}
          </div>

          {/* T4 */}
          <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1]  flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item overflow-hidden ">
              <img
                src={`/imgs/newItinerary/h6.webp`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            {/* <div className="w-[90%] h-fit py-2 mx-auto rounded-full flex justify-center items-center border border-[#044BB2]">
              <p className="Font_Q COLOR_TEXT_RED ">Read More</p>
            </div> */}
          </div>
        </div>


        {/* Next-3-Sectiom */}
        <div className="w-full Next3Sectiom h-screen bg-[#D9E5F1] relative z-100 flex p-20 gap-10 justify-center items-center ">
          {/* T1 */}
          <div
           
            className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between"
          >
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Luxury
              </h1>
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Wedding
              </h1>
            </div>

            <div className="w-full aspect-3/2  flex justify-center relative item border  border-[#93adc5]">
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 COLOR_BG_RED z-80 BBDIV1 Clr"></div>
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 justify-center flex items-center COLOR_BG_RED z-90 IBD1 clrimg">
                <img
                  src={`/imgs/newHome/bbg2.png`}
                  alt="IMg"
                  className=" h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full h-fit flex Font_YV COLOR_TEXT_RED">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem consectetur nihil, ad libero aliquid molestias.{" "}
              </p>
            </div>
          </div>

          {/* T2 */}
          <div
           
            className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between"
          >
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Luxury
              </h1>
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Event
              </h1>
            </div>

            <div className="w-full aspect-3/2  flex justify-center relative item border  border-[#93adc5]">
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 COLOR_BG_RED z-80 BBDIV2 Clr"></div>
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 flex justify-center items-center -translate-y-1/2 COLOR_BG_RED z-90 IBD2 clrimg">
                <img
                  src={`/imgs/newHome/bbg3.png`}
                  alt="IMg"
                  className=" h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full h-fit flex Font_YV COLOR_TEXT_RED">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem consectetur nihil, ad libero aliquid molestias.{" "}
              </p>
            </div>
          </div>

          {/* T3 */}
          <div
            
            className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between"
          >
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Luxury
              </h1>
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-3/2  flex justify-center relative item border  border-[#93adc5]">
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 COLOR_BG_RED z-80 BBDIV3 Clr"></div>
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 COLOR_BG_RED z-90 IBD3 clrimg">
                <img
                  src={`/imgs/newHome/building2.png`}
                  alt="IMg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full h-fit flex Font_YV COLOR_TEXT_RED">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem consectetur nihil, ad libero aliquid molestias.{" "}
              </p>
            </div>
          </div>

          {/* T4 */}
          <div
            
            className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between"
          >
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Luxury
              </h1>
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-3/2  flex justify-center relative item border  border-[#93adc5]">
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 COLOR_BG_RED z-80 BBDIV3 Clr"></div>
              <div className="w-full h-full absolute top-1/2 left-1/2  -translate-x-1/2 scale-0 -translate-y-1/2 COLOR_BG_RED z-90 IBD3 clrimg">
                <img
                  src={`/imgs/newHome/YH.png`}
                  alt="IMg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full h-fit flex Font_YV COLOR_TEXT_RED">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem consectetur nihil, ad libero aliquid molestias.{" "}
              </p>
            </div>
          </div>
        </div>

       
        <GallerySection />

         {/* Next-3-Section */}
      <div className="w-full min-h-screen relative bg-[#D9E5F1]">

        <div className="w-full overflow-hidden py-6 sticky h-screen left-0  top-0 flex  items-center  ">
          <div
            ref={containerRefN3}
            className="flex whitespace-nowrap  text-4xl font-bold gap-10 COLOR_TEXT_RED"
          >
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

        <div className="w-full min-h-screen relative flex flex-col gap-[10vh] py-[10vh] z-100 justify-center items-center ">
          {
            [`/imgs/newHome/YH.png`, `/imgs/newHome/bbg2.png`, `/imgs/newHome/building2.png`,].map((item, index) => {
              return (
                <div key={index} className="w-[80%] min-h-[70vh]  overflow-hidden">
                  <img src={item} alt="Img" className='w-full h-full object-cover object-center' />
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
