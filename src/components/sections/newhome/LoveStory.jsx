'use client'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)



const DataArr = [
    {
        url: `/imgs/newHome/bbg2.png`,
        class: 'Div1Img ImgContMainDiv',
        top: 25,
        rotate: '-1deg',
      
    },
    {
        url: `/imgs/newHome/bbg2.png`,
        class: 'Div2Img ImgContMainDiv',
        top: 28,
        rotate: '1deg',
    
    },
    {
        url: `/imgs/newHome/bbg2.png`,
        class: 'Div3Img ImgContMainDiv',
        top: 31,
        rotate: '-1deg',
         
    },
    {
        url: `/imgs/newHome/bbg2.png`,
        class: 'Div4Img ImgContMainDiv',
        top: 34,
        rotate: '1deg',
         
    },
]

const getLeftValue = (i) => {
  const pattern = [48, 52, 49, 51] // your sequence
  return pattern[i % pattern.length]
}

const ImageCollector = ({ URL, name, top, rotate, left }) => {
    return (
        <>
            <div style={{ top: `${top}%`,  left: `${left}%`, transform: `translateX(-50%) rotate(${rotate})` }} className={`w-1/5 aspect-5/4 bg-[#f5f5f5] absolute px-2 pt-2 ${name}  left-1/2  `}>
                <div className='w-full h-[80%]  overflow-hidden'>
                    <img src={URL} alt="IMG" className='w-full h-full object-center object-cover' />
                </div>
                <div className='w-full h-[20%] flex justify-center text-[14px] items-center COLOR_TEXT_RED'>
                    <p className='Font_Q capitalize '>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    )
}


const LoveStory = () => {

    useEffect(() => {
        const LS = gsap.timeline({
            scrollTrigger: {
                trigger: '.LS-MainContainer',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers:true

            }
        })
        LS.to('.BGIMGLS',{
            top:'50%',
            ease:'none'
        })
        LS.from('.ImgContMainDiv', {
            y: '150vh',
            opacity: 0,
            rotation: (i) => i % 2 === 0 ? -10 : 10,
            scale: (i) => 1 - i * 0.02,
            stagger: {
                each: 0.15,
                from: 'start'
            },
            ease: 'power3.out'
        })
         LS.to('.BGIMGLS',{
            top:'0%',
            ease:'none'
        })

    }, [])

    
    useEffect(() => {
        const LST = gsap.timeline({
            scrollTrigger: {
                trigger: '.LS-MainContainer',
                top: 'top top',
                end: 'bottom bottom',
                scrub: true,
            }
        })

        LST.to('.Left_1_TextWrap', {
            delay:1,
            opacity: 0,
            ease:'none'
        })
        LST.to('.Right_1_TextWrap', {
            opacity: 1,
            ease:'none'
        })
        LST.to('.Right_1_TextWrap', {
            opacity: 0,
            ease:'none'
        })
        LST.to('.Left_2_TextWrap', {
            opacity: 1,
            ease:'none'
        })

    }, [])

    return (
        <div className='LS-MainContainer w-full h-[600vh] relative z-70 bg-[#D9E5F1]'>

            <div className='w-full h-screen sticky top-0 left-0 overflow-hidden'>

                <img src={`/imgs/newHome/FullIMG.png`} alt="IMG" className="w-full h-full object-center BGIMGLS object-cover absolute top-0 left-0 z-[-2]" />
                {/* <div className="w-full h-full bg-[#0e0e0e5b] absolute CLO top-0 left-0 z-[-1]">
                     
                </div> */}

                <div className='w-full h-fit Font_Q flex justify-center items-center pt-10'>
                    <h1 className='COLOR_TEXT_RED text-[7vw] leading-[7vw] tracking-tighter'>Our Love Story</h1>
                </div>

                {
                    DataArr.map((item, index) => {
                        return (
                            <ImageCollector key={index} URL={item.url} name={item.class} top={item.top} rotate={item.rotate} left={getLeftValue(index)}  />
                        )
                    })
                }

                {/* <div className="w-1/5 Left_1_TextWrap h-fit flex justify-center items-center absolute top-[30%] left-[10%] COLOR_TEXT_RED text-[14px]   Font_Q ">
                    <p>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum explicabo omnis, laudantium deserunt ut animi odit quas sit perferendis ex?</p>
                </div>

                <div className="w-1/5 Left_2_TextWrap h-fit flex justify-center items-center absolute top-[30%] left-[10%] COLOR_TEXT_RED text-[14px]  Font_Q opacity-0">
                    <p>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum explicabo omnis, laudantium deserunt.</p>
                </div>

                <div className="w-1/5 Right_1_TextWrap h-fit flex justify-center items-center absolute top-[30%] right-[10%] COLOR_TEXT_RED text-[14px]  Font_Q opacity-0">
                    <p>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum explicabo omnis, laudantium deserunt.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum explicabo omnis, laudantium deserunt.</p>
                </div> */}


                {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[10vh] bg-gradient-to-b from-transparent via-[#D9E5F1]/60 to-[#D9E5F1] z-40" /> */}

            </div>

        </div>
    )
}

export default LoveStory