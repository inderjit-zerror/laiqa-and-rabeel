// "use client";
// import Shop from "@/components/common/Shop";
// import { useEffect, useState } from "react";

// const places = [
//   {
//     id: 1,
//     title: "JEMAA EL-FNAA",
//     image: "/imgs/venue/horizontal_section/img1.webp",
//   },
//   {
//     id: 2,
//     title: "BAHIA PALACE",
//     image: "/imgs/venue/horizontal_section/img2.webp",
//   },
//   {
//     id: 3,
//     title: "KOUTOUBIA MOSQUE",
//     image: "/imgs/venue/horizontal_section/img3.webp",
//   },
//   {
//     id: 4,
//     title: "MAJORELLE GARDEN",
//     image: "/imgs/venue/horizontal_section/img4.webp",
//   },
//   {
//     id: 5,
//     title: "SAADIAN TOMBS",
//     image: "/imgs/venue/horizontal_section/img5.webp",
//   },
//   {
//     id: 6,
//     title: "MEDINA SOUKS",
//     image: "/imgs/venue/horizontal_section/img6.webp",
//   },
//   {
//     id: 7,
//     title: "PALMERAIE",
//     image: "/imgs/venue/horizontal_section/img1.webp",
//   },
//   {
//     id: 8,
//     title: "MENARA GARDENS",
//     image: "/imgs/venue/horizontal_section/img2.webp",
//   },
// ];

// const SMExplor = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [activeId, setActiveId] = useState(null);

//   const handleClick = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };


//   return (
//     <div className="w-full h-fit flex flex-col">

//       <div className="w-full h-fit p-5 flex flex-col gap-5">
//         {/* 1 ---------------------------------------------------------------------------------- */}
        

//         {/* text */}
//         <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 mt-30 justify-center m-auto items-center">
//           {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
//             Explore udaipur
//           </p> */}
//           <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
//             City Palace
//           </h4>
//           <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//             <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//               A magnificent lakeside palace complex showcasing centuries of royal heritage. Private guided tours and sunset visits offer breathtaking views over Lake Pichola.
//             </div>
//           </div>
//         </div>

//         {/* img1 */}
//         <div className="w-full aspect-2/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/City_Palace_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* img2 */}
//         <div className="w-full aspect-1/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/City_Palace_2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* 2 ---------------------------------------------------------------------------------- */}
        

//         {/* text */}
//         <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
//            {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
//             Explore udaipur
//           </p> */}
//           <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
//             Lake Pichola
//           </h4>
//           <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//             <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//               Experience Udaipur from the water with a private sunset boat ride. Golden skies, marble palaces, and serene lake views create an unforgettable setting.
//                 </div>
//           </div>
//         </div>

//         {/* img1 */}
//         <div className="w-full aspect-2/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/Lake_Pichola_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* img2 */}
//         <div className="w-full aspect-1/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/Lake_Pichola_2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* 3 ---------------------------------------------------------------------------------- */}
       

//         {/* text */}
//         <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
//           {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
//             Explore udaipur
//           </p> */}
//           <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
//             Taj Lake Palace
//           </h4>
//           <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//             <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                An iconic white-marble palace floating gracefully on the lake. Ideal for an elegant dinner, afternoon tea, or champagne at sunset.
//                 </div>
//           </div>
//         </div>

//          {/* img1 */}
//         <div className="w-full aspect-2/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/Taj_Lake_Palace_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* img2 */}
//         <div className="w-full aspect-1/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/pales.jpg`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* 4 ---------------------------------------------------------------------------------- */}
        

//         {/* text */}
//         <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 justify-center m-auto mt-20 items-center">
//           {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
//             Explore udaipur
//           </p> */}
//           <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
//            The Oberoi Udaivilas
//           </h4>
//           <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//             <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//               A benchmark of Indian luxury. Indulge in a world-class spa, lakeside dining, or sunset cocktails in a setting of timeless grandeur.
//                 </div>
//           </div>
//         </div>

//         {/* img1 */}
//         <div className="w-full aspect-2/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* img2 */}
//         <div className="w-full aspect-1/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/The_Oberoi_Udaivilas_2.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* 5 ---------------------------------------------------------------------------------- */}
       

//         {/* text */}
//         <div className="w-fit max-w-[665px] contA6 h-fit flex flex-col gap-6 m-auto justify-center mt-20 items-center">
//           {/* <p className=" uppercase Font_YV COLOR_TEXT_RED contA6">
//             Explore udaipur
//           </p> */}
//           <h4 className=" text-[10vw] leading-[10vw] Font_Q contA6 COLOR_TEXT_RED uppercase flex flex-wrap px-20 text-center ">
//             Bagore Ki Haveli
//           </h4>
//           <div className="w-full max-w-[460px] flex flex-col contA6 justify-center items-center gap-6">
//             <div className="text-[#395238] text-[18px] contA6 COLOR_TEXT_RED text-center Font_YV">
//                An 18th-century haveli offering a glimpse into Rajasthan’s cultural richness. The evening folk performance is particularly enchanting.
//                 </div>
//           </div>
//         </div>

