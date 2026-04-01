"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const DataArr = [
  {
    url: `/assets/s30.png`,
    class: "Div1Img ImgContMainDiv",
    top: 45,
    rotate: "-1deg",
  },
  {
    url: `/assets/s40.png`,
    class: "Div2Img ImgContMainDiv",
    top: 48,
    rotate: "1deg",
  },
  {
    url: `/assets/s41.png`,
    class: "Div3Img ImgContMainDiv",
    top: 51,
    rotate: "-1deg",
  },
  {
    url: `/assets/s36.png`,
    class: "Div4Img ImgContMainDiv",
    top: 54,
    rotate: "1deg",
  },
];

// const DataArr = [
//   {
//     url: `/imgs/newHome/bbg2.png`,
//     class: "Div1Img ImgContMainDiv",
//     top: 45,
//     rotate: "-1deg",
//   },
//   {
//     url: `/imgs/newHome/bbg3.png`,
//     class: "Div2Img ImgContMainDiv",
//     top: 48,
//     rotate: "1deg",
//   },
//   {
//     url: `/imgs/newHome/building2.png`,
//     class: "Div3Img ImgContMainDiv",
//     top: 51,
//     rotate: "-1deg",
//   },
//   {
//     url: `/imgs/newHome/YH.png`,
//     class: "Div4Img ImgContMainDiv",
//     top: 54,
//     rotate: "1deg",
//   },
// ];

const getLeftValue = (i) => {
  const pattern = [48, 52, 49, 51]; // your sequence
  return pattern[i % pattern.length];
};

const ImageCollector = ({ URL, name, top, rotate, left }) => {
  return (
    <>
      <div
        style={{
          top: `${top}%`,
          left: `${left}%`,
          transform: `translateX(-50%) rotate(${rotate})`,
        }}
        className={`w-1/5 aspect-5/4 COLOR_BG_RED absolute px-2 pt-2 ${name}  left-1/2 b_SHD border border-[#D9E5F1]  `}
      >
        <div className="w-full h-[80%]  overflow-hidden  flex justify-center items-center">
          <img
            src={URL}
            alt="IMG"
            className=" h-full object-center object-cover"
          />
        </div>
        <div className="w-full h-[20%] flex justify-center text-[12px] items-center COLOR_TEXT_RED">
          <p className="Font_YV capitalize font-light text-white ">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};

const LoveStory = () => {
  useEffect(() => {
    const LS = gsap.timeline({
      scrollTrigger: {
        trigger: ".LS-MainContainer",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers:true
      },
    });

    LS.from(".ImgContMainDiv", {
      y: "150vh",
      opacity: 0,
      rotation: (i) => (i % 2 === 0 ? -10 : 10),
      scale: (i) => 1 - i * 0.02,
      stagger: {
        each: 0.15,
        from: "start",
      },
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const LST = gsap.timeline({
      scrollTrigger: {
        trigger: ".LS-MainContainer",
        top: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    LST.to(".Left_1_TextWrap", {
      delay: 1,
      opacity: 0,
      ease: "none",
    });
    LST.to(".Right_1_TextWrap", {
      opacity: 1,
      ease: "none",
    });
    LST.to(".Right_1_TextWrap", {
      opacity: 0,
      ease: "none",
    });
    LST.to(".Left_2_TextWrap", {
      opacity: 1,
      ease: "none",
    });
  }, []);

  return (
    <>
      <div className="LS-MainContainer w-full h-[400vh] relative z-70 bg-[#D9E5F1]">
        <div className="w-full h-screen sticky top-0 left-0 overflow-hidden">
          {/* <img src={`/imgs/newHome/FullIMG.png`} alt="IMG" className="w-full h-full object-center BGIMGLS object-cover absolute top-0 left-0 z-[-2]" /> */}

          <div className="w-full h-fit Font_Q flex justify-center items-center pt-[20vh]">
            <h1 className="COLOR_TEXT_RED text-[7vw] leading-[7vw] tracking-tighter">
              Our Love Story
            </h1>
          </div>

          {DataArr.map((item, index) => {
            return (
              <ImageCollector
                key={index}
                URL={item.url}
                name={item.class}
                top={item.top}
                rotate={item.rotate}
                left={getLeftValue(index)}
              />
            );
          })}

          <div className="w-1/5 Left_1_TextWrap h-fit flex justify-center  items-center absolute top-[50%]  font-light translate-y-1/2 left-[10%] COLOR_TEXT_RED text-[14px]   Font_YV ">
            <p>
              1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo omnis, laudantium deserunt ut animi odit quas sit
              perferendis ex?
            </p>
          </div>

          <div className="w-1/5 Left_2_TextWrap h-fit flex justify-center items-center absolute top-[50%] font-light  translate-y-1/2 left-[10%] COLOR_TEXT_RED text-[14px]  Font_YV opacity-0">
            <p>
              3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo omnis, laudantium deserunt.
            </p>
          </div>

          <div className="w-1/5 Right_1_TextWrap h-fit flex justify-center items-center absolute top-[50%] font-light  translate-y-1/2 right-[10%] COLOR_TEXT_RED text-[14px]  Font_YV opacity-0">
            <p>
              2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              explicabo omnis, laudantium deserunt.Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Ipsum explicabo omnis, laudantium
              deserunt.
            </p>
          </div>

          {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-b from-transparent via-[#D9E5F1]/60 to-[#D9E5F1] z-40" /> */}

          <div className="w-1/8  h-fit absolute top-[25%] left-[5%] scale-[0.7]">
            <img
              src={`/assets/s02.png`}
              alt="IMG"
              className="w-full  object-center object-cover "
            />
          </div>
          <div className="w-1/8  h-fit absolute top-[5%] right-[5%] ">
            <img
              src={`/assets/s03.png`}
              alt="IMG"
              className="w-full  object-center object-cover "
            />
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[80vh] relative">
        <img
          src={`/imgs/newHome/FullIMG.png`}
          alt="IMG"
          className="w-full h-full object-center BGIMGLS object-cover absolute top-0 left-0 z-[-2]"
        />
      </div> */}
      <div className="w-full h-[80vh] relative">
        <img
          src={`/assets/1BANNER.png`}
          alt="IMG"
          className="w-full h-full object-center BGIMGLS object-cover absolute top-0 left-0 z-[-2]"
        />
      </div>
    </>
  );
};

export default LoveStory;
