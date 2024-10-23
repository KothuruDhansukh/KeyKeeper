// import React from 'react'

// const footer = () => {
//   return (
//     <div className=" flex bg-slate-800 w-full text-white h-11 justify-between items-center gap-2  bottom-0 ">
//         <ul className='flex gap-10 mx-3'>
//             <li className=" cursor-pointer hover:font-bold">Privacy and Cookies</li>
//             <li className=" cursor-pointer hover:font-bold">Legal</li>
//             <li className=" cursor-pointer hover:font-bold">Advertise</li>
//             <li className=" cursor-pointer hover:font-bold">Help</li>
//             <li className=" cursor-pointer  hover:font-bold">Feedback</li>

//         </ul>
//         <div className="logo font-bold text-white p-2">
//           <span className="text-lime-400">&lt; Key</span>
//           Keeper
//           <span className="text-lime-400">/ &gt;</span>
//         </div>
//     </div>
//   )
// }

// export default footer
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row bg-slate-800 w-full text-white h-auto sm:h-13 justify-between items-center px-4 sm:px-8 py-2 bottom-0">
      <ul className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-10 mx-3 text-xs sm:text-sm md:text-base" aria-label="Footer navigation">
        <li className="cursor-pointer hover:font-bold transition duration-300">Privacy and Cookies</li>
        <li className="cursor-pointer hover:font-bold transition duration-300">Legal</li>
        <li className="cursor-pointer hover:font-bold transition duration-300">Advertise</li>
        <li className="cursor-pointer hover:font-bold transition duration-300">Help</li>
        <li className="cursor-pointer hover:font-bold transition duration-300">Feedback</li>
      </ul>
      <div className="logo font-bold text-white py-2 sm:py-0 text-sm sm:text-base md:text-lg">
        <span className="text-lime-400">&lt; Key</span>Keeper<span className="text-lime-400"> /&gt;</span>
      </div>
    </footer>
  );
}

export default Footer;