//          {/* img1 */}
//         <div className="w-full aspect-2/1 overflow-hidden ">
//            <img src={`/imgs/explorNewImg/Bagore_Ki_Haveli_1.webp`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//         {/* img2 */}
//         <div className="w-full aspect-1/1 overflow-hidden ">
//           <img src={`/imgs/explorNewImg/bkh.jpg`} className="w-full h-full object-cover  object-center" alt="img" />
//         </div>

//       </div>

//       <Shop />

//     </div>
//   );
// };

// export default SMExplor;



// // {/* 1 */}
// //     <div className="w-full h-fit px-[2vw]  px-[20px] flex justify-center items-center mt-[15vh] ">
// //       <img
// //         src={`/imgs/smExplor/img1SME.svg`}
// //         className="w-full object-cover justify-center  object-center"
// //         alt="IMG"
// //       />
// //     </div>

// //     {/* 2 */}
// //     <div className="w-full h-fit flex flex-col justify-center items-center mt-[4vh] bg-[#395238]">
// //       <img
// //         className="w-full aspect-2/3 object-cover object-center"
// //         src={`/imgs/venue/horizontal_section/img5.webp`}
// //         alt="IMG"
// //       />
// //       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
// //         <h2 className="Font_Q">01</h2>
// //         <p className="FontYV">Outdoor Ceremony Area</p>
// //       </div>
// //     </div>

// //     {/* 3 */}
// //     <div className="w-full h-fit flex px-[20px] flex-col justify-center items-center pt-[4vh] bg-[#395238]">
// //       <img
// //         className="w-full aspect-2/2 object-cover object-center"
// //         src={`/imgs/venue/horizontal_section/img2.webp`}
// //         alt="IMG"
// //       />
// //       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
// //         <h2 className="Font_Q">02</h2>
// //         <p className="FontYV">Outdoor Ceremony Area</p>
// //       </div>
// //     </div>

// //     {/* 3 */}
// //     <div className="w-full h-fit flex flex-col justify-center items-center pt-[4vh] bg-[#395238]">
// //       <img
// //         className="w-full aspect-2/3 object-cover object-center"
// //         src={`/imgs/venue/horizontal_section/img3.webp`}
// //         alt="IMG"
// //       />
// //       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
// //         <h2 className="Font_Q">03</h2>
// //         <p className="FontYV">Outdoor Ceremony Area</p>
// //       </div>
// //     </div>

// //     {/* 4 */}
// //     <div className="w-full h-fit flex px-[20px] flex-col justify-center items-center py-[4vh] bg-[#395238]">
// //       <img
// //         className="w-full aspect-2/2 object-cover object-center"
// //         src={`/imgs/venue/horizontal_section/img6.webp`}
// //         alt="IMG"
// //       />
// //       <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
// //         <h2 className="Font_Q">04</h2>
// //         <p className="FontYV">Outdoor Ceremony Area</p>
// //       </div>
// //     </div>

// //     {/* 5 */}
// //     <div className="w-full h-fit px-[2vw] flex justify-center items-center mt-[8vh] ">
// //       <img
// //         src={`/imgs/smExplor/img1SME.svg`}
// //         className="w-full object-cover justify-center  object-center"
// //         alt="IMG"
// //       />
// //     </div>

// //     {/* 6 */}
// //     <div className="max-w-xl mx-auto bg-white mt-[4vh]">
// //       {places.map((item, index) => (
// //         <div key={item.id} className="border-b border-gray-200">
// //           <button
// //             onClick={() => handleClick(item.id)}
// //             className="w-full flex items-center justify-between py-4 text-left"
// //           >
// //             <div className="flex items-center gap-4">
// //               <span className="text-gray-400 Font_Q">
// //                 {String(index + 1).padStart(2, "0")}
// //               </span>
// //               <span className={`text-lg Font_Q `}>{item.title}</span>
// //             </div>
// //             <span className="text-xl">
// //               {activeId === item.id ? "−" : "+"}
// //             </span>
// //           </button>

// //           {/* Expand Section */}
// //           <div
// //             className={`overflow-hidden transition-all duration-500 ${
// //               activeId === item.id
// //                 ? "max-h-[400px] opacity-100"
// //                 : "max-h-0 opacity-0"
// //             }`}
// //           >
// //             <img
// //               src={item.image}
// //               alt={item.title}
// //               className="w-full h-56 object-cover mb-4"
// //             />
// //           </div>
// //         </div>
// //       ))}
// //     </div>

