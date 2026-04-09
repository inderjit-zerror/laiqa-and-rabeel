"use client";
import Countdown from "@/components/sections/home/Countdown";
import Lamp from "@/components/sections/newhome/Lamp";
import LoveStory from "@/components/sections/newhome/LoveStory";
import TextAnimation from "@/components/sections/newhome/TextAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const home2 = () => {
  //   Pre-animation
  useEffect(() => {
    const Pre = gsap.timeline();
    Pre.to(".relMain", {
      opacity: 1,
      duration: 1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    const lamps = gsap.utils.toArray(".DemoAllItem");
    const floatAnims = [];
    lamps.forEach((lamp, i) => {
      gsap.fromTo(
        lamp,
        { x: "-100vw" }, // start from left
        {
          x: "100vw", // move to right
          duration: 10, // ✅ fixed 10 seconds
          ease: "none",
          repeat: -1,
        },
      );
    });

    lamps.forEach((lamp, i) => {
      const anim = gsap.to(lamp, {
        y: "+=40",
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });

      floatAnims.push(anim);
    });
  }, []);

  return (
    <>
      <div className="w-full h-[svh] relative relMain opacity-0 overflow-hidden ">
        <div className="w-full h-screen sticky flex top-0 left-0 overflow-hidden z-20 stickyAnimation scale-[1.1]">
          {/* back Building */}
          <div className=" absolute top-0 left-0 w-full h-screen z-10 overflow-hidden">
            <img
              src={`/home/SandBG.jpg`}
              alt="BGIMG"
              className="w-full h-full BGBLD  scale-[1.2] object-top object-center"
            />

            <div className="pointer-events-none absolute bottom-[3%] left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#ffffff]/60 to-[#ffffff] z-40" />
            <div className=" absolute bottom-2 left-0 w-full h-fit flex justify-center items-center Font_Q COLOR_TEXT_RED text-[8vw] z-50 NAMEWED tracking-tighter">
              LAIQA & RABEEL
            </div>

            <Lamp
              top="10%"
              left="50%"
              translateX="-50%"
              translateY="-50%"
              rotation="20deg"
              URL={`/gif/bird.gif`}
              name={"DemoAllItem scale-[0.8]  z-10 opacity-80 "}
            />
            <Lamp
              top="14%"
              left="40%"
              translateX="-50%"
              translateY="-50%"
              rotation="20deg"
              URL={`/gif/bird.gif`}
              name={"DemoAllItem scale-[0.4]  z-10 opacity-80 "}
            />
          </div>
        </div>
      </div>

      <TextAnimation />

      <Countdown />

      <div className="w-full h-screen overflow-hidden"> 
        <img src={`/lastP.png`} className="w-full h-full object-center object-cover" alt="IMG" />
      </div>

      {/* <LoveStory /> */}
    </>
  );
};

export default home2;
