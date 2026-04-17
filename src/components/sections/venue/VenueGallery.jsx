// 'use client'


// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";
// // import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(Draggable);



// const VenueGallery = () => {
    


//     const sliderRef = useRef(null);

//     const slideImg = [
//         "/imgs/venue/bgG1.jpg",
//         "/imgs/venue/bgG3.avif",
//         "/imgs/venue/wp.jpg",
//         "/imgs/newExplorMarK/AA2.jpg",
//     ];

//     const images = [...slideImg, ...slideImg]; // duplicate





//     useEffect(() => {
        
//     const slider = sliderRef.current;
//     const totalWidth = slider.scrollWidth / 2;

//     const wrap = gsap.utils.wrap(-totalWidth, 0);

//     // Continuous auto animation
//     const tween = gsap.to(slider, {
//         x: `-=${totalWidth}`,
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//             x: (x) => wrap(parseFloat(x)) + "px",
//         },
//     });

//     const draggable = Draggable.create(slider, {
//         type: "x",
//         inertia: true,

//         onPress() {
//             tween.pause();
//         },

//         onDrag() {
//             gsap.set(slider, {
//                 x: wrap(this.x),
//             });
//         },

//         onThrowUpdate() {
//             gsap.set(slider, {
//                 x: wrap(this.x),
//             });
//         },

//         onRelease() {
//             // 🔑 Sync tween with current position BEFORE playing
//             let currentX = wrap(this.x);

//             gsap.set(slider, { x: currentX });

//             tween.progress(0); // reset internally
//             tween.invalidate(); // recalc
//             tween.play();
//         },
//     })[0];

//     return () => {
//         tween.kill();
//         draggable.kill();
//     };
// }, []);
    



//     return (
//         <div className="w-full h-[60vh] overflow-hidden mb-[10vh] bg-[#ffffff] ">
//             <div
//                 ref={sliderRef}
//                 className="flex gap-6 h-full cursor-grab active:cursor-grabbing "
//             >
//                 {images.map((img, index) => (
//                     <div
//                         key={index}
//                         className="min-w-[250px] max-sm:w-full max-sm:overflow-hidden sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-full flex-shrink-0"
//                     >
//                         <img
//                             src={img}
//                             alt="slide"
//                             className="w-full h-full object-cover object-center pointer-events-none"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VenueGallery;


"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const VenueGallery = () => {
  const sliderRef = useRef(null);

  const slideImg = [
    "/imgs/venue/bgG1.jpg",
    "/imgs/venue/bgG3.avif",
    "/imgs/venue/wp.jpg",
    "/imgs/newExplorMarK/AA2.jpg",
  ];

  const images = [...slideImg, ...slideImg]; // duplicate for loop

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2;
    const wrap = gsap.utils.wrap(-totalWidth, 0);

    // ✅ Detect mobile (runs only on client, safe in Next.js)
    const isMobile = window.innerWidth < 640;

    let tween = null;

    // ✅ ONLY DESKTOP → auto scroll
    if (!isMobile) {
      tween = gsap.to(slider, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => wrap(parseFloat(x)) + "px",
        },
      });
    }

    // ✅ Draggable (works on both)
    const draggable = Draggable.create(slider, {
      type: "x",
      inertia: true,

      onPress() {
        if (tween) tween.pause();
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
        if (!tween) return; // ❌ mobile → no auto resume

        const currentX = wrap(this.x);
        gsap.set(slider, { x: currentX });

        tween.progress(0);
        tween.invalidate();
        tween.play();
      },
    })[0];

    return () => {
      if (tween) tween.kill();
      draggable.kill();
    };
  }, []);

  return (
    <div className="w-full h-[60vh] overflow-hidden mb-[10vh] bg-white">
      <div
        ref={sliderRef}
        className="flex gap-6 h-full cursor-grab active:cursor-grabbing"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[250px] max-sm:w-[90%] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-full flex-shrink-0"
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
