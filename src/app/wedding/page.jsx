
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GallerySection from "@/components/sections/newhome/GallerySection";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  // useEffect(() => {
  //   // intro
  //   const TI = gsap.timeline();
    
  //   TI.from(
  //     ".stickyAnimation2",
  //     {
  //       opacity:0,
  //       duration:1.5,
  //       ease: "power4.inOut",
  //     },
  //     "a1",
  //   );
  //   TI.from(
  //     ".MainTI",
  //     {
  //       delay:1,
  //       y: "200%",
  //       duration:1.5,
  //       ease: "power4.inOut",
  //     },
  //     "a1",
  //   );
   
  // }, []);

  // useEffect(()=>{
  //   const Cont = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:'.MMAINDDiv2',
  //       start:'top top',
  //       end:'top -100%',
  //       scrub:true,
  //       // markers:true
  //     }
  //   }) 
  //   Cont.to('.stickyAnimation2',{
  //      scale:1.5,
  //      ease:'none'
  //   })

  // },[])

  // useEffect(() => {
  //   const SecC = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".Next-2-Sectiom ",
  //       start: "top `50%",
  //       end: "top 10%",
  //       scrub: "true",
  //       // markers: true
  //     },
  //   });
  //   SecC.to(
  //     ".NextSImg",
  //     {
  //       height: 0,
  //       ease: "none",
  //     },
  //     "qq",
  //   );
  //   SecC.from(
  //     ".NextSImgMain",
  //     {
  //       scale: 1.5,
  //       ease: "none",
  //     },
  //     "qq",
  //   );

  //   const counters = document.querySelectorAll(".counter");

  //   counters.forEach((el) => {
  //     const endValue = parseInt(el.getAttribute("data-value"));

  //     SecC.fromTo(
  //       el,
  //       { innerText: 0 },
  //       {
  //         innerText: endValue,
  //         duration: 1,
  //         ease: "none",
  //         snap: { innerText: 1 }, // integer increment
  //         onUpdate: function () {
  //           el.innerText = Math.floor(el.innerText);
  //         },
  //       },
  //       "qq", // start at same time as image animation
  //     );
  //   });
  // }, []);

  // const onEnter = (Clr, clrimg) => {
  //   const w = gsap.timeline();
  //   w.to(
  //     Clr,
  //     {
  //       scale: 1,
  //       duration: 0.5,
  //       ease: "power2.inOut",
  //     },
  //     "q1",
  //   );
  //   w.to(clrimg, {
  //     delay: -0.3,
  //     scale: 1,
  //     duration: 0.5,
  //     ease: "power2.inOut",
  //   });
  // };
  // const onleave = (Clr, clrimg) => {
  //   const q = gsap.timeline();

  //   q.to(
  //     clrimg,
  //     {
  //       scale: 0,
  //       duration: 0.5,
  //       ease: "power2.inOut",
  //     },
  //     "w1",
  //   );
  //   q.to(Clr, {
  //     delay: -0.3,
  //     scale: 0,
  //     duration: 0.5,
  //     ease: "power2.inOut",
  //   });
  // };

  // useEffect(() => {
  //   const PG = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".MMAINDDiv",
  //       start: "top 10%",
  //       end: "top -50%",
  //       scrub: true,
  //       // markers:true
  //     },
  //   });
  //   PG.to(".CD_DIV", {
  //     y: "80%", // move down smoothly
  //     rotateZ: 180,
  //     ease: "none",
  //   });
  // }, []);

  // useEffect(() => {
  //   const GS = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".Next3Sectiom",
  //       start: "top 40%",
  //       end: "top 10%",
  //       scrub: true,
  //       // markers:true
  //     },
  //   });
  //   GS.to(
  //     ".Clr",
  //     {
  //       scale: 1,
  //       duration: 0.5,
  //       ease: "none",
  //     },
  //     "q1",
  //   );
  //   GS.to(".clrimg", {
  //     delay: -0.3,
  //     scale: 1,
  //     duration: 0.5,
  //     ease: "none",
  //   });
  // }, []);

  const containerRefN3 = useRef(null);

  // useEffect(() => {
  //   const el = containerRefN3.current;

  //   // duplicate content for seamless loop
  //   const totalWidth = el.scrollWidth / 2;

  //   gsap.to(el, {
  //     x: `-=${totalWidth}`,
  //     duration: 20,
  //     ease: "linear",
  //     repeat: -1,
  //     modifiers: {
  //       x: (x) => {
  //         return `${parseFloat(x) % totalWidth}px`;
  //       },
  //     },
  //   });
  // }, []);


  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const { innerWidth, innerHeight } = window;

  //     const centerX = innerWidth / 2;
  //     const centerY = innerHeight / 2;

  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;

  //     // Normalize (-1 to 1)
  //     const x = (mouseX - centerX) / centerX;
  //     const y = (mouseY - centerY) / centerY;

  //     // Move opposite direction (invert)
  //     const moveX = -x * 10;
  //     const moveY = -y * 10;

  //     gsap.to(".stickyAnimation2", {
  //       x: moveX,
  //       y: moveY,
  //       duration: 0.5,
  //       ease: "power2.out",
  //     });
  //     gsap.to(".LTM, .RTM, .GatImg, .DemoAllItem, .NAMEWED", {
  //       // x: moveX,
  //       y: moveY,
  //       duration: 0.5,
  //       ease: "power2.out",
  //     });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);


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
        "-=0.8"
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
    const sec2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Next-2-Sectiom",
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
    });

    sec2
      .to(".NextSImg", { height: 0, ease: "none" })
      .from(".NextSImgMain", { scale: 1.5, ease: "none" }, 0);

    // counter optimized
    gsap.utils.toArray(".counter").forEach((el) => {
      const end = +el.dataset.value;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          snap: { innerText: 1 },
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText);
          },
        }
      );
    });

    // =========================
    // CD ROTATION
    // =========================
    gsap.to(".CD_DIV", {
      y: "80%",
      rotateZ: 180,
      ease: "none",
      scrollTrigger: {
        trigger: ".MMAINDDiv",
        start: "top 10%",
        end: "top -50%",
        scrub: true,
      },
    });

    // =========================
    // SECTION 3 (hover reveal scroll)
    // =========================
    gsap.to(".Clr", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".Next3Sectiom",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });

    gsap.to(".clrimg", {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".Next3Sectiom",
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
    });

    // =========================
    // MOUSE PARALLAX (OPTIMIZED 🔥)
    // =========================
    let mouseX = 0;
    let mouseY = 0;

    const move = { x: 0, y: 0 };

    const update = () => {
      move.x += (mouseX - move.x) * 0.1;
      move.y += (mouseY - move.y) * 0.1;

      gsap.set(".stickyAnimation2", {
        x: move.x,
        y: move.y,
      });

      gsap.set(".LTM, .RTM, .GatImg, .DemoAllItem, .NAMEWED", {
        y: move.y,
      });

      requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * -20;
      const y = (e.clientY / window.innerHeight - 0.5) * -20;

      mouseX = x;
      mouseY = y;
    });

    update(); // start loop

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
            <img src={`/assets/itnBG.png`} alt="Img" className="w-full h-full object-top object-cover scale-[1.1] stickyAnimation2" />
          </div>
        </div>

        {/* Next-2-Sectiom */}
        <div className="w-full Next-2-Sectiom  h-screen COLOR_BG_RED flex z-100 relative">
          <div className="w-1/5  h-fit absolute bottom-[0%] left-[0%] scale-[0.7]">
            <img
              src={`/assets/s39.png`}
              alt="IMG"
              className="w-full  object-center object-cover "
            />
          </div>
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
          <div className="w-[30%] h-screen  p-10 flex justify-end items-end z-[100] ">
            <div className="w-full h-2/3  relative flex justify-center items-center ">
              {/* <div className="w-full absolute top-0 left-0 h-full COLOR_BG_RED NextSImg z-[100]"></div> */}
              <img
                // src={`/imgs/newItinerary/h6.webp`}
                src={`/assets/s29.png`}
                alt="IMG"
                className=" w-full object-cover z-[90]  object-center"
              />
            </div>
          </div>
        </div>

        {/* Next-4-Sectiom */}
        <div className="w-full h-screen COLOR_BG_RED relative z-100 flex p-20 gap-10 px-10 justify-center items-center ">
          {/* T1 */}
          <div className="w-1/4 aspect-4/5 py-10 px-5 relative  origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1] gap-10  flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Wedding
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                // src={`/imgs/newExplorMarK/Wedding2.jpg`}
                src={`/assets/s29.png`}
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
          <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1] gap-10 flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Event
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                // src={`/imgs/newItinerary/h8.webp`}
                src={`/assets/s30.png`}
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
          <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1] gap-10 flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                // src={`/imgs/newItinerary/h7.webp`}
                src={`/assets/s29.png`}
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
          <div className="w-1/4 aspect-4/5 py-10 px-5  relative origin-bottom transition-all duration-600 ease-none hover:rotate-z-20  bg-[#D9E5F1] gap-10 flex flex-col justify-between">
            <div className="w-full h-fit flex flex-col">
              <h1 className="text-[3vw] leading-[3vw] Font_Q COLOR_TEXT_RED">
                Celebration
              </h1>
            </div>

            <div className="w-full aspect-2/1  flex justify-center relative item  ">
              <img
                src={`/assets/s30.png`}
                alt="IMg"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="w-full h-fit flex flex-col">
              <p className="text-[3vw] leading-[3vw] Font_YV COLOR_TEXT_RED">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>

            
          </div>
        </div>

        {/* Next-3-Sectiom */}
        <div className="w-full Next3Sectiom h-screen bg-[#D9E5F1] relative z-100 flex p-20 gap-10 justify-center items-center ">
          {/* T1 */}
          <div className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between">
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
                  src={`/assets/1BANNER.png`}
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
          <div className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between">
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
                  src={`/assets/s30.png`}
                  alt="IMg"
                  className=" w-full h-full object-cover object-center"
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
          <div className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between">
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
                  src={`/assets/2BANNER.png`}
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
          <div className="w-1/4 h-fit py-10 px-5 relative border gap-10  border-[#93adc5] flex flex-col justify-between">
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
                  src={`/assets/s29.png`}
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

        
      </div>
      {/* <GallerySection /> */}
    </>
  );
};

export default page;
