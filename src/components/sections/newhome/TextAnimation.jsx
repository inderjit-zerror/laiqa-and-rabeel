"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Words = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
];

const TextAnimation = () => {
  useEffect(() => {
    const TA = gsap.timeline({
      scrollTrigger: {
        trigger: ".TextAnimaterContainer",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    TA.to(".Text_Animater", {
      width: "100%",
      stagger: {
        each: 0.5,
      },
      ease: "none",
    });
  }, []);

  return (
    <div className=" TextAnimaterContainer w-full h-[300vh] relative COLOR_BG_CREAM z-80">
      <div className=" w-full h-screen sticky top-0 left-0 p-20 flex  justify-center items-center ">
      
        <div className="w-2/10  h-fit absolute bottom-[-5%] right-[-5%] ">
        <img
          src={`/assets/s01.png`}
          alt="IMG"
          className="w-full  object-center object-cover "
        />
      </div>

        <div className=" text-[3.5vw] leading-[3.5vw] flex px-[2vw] flex-wrap justify-center items-center gap-4 Font_YV  ">
          {Words.map((item, index) => {
            const formatted =
              item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
            return (
              <div
                key={index}
                className="w-fit text-[#044ab22f]   h-fit relative whitespace-nowrap"
              >
                {formatted}
                <div className="w-[0%] Text_Animater overflow-hidden h-fit  z-100 COLOR_TEXT_RED absolute top-0 left-0 whitespace-nowrap ">
                  {formatted}
                </div>
              </div>
            );
          })}
        </div>

        <div className='w-fit h-screen bottom-[0%] left-[-20%] absolute z-90 opacity-50  rotate-z-10'>
        <img src={`/assets/s22.png`} alt="IMF" className=' h-full object-center object-cover' />

        </div>

       
      </div>
    </div>
  );
};

export default TextAnimation;
