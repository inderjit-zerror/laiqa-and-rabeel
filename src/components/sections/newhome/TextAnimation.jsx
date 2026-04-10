"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  return (
    <div className=" w-full h-fit relative p-20 flex  justify-center items-center bg-white ">
      <div className=" flex-wrap w-[30%]  justify-center text-center items-center mt-[10vh] Font_YV COLOR_TEXT_RED">
        <span className="Font_YV text-[1.5rem] leading-[1.6rem]">
          We’re so excited to celebrate our wedding with you in the magical city
          of Marrakech. Join us for a beautiful weekend filled with tradition,
          joy, and meaningful moments as we begin this new chapter together.
        </span>
      </div>

    </div>
  );
};

export default TextAnimation;
