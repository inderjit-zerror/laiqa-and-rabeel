import React from "react";

const Footer = () => {
  return (
    <footer className="w-full COLOR_BG_CREAM py-8 border-t border-[#044BB23b] ">
            
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-1 opacity-70 mt-2">

        {/* Heading */}
        <p className="uppercase Font_Q COLOR_TEXT_RED w-full justify-center items-center">
          Email us for more information
        </p>

        {/* Email */}
        <div
          className="text-sm  text-[13px] mt-2 COLOR_TEXT_RED select-none cursor-pointer transition-colors group w-fit m-auto "
        >
         laiqarabeel@gmail.com 
         <div className="w-[0%] group-hover:w-full transition-all duration-150 ease-in ml-auto h-px bg-[#044BB2] whitespace-nowrap border-b "></div>
           
        </div>

        {/* Copyright */}
        <div className=" COLOR_TEXT_RED text-[13px]   w-fit m-auto select-none flex cursor-pointer ">
          © 2026 by  <a href="https://www.bombaylettering.com/"  target="_blank" rel="noopener noreferrer"><span className="w-fit group ml-2 "> Bombay Lettering
            <div className="w-[0%] group-hover:w-[100%] transition-all duration-150 ease-in ml-auto h-px bg-[#044BB2] whitespace-nowrap border-b "></div>
            </span></a>
            <span className="mx-2">&</span> 
          <a href="https://www.zerrorstudios.com/"  target="_blank" rel="noopener noreferrer"><span className="w-fit group "> Zerror Studios
            <div className="w-[0%] group-hover:w-[100%] transition-all duration-150 ease-in ml-auto h-px bg-[#044BB2] whitespace-nowrap border-b "></div>
            </span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