// //     {/* 7 */}
// //     <div className="w-full h-fit flex justify-center items-center mt-[10vh] mb-[5vh]">
// //       <img src={`/svgs/TravelService.svg`} alt="IMG" className="w-full object-cover object-center" />
// //     </div>

// //     {/* 8 */}
// //     <div className="w-full h-fit flex justify-center items-center px-[20px]">
// //       <img src={`/imgs/itinerary/Iimg2.webp`} alt="img" className="w-full object-cover object-center" />
// //     </div>

// //     {/* 9 */}
// //     <div className="w-full h-fit flex justify-center items-center px-[20px] mt-[5vh] mb-[10vh]">
// //       <img src={`/imgs/r1.webp`} alt="img" className="w-full object-cover object-center" />
// //     </div>



"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
 
gsap.registerPlugin(ScrollTrigger);
 
const sections = [
  {
    title: "Marrakech",
    description:
      'Marrakech is one of the most vibrant and culturally rich cities in Morocco. Known as the "Red City" because of its rose-colored buildings, it blends history, culture.',
    img1: "/imgs/newExplorMarK/11T.jpg",
    img2: "/imgs/newExplorMarK/AA2.jpg",
    img2Wide: false,
  },
  {
    title: "Jardin Majorelle",
    description:
      "Originally designed by French painter Jacques Majorelle in the 1920s and later rescued and restored by fashion icon Yves Saint Laurent, this botanical garden is one of Africa's most visited attractions.",
    img1: "/imgs/newExplorMarK/BB1.webp",
    img2: "/imgs/newExplorMarK/BB2.jpg",
    img2Wide: false,
  },
  {
    title: "Bahia Palace",
    description:
      'Built in the late 19th century, the Bahia Palace ("Palace of the Beautiful") was intended to be the grandest palace of its time.',
    img1: "/imgs/newExplorMarK/EE1.jpg",
    img2: "/imgs/newExplorMarK/CC2.jpg",
    img2Wide: true,
  },
  {
    title: "Koutoubia Mosque",
    description:
      "The Koutoubia Mosque is Marrakech's most iconic landmark and the largest mosque in the city. Its soaring 70-metre minaret has dominated the skyline since the 12th century and served as the architectural inspiration.",
    img1: "/imgs/newExplorMarK/DD1.jpg",
    img2: "/imgs/newExplorMarK/DD2.jpg",
    img2Wide: false,
  },
  {
    title: "The Souks of the Medina",
    description:
      "Marrakech's old Medina is a living, breathing marketplace dating back centuries. The souks are organized loosely by trade — the dyers' souk (Souk Semmarine), the leather souk, the spice market.",
    img1: "/imgs/newExplorMarK/EE1.jpg",
    img2: "/imgs/newExplorMarK/EE2.jpg",
    img2Wide: true,
  },
];
 
/* ─────────────────────────────────────────────
   MOBILE  – vertical, normal scroll
───────────────────────────────────────────── */
const SMExplor = () => {
  return (
    <div className="w-full COLOR_BG_CREAM relative overflow-hidden pb-20 pt-[10vh]">
      {/* decorative top-left image */}
      <div className="w-2/5 h-fit absolute top-[-4%] left-[-4%] scale-x-[-1] z-10 pointer-events-none">
        <img
          src="/assets/s01.png"
          alt=""
          className="w-full object-cover object-center"
        />
      </div>
 
      {sections.map((sec, i) => (
        <div
          key={i}
          className="w-full flex flex-col items-center gap-6 px-5 pt-16"
        >
          {/* Primary image */}
          <div className="w-full aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={sec.img1}
              alt={sec.title}
              width={800}
              height={1000}
              className="w-full h-full object-cover object-center"
            />
          </div>
 
          {/* Text block */}
          <div className="w-full flex flex-col gap-4 items-center text-center py-[10vh]">
            <h4 className="text-[52px] leading-[52px] Font_Q COLOR_TEXT_RED uppercase">
              {sec.title}
            </h4>
            <p className="text-[16px] Font_YV COLOR_TEXT_RED max-w-[340px]">
              {sec.description}
            </p>
          </div>
 
          {/* Secondary image */}
          <div
            className={`overflow-hidden rounded-sm ${
              sec.img2Wide ? "w-full aspect-video" : "w-[80%] aspect-[4/5]"
            }`}
          >
            <img
              src={sec.img2}
              alt={sec.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
 
          {/* divider */}
          {i < sections.length - 1 && (
            <div className="w-16 h-px bg-current COLOR_TEXT_RED opacity-30 mt-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SMExplor;
 