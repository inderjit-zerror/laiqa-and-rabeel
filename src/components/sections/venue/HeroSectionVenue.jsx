'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HeroSectionVenue = () => {

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: 20, // parallax strength
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        // markers:true
      },
    })
  }, [])

   // PRE-PRE-ANIMATION
    useGSAP(()=>{
      const tt = gsap.timeline()
       
        tt.to('.Igm',{
          opacity:1,
         duration:1,
        //  stagger:{
        //     each:'0.2',
        //     ease:'none'
        //  },
         ease:'power-in'
        })
         tt.to('.WEDMAIMTT2',{
          delay:0.1,
         y:0,
         duration:0.5,
        //  stagger:{
        //     each:'0.2',
        //     ease:'none'
        //  },
         ease:'power-in'
        })
    },[])


  return (
    <div ref={containerRef} className='w-full h-[150vh] flex overflow-hidden  relative COLOR_BG_CREAM'>

      <img src={`/imgs/venue/wp.png`} alt='IMG' className='w-full h-full object-cover absolute top-0 left-0  object-top Igm  opacity-0 ' />
      {/* <Image
        ref={imageRef}
        // src={`/imgs/RafflesUdaipur.webp`}
        src={`/imgs/venue/wp.png`}
        
        width={1000}
        height={1000}
        
      /> */}

      {/* <img src={`/name.png`} alt="IMG" className='w-1/3 max-sm:w-2/3 object-cover object-center absolute bottom-[15%] left-1/2 -translate-x-1/2' /> */}

      <div className='w-1/2 absolute top-[15%] left-1/2  justify-center items-center -translate-x-1/2 flex flex-col '>
        {/* <p className=' uppercase Font_YV  COLOR_TEXT_RED text-[6rem] leading-[6rem] max-sm:text-[15vw] max-sm:leading-[16vw] ' >THE wedding Venue</p> */}
        <h1 className=' uppercase Font_Q COLOR_TEXT_RED text-[5.5rem] leading-[5.5rem] max-sm:text-[15vw] max-sm:leading-[16vw] mt-[2vh] overflow-hidden ' ><span className='flex WEDMAIMTT2 translate-y-[100%]'> Official</span></h1>
        <h1 className=' uppercase Font_Q COLOR_TEXT_RED text-[5.5rem] leading-[5.5rem] max-sm:text-[15vw] max-sm:leading-[16vw] mt-[2vh] overflow-hidden ' ><span className='flex WEDMAIMTT2 translate-y-[100%]'> Wedding Hotel </span></h1>
      </div>
    </div>
  )
}

export default HeroSectionVenue
