import React from 'react';

export default function Projects() {
    return <div className='bg-[#0a192f]'>
        <div className='w-[75%] m-auto'>
        <h1 className='text-[29px] font-bold w-[76%] m-auto text-white py-[45px]'>You can check out all my projects on my <a href="https://github.com/RahulQurbanov">GitHub</a> Profile</h1>
        <div className='flex flex-row gap-1 items-center justify-around '>
            <div>
                <img src="src/assets/img/Weather.png" className='w-full opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/>
            </div>
            <div className='w-[85%] flex flex-col items-end'>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>Weather Projects</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nam, a sequi adipisci fugiat iure obcaecati nihil modi exercitationem at aspernatur! Consectetur error aspernatur excepturi pariatur sint a quaerat cumque!</div>
            </div>
        </div>
        </div>
    </div>
}