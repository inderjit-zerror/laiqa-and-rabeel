'use client'
import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const TravelInfo = () => {

  const row1 = useRef(null)
  const row2 = useRef(null)
  const row3 = useRef(null)

  useGSAP(() => {
    const createMarquee = (el, direction = 1) => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" }
      })

      tl.fromTo(
        el,
        { xPercent: 0 },
        {
          xPercent: direction === 1 ? -50 : 50,
          duration: 20,
        }
      )

      return tl
    }


    const tl1 = createMarquee(row1.current, 1)   // right
    const tl2 = createMarquee(row2.current, -1)  // left
    const tl3 = createMarquee(row3.current, 1)   // right

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const velocity = self.getVelocity()
        const speed = gsap.utils.clamp(0.5, 4, Math.abs(velocity) / 300)

        tl1.timeScale(speed)
        tl2.timeScale(speed)
        tl3.timeScale(speed)
      },
      onStop: () => {
        gsap.to([tl1, tl2, tl3], {
          timeScale: 1,
          duration: 0.6,
          ease: "power3.out",
        })
      },
    })
  }, [])

  return (
    <section className="relative COLOR_BG_RED py-32 px-6 overflow-hidden ">

      {/* Background oversized text */}
      <div className="absolute inset-0 flex flex-col justify-center gap-10 text-[#044BB2] opacity-5 pointer-events-none">

        {/* ROW 1 */}
        <div className="flex whitespace-nowrap uppercase Font_Q" ref={row1}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="flex whitespace-nowrap uppercase Font_Q -ml-[90vw] " ref={row2}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="flex whitespace-nowrap uppercase Font_Q" ref={row3}>
          {[...Array(16)].map((_, i) => (
            <h5 key={i} className="text-[7vw] leading-[7vw] max-sm:text-[20vw] max-sm:leading-[20vw]">
              Travel Information
            </h5>
          ))}
        </div>

      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center flex flex-col justify-center items-center">

        {/* <span className=" uppercase mb-6 text-[#044BB2]">
          Travel Information
        </span> */}

        <div className="Font_Q  mb-10 flex flex-col gap-4 max-sm:gap-1 uppercase text-[#044BB2] max-sm:text-[#044BB2] max-sm:uppercase">
          <h2> Arriving in Marrakech </h2>
        </div>

        <div className="space-y-3 max-sm:space-y-4 ">
          {/* <p className="uppercase Font_YV text-[#044BB2]">
            Nearest Airport is
          </p> */}

          <span className=" opacity-90 mt-4 Font_YV text-[#044BB2]">
            {/* Guests can fly into Marrakech Menara Airport (RAK), located about 25 minutes from the hotel */}
          </span>

          <p className="  Font_YV  text-[#044BB2] mt-5 ">
           Guests can fly directly into Marrakech Menara Airport (RAK), approximately 25 minutes from the hotel. Alternatively, Casablanca offers more international flight connections — from there, a short domestic flight or a 2-hour drive will get you to Marrakech. Transportation details will be shared with confirmed guests.

          </p>


        </div>
        {/* <div className='w-fit h-[46px] select-none mt-5 cursor-pointer flex justify-center items-center px-[17px] py-[6px] text-[16px] text-[white] bg-[#ddb98e] hover:bg-[#e3ad6b]'>
            View Location
          </div> */}
        {/* 
           <button className="button mt-5  " style={{ backgroundColor: '#EFDFCB' }}>
                                <span className="button__icon-wrapper">
                                    <svg
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="button__icon-svg"
                                        width="10"
                                    >
                                        <path
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>

                                    <svg
                                        viewBox="0 0 14 15"
                                        fill="none"
                                        width="10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="button__icon-svg button__icon-svg--copy "
                                    >
                                        <path
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="COLOR_TEXT_RED"> View Location</span>
                            </button> */}
      </div>
    </section>
  );
};

export default TravelInfo;
