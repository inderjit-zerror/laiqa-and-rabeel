
// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(Draggable);

// const VenueGallery = () => {
//   const sliderRef = useRef(null);

//   const slideImg = [
//     "/allPageImg/venu1.webp",
//     "/allPageImg/venu4.webp",
//     "/allPageImg/venu3.webp",
//     "/allPageImg/venu4.webp",
//   ];

//   const images = [...slideImg, ...slideImg]; // duplicate for loop

//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const totalWidth = slider.scrollWidth / 2;
//     const wrap = gsap.utils.wrap(-totalWidth, 0);

//     // ✅ Detect mobile (runs only on client, safe in Next.js)
//     const isMobile = window.innerWidth < 640;

//     let tween = null;

//     // ✅ ONLY DESKTOP → auto scroll
//     if (!isMobile) {
//       tween = gsap.to(slider, {
//         x: `-=${totalWidth}`,
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: (x) => wrap(parseFloat(x)) + "px",
//         },
//       });
//     }

//     // ✅ Draggable (works on both)
//     const draggable = Draggable.create(slider, {
//       type: "x",
//       inertia: true,

//       onPress() {
//         if (tween) tween.pause();
//       },

//       onDrag() {
//         gsap.set(slider, {
//           x: wrap(this.x),
//         });
//       },

//       onThrowUpdate() {
//         gsap.set(slider, {
//           x: wrap(this.x),
//         });
//       },

//       onRelease() {
//         if (!tween) return; // ❌ mobile → no auto resume

//         const currentX = wrap(this.x);
//         gsap.set(slider, { x: currentX });

//         tween.progress(0);
//         tween.invalidate();
//         tween.play();
//       },
//     })[0];

//     return () => {
//       if (tween) tween.kill();
//       draggable.kill();
//     };
//   }, []);

//   return (
//     <div className="w-full h-[60vh] overflow-hidden mb-[10vh] bg-white">
//       <div
//         ref={sliderRef}
//         className="flex gap-6 h-full cursor-grab active:cursor-grabbing"
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="min-w-[250px] max-sm:w-[90%] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-full flex-shrink-0"
//           >
//             <img
//               src={img}
//               alt="slide"
//               className="w-full h-full object-cover object-center pointer-events-none"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VenueGallery;
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

