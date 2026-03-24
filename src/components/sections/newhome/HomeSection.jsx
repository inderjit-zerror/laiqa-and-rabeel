"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Lamp from './Lamp';
import LoveStory from './LoveStory';
import TextAnimation from './TextAnimation';
import GallerySection from './GallerySection';

gsap.registerPlugin(ScrollTrigger);


const HomeSection = () => {


  const skyRef = useRef(null)
  const castleRef = useRef(null)
  const containerRef = useRef(null)

  const lockScroll = () => {
    const scrollY = window.scrollY
    document.body.dataset.scrollY = scrollY
    document.body.style.top = `-${scrollY}px`
    document.body.classList.add("no-scroll")
  }

  const unlockScroll = () => {
    const scrollY = document.body.dataset.scrollY
    document.body.classList.remove("no-scroll")
    document.body.style.top = ""
    window.scrollTo(0, parseInt(scrollY || "0"))
  }

  useGSAP(() => {

    lockScroll()
    const ctx = gsap.context(() => {

      const intro = gsap.timeline(
        {
          onComplete: () => {
            unlockScroll()
          }
        }
      );
      // Intro animation
      // intro.from(skyRef.current, {
      //   scale:4,
      //   duration: 2,
      //   ease: "power3.out"
      // },'a1')
      // intro.to(skyRef.current, {
      //   scale:2,
      //   duration: 2,
      //   ease: "power3.out"
      // },'a1')
      intro
        .fromTo(
          skyRef.current,
          { opacity:0 },
          { opacity: 1, duration: 1, ease: "none" }
        )
      intro.from('.namerDiv', {
        y: '150vh',
        duration: 2,
        ease: "power3.out"
      }, 'a1')
      intro.to('.namerDiv', {
        rotateZ: 0,
        duration: 2,
        ease: "power3.out"
      }, 'a1')
      intro.from(castleRef.current, {
        yPercent: 35,
        duration: 2,
        ease: "power3.out"
      })
      intro.from(".DemoAllItem", {
        yPercent: 150,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: "power3.out"
      })

      // SKY PARALLAX
      gsap.to(skyRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".mainCont",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      // CASTLE PARALLAX
      gsap.to(castleRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".mainCont",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })

      // -----------------------------
      // LAMP PARALLAX
      const lamps = gsap.utils.toArray(".DemoAllItem")

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mainCont",
          start: "top top",
          end: "80% top",
          scrub: true
        }
      })

      lamps.forEach((lamp) => {

        const currentRotation = gsap.getProperty(lamp, "rotation")

        const targetRotation =
          currentRotation === 0
            ? gsap.utils.random(-10, 10)
            : currentRotation

        const offset = gsap.utils.random(0, 60)

        tl.to(lamp, {
          y: `-${140 + offset}vh`,
          rotation: targetRotation,
          opacity: 0.3,
          ease: "none"
        }, 0)

      })

    }, containerRef)

    return () => ctx.revert()

  }, [])


  // loveStory =================================================




  return (
    <>


      <div ref={containerRef} className='w-full min-h-[300vh] overflow-hidden mainCont relative bg-[#044BB2]/20'>
        <img
          ref={skyRef}
          src={`/imgs/newHome/sky.png`}
          className='w-full h-[120vh] object-cover object-top absolute top-0 left-0 z-10'
          alt="IMG"
        />



        <img
          ref={castleRef}
          src={`/imgs/newHome/BuildingBG.png`}
          className='w-full h-full object-cover object-center absolute top-0 left-0 z-20 '
          alt="IMG"
        />

        {/* Name */}
        <div className='w-full h-screen  z-80  relative flex Font_Q justify-center pt-[40vh] font-bold'>
          <div className='w-fit h-fit flex flex-col namerDiv -rotate-z-25  justify-center items-center  COLOR_TEXT_RED tracking-tight'>
            <div className='text-[5vw] uppercase leading-[5vw]'>Laiqa</div>
            <div className='text-[1vw] leading-[1vw] mt-5'>Wed's</div>
            <div className='text-[5vw] uppercase leading-[5vw]'>Rabeel</div>
          </div>
        </div>



        <div className='w-full h-screen fixed top-0 left-0 z-50 flex'>


          <Lamp top="80%" left="50%" translateX="-50%" translateY="-50%" rotation="20deg" name={'DemoAllItem scale-[0.8]  z-40 opacity-80 '} />
          <Lamp top="70%" left="10%" translateX="-50%" translateY="-50%" rotation="-10deg" name={'DemoAllItem scale-[1]  z-40 opacity-80 '} />
          <Lamp top="20%" left="20%" translateX="-50%" translateY="-50%" rotation="5deg" name={'DemoAllItem scale-[1.1] z-40 opacity-80 '} />
          <Lamp top="60%" left="80%" translateX="-50%" translateY="-50%" rotation="-20deg" name={'DemoAllItem scale-[0.6]   z-40 opacity-80 '} />
          <Lamp top="20%" left="60%" translateX="-50%" translateY="-50%" rotation="-18deg" name={'DemoAllItem scale-[1] z-40 opacity-80 '} />
          
        </div>


       <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[150vh] bg-gradient-to-b from-transparent via-[#D9E5F1]/60 to-[#D9E5F1] z-40" />



      </div>

      <LoveStory />
      <TextAnimation/>

      <GallerySection />

    </>
  )
}

export default HomeSection