"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  return (
    <div className=" w-full h-fit relative p-20 max-md:px-[20px]   flex  justify-center items-center bg-white ">
      <div className=" flex-wrap w-[65%] max-lg:w-full  justify-center text-center items-center  Font_YV COLOR_TEXT_RED">
        <span className="Font_YV text-[1.5rem] leading-[1.6rem] max-sm:text-[1rem] max-sm:leading-[1.1rem]  relative  ">
          The Shariff and Jawaid families invite you to celebrate the wedding of Laiqa and Rabeel in the magical city of Marrakech. Please join us for a weekend of tradition, joy, and celebrations with the people who matter most. 
        </span>
      </div>

    </div>
  );
};

export default TextAnimation;