// ── Reusable infinite slider ──────────────────────────────────────────────────
const InfiniteSlider = ({ images, direction = "rtl" }) => {
  const sliderRef = useRef(null);
  const looped = [...images, ...images];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const totalWidth = slider.scrollWidth / 2;
    const wrap = gsap.utils.wrap(-totalWidth, 0);
    const isMobile = window.innerWidth < 640;
    const sign = direction === "ltr" ? "+=" : "-=";

    let tween = null;
    if (!isMobile) {
      tween = gsap.to(slider, {
        x: `${sign}${totalWidth}`,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: { x: (x) => wrap(parseFloat(x)) + "px" },
      });
    }

    const draggable = Draggable.create(slider, {
      type: "x",
      inertia: true,
      onPress() { if (tween) tween.pause(); },
      onDrag() { gsap.set(slider, { x: wrap(this.x) }); },
      onThrowUpdate() { gsap.set(slider, { x: wrap(this.x) }); },
      onRelease() {
        if (!tween) return;
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
    <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing">
      <div
        ref={sliderRef}
        className="flex h-full"
        style={{ gap: "clamp(4px, 0.5vw, 8px)" }}
      >
        {looped.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-full"
            style={{ width: "clamp(150px, 20vw, 280px)" }}
          >
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const VenueGallery = () => {
  const leftImages = [
    "/allPageImg/venu1.webp",
    "/allPageImg/venu4.webp",
    "/allPageImg/venu3.webp",
    "/allPageImg/venu2.webp",
  ];

  const rightImages = [
    "/allPageImg/venu/1.avif",
    "/allPageImg/venu/2.avif",
    "/allPageImg/venu/3.jpg",
    "/allPageImg/venu/4.jpg",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400&display=swap');


        .venue-root {
          display: flex;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        /* Center vertical divider */
        .venue-divider {
          width: 1px;
          height: 100%;
          flex-shrink: 0;
        }

        /* Each half — left and right */
        .venue-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Horizontal divider between top and bottom */
        .panel-divider {
          width: 100%;
          height: 1px;
          
          flex-shrink: 0;
        }

        /* TOP: hotel name — 50% height */
        .panel-top {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
         
          padding: clamp(20px, 3vw, 48px);
          position: relative;
          overflow: hidden;
        }

        /* ghost number in background */
        .panel-top::before {
          content: attr(data-num);
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(120px, 20vw, 260px);
          font-weight: 600;
          color: rgba(0,0,0,0.035);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.04em;
          z-index: 0;
        }

        .top-eyebrow {
          
          font-weight: 200;
          font-size: clamp(9px, 0.8vw, 11px);
          letter-spacing: 0.38em;
          text-transform: uppercase;
          margin-bottom: clamp(8px, 1.2vw, 16px);
          position: relative;
          z-index: 1;
        }

        .top-name {
          font-weight: 300;
          font-size: clamp(30px, 4.2vw, 72px);
          line-height: 1.08;
          letter-spacing: 0.01em;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .top-name em {
          font-style: italic;
        }

        .top-rule {
          width: clamp(28px, 2.5vw, 42px);
          height: 1px;
          margin: clamp(10px, 1.2vw, 18px) 0;
          position: relative;
          z-index: 1;
        }

        .top-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          font-size: clamp(9px, 0.8vw, 12px);
          letter-spacing: 0.2em;
          color: rgba(20,12,4,0.32);
          text-align: center;
          position: relative;
          z-index: 1;
        }

        /* BOTTOM: slider — 50% height */
        .panel-bottom {
          flex: 1;
          overflow: hidden;
          // background: #1c1108;
        }

        /* ── MOBILE: stack top/bottom ── */
        @media (max-width: 640px) {
          .venue-root {
            flex-direction: column;
            height: auto;
            min-height: 100dvh;
          }

          .venue-divider {
            width: 100%;
            height: 1px;
          }

          .venue-panel {
            height: 50dvh;
            flex: none;
          }

          .panel-top {
            height: 50%;
            flex: none;
          }

          .panel-bottom {
            height: 50%;
            flex: none;
          }
        }
      `}</style>

      <div className="venue-root gap-2">

        {/* ── LEFT PANEL ── */}
        <div className="venue-panel">

          {/* Top: Hotel name */}
          <div className="panel-top" data-num="">
            <span className="top-eyebrow COLOR_TEXT_RED Font_Q">Venue · 01</span>
            <h2 className="top-name uppercase Font_Q COLOR_TEXT_RED">
             oberoi <br /><span>marrakech</span>
            </h2>
           
          </div>

          <div className="panel-divider" />

          {/* Bottom: Infinite slider — right to left */}
          <div className="panel-bottom">
            <InfiniteSlider images={leftImages} direction="rtl" />
          </div>
        </div>

        {/* Center divider */}
        <div className="venue-divider bg-[#044BB2]" />

        {/* ── RIGHT PANEL ── */}
        <div className="venue-panel">

          {/* Top: Hotel name */}
          <div className="panel-top" data-num="">
            <span className="top-eyebrow COLOR_TEXT_RED Font_Q">Venue · 02</span>
            <h2 className="top-name uppercase Font_Q COLOR_TEXT_RED">
             Park <br /><span>Hyatt</span>
            </h2>
           
          </div>

          <div className="panel-divider" />

          {/* Bottom: Infinite slider — left to right */}
          <div className="panel-bottom">
            <InfiniteSlider images={rightImages} direction="ltr" />
          </div>
        </div>

      </div>
    </>
  );
};

export default VenueGallery;