"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import RSVP from "@/components/common/RSVP";
import Shop from "@/components/common/Shop";
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const mainContainer = useRef();
  const scrollContainer = useRef();


  useGSAP(() => {
    if (!mainContainer.current || !scrollContainer.current) return;
    const totalScrollWidth =
      scrollContainer.current.scrollWidth - window.innerWidth;

    var sliderTween = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: true,
        // markers: true,
      }
    })

    sliderTween.to(scrollContainer.current, {
      x: -totalScrollWidth,
      ease: "none",
    })

    const animate_child = document.querySelectorAll(".animate_child");

    animate_child.forEach((child) => {
      gsap.fromTo(
        child,
        { xPercent: 20 },
        {
          xPercent: 0,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: child,
            containerAnimation: sliderTween,
            start: "left right",
            toggleActions: "play none none reverse",
          },
        });
    });
  })

  return (
    <>
      <div
        ref={mainContainer}
        className="w-full h-screen overflow-x-hidden flex relative COLOR_BG_CREAM"
      >
        <div
          ref={scrollContainer}
          className="w-fit h-screen flex fixed overflow-hidden top-0 left-0"
        >
          <div className="w-fit  h-screen flex  justify-center items-center ml-[5vw]">
            <div className="w-fit h-fit flex  ">
              <div className="w-[413px] aspect-[4/5]  overflow-hidden img5">
                <Image
                  src={`/imgs/newExplorMarK/AA1.jpg`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={1000}
                  height={1000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className="w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px]  leading-[80px] Font_Q contA6 COLOR_TEXT_RED text-center uppercase ">
                Jemaa el-Fnaa Square
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                 The beating heart of Marrakech, Jemaa el-Fnaa is a UNESCO-listed cultural square that comes alive at all hours. By day, snake charmers, henna artists, and storytellers fill the open plaza. As evening falls, it transforms into a sprawling open-air food market with dozens of stalls grilling meats, serving harira soup, and offering fresh-squeezed orange juice. </div>
              </div>
            </div>
          </div>

          <div className=" w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/imgs/newExplorMarK/AA2.jpg`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          <div className=" animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-screen  overflow-hidden img5">
                <Image
                  src={`/imgs/newExplorMarK/BB1.webp`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
              </p>
              <h4 className=" text-[80px]  leading-[80px] Font_Q text-center contA6 COLOR_TEXT_RED uppercase ">
                 Jardin Majorelle
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Originally designed by French painter Jacques Majorelle in the 1920s and later rescued and restored by fashion icon Yves Saint Laurent, this botanical garden is one of Africa's most visited attractions.  </div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/imgs/newExplorMarK/BB2.jpg`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
            </div>
          </div>

          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/imgs/newExplorMarK/CC1.jpg`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 text-center COLOR_TEXT_RED uppercase ">
                Bahia Palace
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                 Built in the late 19th century, the Bahia Palace ("Palace of the Beautiful") was intended to be the grandest palace of its time.</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/imgs/newExplorMarK/CC2.jpg`}
                className="w-full h-full object-cover  object-center"
                alt="Img"
              />
            </div>
          </div>


          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw]  aspect-[3/2]  overflow-hidden img5">
                <Image
                  src={`/imgs/newExplorMarK/DD1.jpg`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className="animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center  ">
                Koutoubia Mosque
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  The Koutoubia Mosque is Marrakech's most iconic landmark and the largest mosque in the city. Its soaring 70-metre minaret has dominated the skyline since the 12th century and served as the architectural inspiration</div>
              </div>
            </div>
          </div>

          <div className="animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[413px] aspect-[4/5] flex overflow-hidden ">
              <Image
                src={`/imgs/newExplorMarK/DD2.jpg`}
                className="w-full h-full object-cover  object-center"
                width={1000}
                height={1000}
                alt="Img"
              />
              {/* </div> */}
            </div>
          </div>


          <div className="animate_child w-fit mx-[5vw] h-screen flex  justify-center items-center">
            <div className="w-fit h-fit flex  ">
              <div className="w-[50vw] h-fit  overflow-hidden img5">
                <Image
                  src={`/imgs/newExplorMarK/EE1.jpg`}
                  className="w-full h-full  object-cover object-center scale-[1.2]"
                  width={2000}
                  height={2000}
                  alt="Img"
                />
              </div>
            </div>
          </div>

          <div className=" animate_child w-[50vw] h-screen  flex justify-center items-center  ">
            <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center items-center">
              <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">

              </p>
              <h4 className=" text-[80px] leading-[80px] Font_Q contA6 COLOR_TEXT_RED uppercase text-center ">
                The Souks of the Medina
              </h4>
              <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
                <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
                  Marrakech's old Medina is a living, breathing marketplace dating back centuries. The souks are organized loosely by trade — the dyers' souk (Souk Semmarine), the leather souk, the spice market,</div>
              </div>
            </div>
          </div>

          <div className=" animate_child w-fit h-screen mr-[2vw] flex justify-center items-center">
            <div className="w-[70vw] h-screen flex overflow-hidden ">
              <img
                src={`/imgs/newExplorMarK/EE2.jpg`}
                className="w-full h-full object-cover  object-center"

                alt="Img"
              />
            </div>
          </div>
        </div>
      </div>

     

    </>
  );
};

export default Explore;