"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  return (
    <div className=" w-full h-screen relative p-20 flex  justify-center items-center bg-white ">
      <div className=" flex-wrap w-[30%]  justify-end  absolute top-[50%] right-[8%] text-justify items-center gap-4 Font_YV COLOR_TEXT_RED">
        <span className="Font_YV text-[1.5rem] leading-[1.6rem]">
          We’re so excited to celebrate our wedding with you in the magical city
          of Marrakech. Join us for a beautiful weekend filled with tradition,
          joy, and meaningful moments as we begin this new chapter together.
        </span>
      </div>

      <div className="w-fit h-[90vh] bottom-[0%] left-[-0%] absolute z-90 ">
        <img
          src={`/assets/s22.png`}
          alt="IMF"
          className=" h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default TextAnimation;
