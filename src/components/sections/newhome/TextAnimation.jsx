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
        {/* <img src={`/imgs/newHome/GDN.png`} alt="IMG" className="w-full h-full object-center object-cover opacity-5 absolute top-0 left-0 z-[-2]" /> */}

        <div className="w-1/10  h-fit absolute bottom-[5%] right-[5%] ">
        <img
          src={`/assets/s05.png`}
          alt="IMG"
          className="w-full  object-center object-cover "
        />
      </div>

        <div className=" text-[4vw] leading-[4vw] flex flex-wrap justify-center items-center gap-4 Font_Q  ">
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

        <div className='w-fit h-[150vh] bottom-[-590] left-[-600] absolute z-90 opacity-50 rotate-z-30 '>
        <img src={`/imgs/newHome/tree1.png`} alt="IMF" className=' h-full object-center object-cover' />

        </div>

        {/* <div className="w-1/2 h-[100vh] bottom-[-50] left-[-50] absolute z-90 opacity-50  "> */}
          {/* <img src={`/imgs/newHome/tree1.png`} alt="IMF" className=' h-full object-center object-cover' /> */}
          {/* <img
            src={`/assets/s19.png`}
            alt="IMF"
            className=" h-full object-center object-cover"
          /> */}
        {/* </div> */}

        {/* <div className="w-1/6 h-fit bottom-[0%] right-[1%] absolute z-90 opacity-50 z-[-1]  ">
         
          <img
            src={`/assets/s10.png`}
            alt="IMF"
            className=" w-full object-center object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default TextAnimation;
