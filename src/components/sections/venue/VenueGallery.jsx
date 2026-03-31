'use client'


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(Draggable);



const VenueGallery = () => {


    const sliderRef = useRef(null);

    const slideImg = [
        "/imgs/venue/bgG1.jpg",
        "/imgs/venue/bgG2.jpg",
        "/imgs/venue/bgG3.avif",
        "/imgs/venue/wp.jpg",
        // "/imgs/newExplorMarK/AA2.jpg",
    ];

    const images = [...slideImg, ...slideImg]; // duplicate

    // useEffect(() => {
    //     const slider = sliderRef.current;
    //     const totalWidth = slider.scrollWidth / 2;

    //     let x = 0;

    //     // Wrap function for infinite effect
    //     const wrap = gsap.utils.wrap(-totalWidth, 0);

    //     // Auto animation (ticker)
    //     const autoSlide = () => {
    //         x -= 1; // speed (increase for faster)
    //         x = wrap(x);
    //         gsap.set(slider, { x });
    //     };

    //     gsap.ticker.add(autoSlide);

    //     // Draggable
    //     const draggable = Draggable.create(slider, {
    //         type: "x",
    //         inertia: true,
    //         onPress() {
    //             gsap.ticker.remove(autoSlide);
    //         },
    //         onDrag() {
    //             x = this.x;
    //         },
    //         onThrowUpdate() {
    //             x = this.x;
    //         },
    //         onRelease() {
    //             gsap.ticker.add(autoSlide);
    //         },
    //     })[0];

    //     return () => {
    //         gsap.ticker.remove(autoSlide);
    //         draggable.kill();
    //     };
    // }, []);




    useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth / 2;

    const wrap = gsap.utils.wrap(-totalWidth, 0);

    // Continuous auto animation
    const tween = gsap.to(slider, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
            x: (x) => wrap(parseFloat(x)) + "px",
        },
    });

    const draggable = Draggable.create(slider, {
        type: "x",
        inertia: true,

        onPress() {
            tween.pause();
        },

        onDrag() {
            gsap.set(slider, {
                x: wrap(this.x),
            });
        },

        onThrowUpdate() {
            gsap.set(slider, {
                x: wrap(this.x),
            });
        },

        onRelease() {
            // 🔑 Sync tween with current position BEFORE playing
            let currentX = wrap(this.x);

            gsap.set(slider, { x: currentX });

            tween.progress(0); // reset internally
            tween.invalidate(); // recalc
            tween.play();
        },
    })[0];

    return () => {
        tween.kill();
        draggable.kill();
    };
}, []);
    



    return (
        <div className="w-full h-[60vh] overflow-hidden mb-[10vh] bg-[#D9E5F1] ">
            <div
                ref={sliderRef}
                className="flex gap-6 h-full cursor-grab active:cursor-grabbing "
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[250px] max-sm:w-full max-sm:overflow-hidden sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-full flex-shrink-0"
                    >
                        <img
                            src={img}
                            alt="slide"
                            className="w-full h-full object-cover object-center pointer-events-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VenueGallery;
