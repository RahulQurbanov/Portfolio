import React from 'react';

export default function Header() {
    return (
        <div className='bg-[#0a192f] flex flex-col gap-[10px] h-[100vh]'>
           <nav className='flex justify-between items-center py-5 px-[65px] text-[17px] bg-[#071726]'>
            <div className='text-gray-300'>Logo:</div>
            <div className='flex gap-10 text-gray-300'>
                <a href="#" className='hover:text-[#64ffda]'>About</a>
                <a href="#" className='hover:text-[#64ffda]'>Project</a>
                <a href="#" className='hover:text-[#64ffda]'>Contact</a>
            </div>
           </nav>
           <main className='w-[65%] m-auto mt-[55px]'>
            <p className='text-[#64ffda] text-[20px]'>Hi, My name is </p>
            <p className='text-[#8892b0] text-[56px] font-bold'>Rahul Qurbanov</p>
            <p className='text-[#495670] text-[66px] font-bold'>I'm a Front-End Developer.!</p>
            <p className='w-[820px] text-[#ccd6f6] text-[19px] pl-1 mt-[35px] mb-[55px]'>I am a detail-oriented Front-End Developer based in Azerbaijan.
               I specialize in building responsive and user-friendly web applications using modern technologies like React, Tailwind CSS, and JavaScript.
               I am passionate about writing clean, efficient code and continuously improving both my design and development skills.</p>
               <div className='hover:skew-2'>
               <a href='#' className='py-3 px-5 text-[#64ffda] border-1 bg-[#0a192f] z-10'>Check out my Github !</a>
               </div>
           </main>
        </div>
    );
}
