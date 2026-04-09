"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Words = [
  "Where",
  "love",
  "meets",
  "celebration.",
  "We",
  "create",
  "unforgettable",
  "wedding",
  "experiences",
  "filled",
  "with",
  "joy,",
  "emotion,",
  "and",
  "timeless",
  "memories",
  "that",
  "you",
  "and",
  "your",
  "loved",
  "ones",
  "will",
  "cherish",
  "forever."
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
      <div className=" w-full h-screen sticky top-0 left-0 p-20 flex  justify-center items-center bg-white ">
        {/* <div className="w-2/10  h-fit absolute bottom-[-5%] right-[-5%] ">
          <img
            src={`/assets/s01.png`}
            alt="IMG"
            className="w-full  object-center object-cover "
          />
        </div> */}

        <div className=" text-[2vw] leading-[1.5vw] flex px-[2vw] flex-wrap w-[50%]  justify-end  absolute top-[10%] right-0 text-justify items-center gap-4 Font_YV  ">
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

        <div className="w-fit h-[90vh] bottom-[0%] left-[-0%] absolute z-90 ">
          <img
            src={`/assets/s22.png`}
            alt="IMF"
            className=" h-full object-center object-cover"
          />
        </div>
        <div className="w-fit h-[50vh] bottom-[2%] right-[10%] absolute z-90 ">
          <img
            src={`/assets/s20.png`}
            alt="IMF"
            className=" h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
