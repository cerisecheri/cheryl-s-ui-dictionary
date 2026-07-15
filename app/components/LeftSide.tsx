import React from 'react';

interface LeftSideThings {
    uiElements: Array<{ id: string; title: string; description: string }>;
    activeId: string;
    setActiveId: (id: string) => void;
}

export default function LeftSide({ uiElements, activeId, setActiveId }: LeftSideThings){
    return(
        <div className="w-1/4 h-[calc(100vh-8rem)] flex flex-col justify-items-center p-4 gap-5
        ">
        <h2 className='font-bold text-xl'
        style={{ fontFamily: 'var(--font-stack-notch)' }}> UI  Elements </h2>
        <div className="flex flex-col w-full gap-6">

          {
            uiElements.map((element) => (
              <button key={element.id}
              onClick={() => setActiveId(element.id)}
              className="w-3/4 
              text-[16px]
              rounded-full
              active:scale-90 transition-all
               tracking-wide
              cursor-pointer text-left p-1 
              hover:text-[#E0FAFF]/40 transition duration-200">
                <h2>
                  {element.title}
                </h2>
              </button>
            ))
          }
        </div>
      </div>
    );
}