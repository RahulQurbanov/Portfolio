import React from 'react';

export default function Projects() {
    return <div className='bg-[#0a192f]'>
        <div className='w-[75%] m-auto'>
        <h1 className='text-[29px] font-bold w-[76%] m-auto text-white py-[45px]'>You can check out all my projects on my <a href="https://github.com/RahulQurbanov">GitHub</a> Profile</h1>
        <div className='flex flex-row gap-[20px] justify-around'>
            <div className='w-[50%]'>
                <img src="src/assets/img/Weather.png" className='w-[%] opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/>
            </div>
            <div className='w-[50%] flex flex-col gap-[25px]  '>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>Weather Projects</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nam, a sequi adipisci fugiat iure obcaecati nihil modi exercitationem at aspernatur! Consectetur error aspernatur excepturi pariatur sint a quaerat cumque!</div>
            <div className='flex gap-5'>
            <img src="./src/assets/img/html.webp" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/css.svg" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/js.png" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/api.svg" className="w-[35px] h-[35px]" />
            </div>
            <div>
            <img src="./src/assets/img/github1.svg" className="w-[55px] h-[55px]" />
            <img src="./src/assets/img/live.svg" className="w-[55px] h-[55px]" />
            </div>
            </div>
        </div>
        </div>
    </div>
}