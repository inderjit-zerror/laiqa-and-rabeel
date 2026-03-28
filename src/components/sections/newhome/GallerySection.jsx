'use client'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)

const GallerySection = () => {

  useEffect(() => {
    const TL1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.HomeHeroMainContainer',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })
    TL1.fromTo('.ImgContainer',
      {
        clipPath: 'inset(0% 0% 0% 0% )',
      },
      {
        clipPath: 'inset(10% 35% 10% 35% round 50px)',
        ease: 'none'
      }, 'a1'
    )
    TL1.from('.L-top', {
      translateX: '-100vw',
      translateY: '50vh',
      scale: 1.1,
      filter: 'blur(10px)',
      ease: 'none',
    }, 'a1')
    TL1.from('.L-bottom', {
      translateX: '-100vw',
      translateY: '50vh',
      delay: 0.03,
      scale: 1.1,
      filter: 'blur(10px)',
      ease: 'none',
    }, 'a1')
    TL1.from('.R-top', {
      translateX: '100vw',
      translateY: '50vh',
      scale: 1.1,
      filter: 'blur(10px)',
      ease: 'none',
    }, 'a1')
    TL1.from('.R-bottom', {
      translateX: '100vw',
      translateY: '50vh',
      delay: 0.03,
      scale: 1.1,
      filter: 'blur(10px)',
      ease: 'none',
    }, 'a1')

  }, [])

  return (
    <div className='HomeHeroMainContainer w-full h-[180vh] relative z-99 '>
      <div className="StickyContainer w-full h-svh sticky top-0 left-0 ">

        <div style={{ clipPath: 'inset(0% 0% 0% 0% round 10px)' }} className="ImgContainer w-full h-full absolute top-0 left-0 overflow-hidden">
          {/* <img src={`/imgs/newHome/bbg2.png`} alt="img" className="w-full h-full object-cover object-top" /> */}
          <img src={`/imgs/newHome/FullIMG.png`} alt="img" className="w-full h-full object-cover object-top" />
        </div>

        <div className="LeftHeroContainer w-1/3 h-full  absolute top-0 left-0 flex flex-col gap-5  items-end pt-[10vh]">

          <div className="L-top w-1/2 aspect-square  rounded-[20px] overflow-hidden">
            <img src={`/imgs/newHome/bbg3.png`} alt="img" className="w-full h-full object-cover object-center" />
          </div>

          <div className="L-bottom w-1/3 aspect-square  rounded-[20px] overflow-hidden">
            <img src={`/imgs/newHome/building2.png`} alt="img" className="w-full h-full object-cover object-center" />
          </div>

        </div>

        <div className="RightHeroContainer w-1/3 h-full absolute top-0 right-0 flex flex-col justify-end gap-5 pb-[10vh]">

          <div className="R-top w-1/3 aspect-square  rounded-[20px] overflow-hidden">
            <img src={`/imgs/newHome/bbg2.png`} alt="img" className="w-full h-full object-cover object-center" />
          </div>

          <div className="R-bottom w-1/2 aspect-square  rounded-[20px] overflow-hidden">
            <img src={`/imgs/newHome/bbg3.png`} alt="img" className="w-full h-full object-cover object-center" />
          </div>

        </div>


        {/* <div className='w-fit h-[150vh] bottom-[-80] right-0 absolute z-100'>
          <img src={`/imgs/newHome/tree1.png`} alt="IMF" className=' h-full object-center object-cover' />
        </div> */}

      </div>
    </div>
  )
}

export default GallerySection
