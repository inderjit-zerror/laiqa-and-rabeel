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

    gsap.to(skyRef.current, {         // move right
      y: "-=50",           // move slightly down
      duration: 5,        // slow movement
      repeat: -1,          // infinite
      yoyo: true,          // back & forth
      ease: "sine.inOut"
    })


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
          { opacity: 0 },
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


      // =========================
    // 🔥 FLOATING (STORE ANIMS)
    // =========================
    const lamps = gsap.utils.toArray(".DemoAllItem")
    const floatAnims = []

    lamps.forEach((lamp, i) => {
      const anim = gsap.to(lamp, {
        y: "+=40",
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      })

      floatAnims.push(anim)
    })

    // =========================
    // 🔥 SCROLL UP EFFECT
    // =========================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainCont",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,

        onEnter: () => {
          floatAnims.forEach(anim => anim.pause())
        },
        onLeaveBack: () => {
          floatAnims.forEach(anim => anim.resume())
        }
      }
    })

    lamps.forEach((lamp) => {

      const offset = gsap.utils.random(0, 60)

      tl.to(lamp, {
        y: -(window.innerHeight * 1.8 + offset), // 🚀 UPWARD
        opacity: 0.3,
        ease: "none"
      }, 0)

    })

    }, containerRef)

    return () => ctx.revert()

  }, [])



  const containerRefN3 = useRef(null);

  useEffect(() => {
    const el = containerRefN3.current;

    // duplicate content for seamless loop
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          return `${parseFloat(x) % totalWidth}px`;
        },
      },
    });
  }, []);



  return (
    <>


      <div ref={containerRef} className='w-full min-h-[300vh] overflow-hidden mainCont relative bg-[#044BB2]/20'>
        <img
          ref={skyRef}
          src={`/imgs/newHome/sky.png`}
          className='w-full h-[150vh] object-cover object-top absolute top-0 left-0 z-10'
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
          <Lamp top="80%" left="50%" translateX="-50%" translateY="-50%" rotation="20deg" URL={`/gif/bird.gif`} name={'DemoAllItem scale-[0.8]  z-40 opacity-80 '} />
          <Lamp top="20%" left="30%" translateX="-50%" translateY="-50%" rotation="5deg" URL={`/gif/bird.gif`} name={'DemoAllItem scale-[1.1] z-40 opacity-80 '} />
          <Lamp top="30%" left="65%" translateX="-50%" translateY="-50%" rotation="-18deg" URL={`/gif/bird.gif`} name={'DemoAllItem scale-[1] z-40 opacity-80 '} />
        </div>


        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#D9E5F1]/60 to-[#D9E5F1] z-40" />



      </div>

      <LoveStory />
      <TextAnimation />

      <GallerySection />


      {/* Next-3-Section */}
      <div className="w-full min-h-screen relative bg-[#D9E5F1]">

        {/* Background Move Text */}
        <div className="w-full overflow-hidden py-6 sticky h-screen left-0  top-0 flex  items-center  ">
          <div
            ref={containerRefN3}
            className="flex whitespace-nowrap  text-4xl font-bold gap-10 COLOR_TEXT_RED"
          >
            {/* Duplicate content for smooth infinite effect */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
                <span className="Font_Q text-[10vw] leading-[10vw]">Wedding</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* TOP_LEVEL_CONT */}
        <div className="w-full min-h-screen relative flex flex-col gap-[10vh] py-[10vh] z-100 justify-center items-center ">
          {
            [`/imgs/newHome/YH.png`, `/imgs/newHome/bbg2.png`, `/imgs/newHome/building2.png`,].map((item, index) => {
              return (
                <div key={index} className="w-[80%] min-h-[70vh]  overflow-hidden">
                  <img src={item} alt="Img" className='w-full h-full object-cover object-center' />
                </div>
              )
            })
          }
        </div>

      </div>



    </>
  )
}

export default HomeSection