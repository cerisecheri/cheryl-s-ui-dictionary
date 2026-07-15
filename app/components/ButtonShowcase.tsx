import React from 'react';

export function ButtonShowcase() {
    return(
  <div className='grid grid-cols-3 gap-6 p-6'> 
  <button className='bg-[#7C73E6] text-white hover:bg-[#A29BFE] px-4 py-2 rounded-md text-sm tracking-wide transition duration-200 cursor-pointer active:scale-80 transition-all'>
    click me!
  </button> 
  
  <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#7C73E6] text-white text-sm tracking-wide px-6 cursor-pointer">
    <span>hover me</span>
    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
      <div className="relative h-full w-8 bg-white/20"></div>
    </div>
  </button>
  
  <button className='bg-[#7C73E6] text-white hover:bg-[#A29BFE] px-4 py-2 rounded-md text-sm tracking-wide transition duration-200 cursor-pointer active:scale-80 transition-all'>
    click me!
  </button> 
  
  <button className='bg-[#7C73E6] text-white hover:bg-[#A29BFE] px-4 py-2 rounded-md text-sm tracking-wide transition duration-200 cursor-pointer active:scale-80 transition-all'>
    click me!
  </button> 
  
  <button className='bg-[#7C73E6] text-white hover:bg-[#A29BFE] px-4 py-2 rounded-md text-sm tracking-wide transition duration-200 cursor-pointer active:scale-80 transition-all'>
    click me!
  </button> 
  
  <button className='bg-[#7C73E6] text-white hover:bg-[#A29BFE] px-4 py-2 rounded-md text-sm tracking-wide transition duration-200 cursor-pointer active:scale-80 transition-all'>
    click me!
  </button> 
  </div>
  
    );
  }