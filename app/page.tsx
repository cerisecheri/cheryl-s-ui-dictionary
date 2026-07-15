"use client";
import React, { useState } from 'react';
import { UI_ELEMENTS } from './data/uiElements';
import LeftSide from './components/LeftSide';
import { NavigationShowcase } from './components/NavigationShowcase';
import  FormShowcase  from './components/FormShowcase';
import OverlayShowcase from './components/OverlayShowcase';
import { DataShowcase } from './components/DataShowcase';
import { ButtonShowcase } from './components/ButtonShowcase';


export default function Home() {

  const [activeId, setActiveId] = useState("navigation");

  const currentElement = UI_ELEMENTS.find((element) => element.id == activeId);
  
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-center justify-center"
    style={{
      background: 'radial-gradient(at 44% 84%, #d8f8ff 0px, transparent 50%), radial-gradient(at 23% 33%, #89AFFF 0px, transparent 50%), radial-gradient(at 75% 29%, #F3E8EE 0px, transparent 50%), #A29BFE'
    }}
    >
{/* NAVIGATION + (RIGHT + LEFT) */}    
<div className='
p-2'>


{/* NAVIGATION */}    
      <div className="font-bold p-2 text-base
      rounded-2xl
      bg-[#D8F8FF]/20 backdrop-blur-md
      border-t border-t-[#F9FBF2]/35 
      border-l border-l-[#F9FBF2]/35
      shadow-[4px_4px_10px_-2px_rgba(0,0,15,0.5)]">
        Cheryl's UI Dictionary
      </div>
{/* END NAVIGATION */}  


{/* ENTIRE MAIN PAGE (BOTH LEFT + RIGHT SIDE) */}
<div className="flex flex-row gap-4 mt-4
rounded-2xl
w-[100%] max-w-6xl mx-auto 
h-[80vh] max-h-[800px]
bg-[#D8F8FF]/20 backdrop-blur-md
border-t border-t-[#F9FBF2]/35 
border-l border-l-[#F9FBF2]/35
shadow-[4px_4px_10px_-2px_rgba(0,0,15,0.5)]">


{/* LEFT SIDE */}
      <LeftSide
        uiElements={UI_ELEMENTS}
        activeId={activeId}
        setActiveId={setActiveId}
        />
{/* END LEFT SIDE */}

{/* RIGHT SIDE */}

      <div className="
      flex flex-col flex-1 
      h-[calc(100vh-8rem)] 
      p-2 gap-2
      "
      >
        <div className="flex flex-col gap-2 p-2 ">
        <h2 className='font-bold text-xl'
        style={{ fontFamily: 'var(--font-stack-notch)' }}>
          {currentElement?.title}
          </h2> 


{/* PREVIEW CANVAS */}
<div className='flex flex-row justify-center w-full p-6'>
        <div className='
        p-2 rounded-2xl 
        flex items-center justify-center 
        h-48 w-120 
        bg-[#D8F8FF]/20 backdrop-blur-md
        border-t border-t-[#F9FBF2]/35 
        border-l border-l-[#F9FBF2]/35
        shadow-[4px_4px_10px_-2px_rgba(0,0,15,0.5)]'>
           
        {activeId === "navigation" && <NavigationShowcase />}
        {activeId === "overlay" && <OverlayShowcase />}
        {activeId === "form" && <FormShowcase />}
        {activeId === "data" && <DataShowcase />}
        {activeId === "button" && <ButtonShowcase />}
          
        </div>
</div>   
{/* END PREVIEW CANVAS */}


{/* DESCRIPTION BOX */}
        <div className=' p-2 text-[16px]'>
        {currentElement?.description}
        </div>
        </div>
{/* END DESCRIPTION BOX */}

      </div>
{/* END RIGHT SIDE  bg-slate-100 */}
      </div>
{/* END ENTIRE MAIN PAGE (BOTH LEFT + RIGHT SIDE) */}
</div>

{/* END NAVIGATION + (RIGHT + LEFT) */} 

    </main>

     
  );
}
