import React from 'react';

export default function Header() {
    return (
        <div className='bg-[#0a192f] flex flex-col gap-[10px] '>
           <nav className='flex justify-between items-center py-5 px-[45px] text-[17px] bg-[#071726]'>
            <div className='text-gray-300'>Logo:</div>
            <div className='flex gap-10 text-gray-300'>
                <a href="#" className='hover:text-[#64ffda]'>About:</a>
                <a href="#" className='hover:text-[#64ffda]'>Project</a>
                <a href="#" className='hover:text-[#64ffda]'>Contact</a>
            </div>
           </nav>
           <main className='w-[75%] m-auto mt-[40px]'>
            <p className='text-[#64ffda] text-[20px]'>Hi, My name is </p>
            <p className='text-[#8892b0] text-[56px] font-bold'>Rahul Qurbanov</p>
            <p className='text-[#495670] text-[66px] font-bold'>I'm a Front-End Developer.!</p>
            <p className='w-[820px] text-[#ccd6f6] text-[19px] pl-1 mt-[35px] mb-[55px]'>I am a detail-oriented Front-End Developer based in Azerbaijan.
               I specialize in building responsive and user-friendly web applications using modern technologies like React, Tailwind CSS, and JavaScript.
               I am passionate about writing clean, efficient code and continuously improving both my design and development skills.</p>
               <div className='hover:skew-2 mb-[30px]'>
               <a href='#' className='py-3 px-5 text-[#64ffda] border-1 bg-[#0a192f] z-10'>Check out myGithub !</a>
               </div>
               <div>
                <h1 className='text-[#8892b0] text-[18px] mb-[25px]'>Here are a few technologies I’ve been working with recently:</h1>
                <div className="mt-2 flex gap-10">
                <div className="flex flex-col gap-7">
                  <img src="./src/assets/img/js.png" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/html.webp" className="w-[35px] h-[35px]" />
                </div>
                <div className="flex flex-col gap-7">
                  <img src="./src/assets/img/css.svg" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/git.svg" className="w-[35px] h-[35px]" />
                </div>
                <div className="flex flex-col gap-7">
                  <img src="./src/assets/img/github.svg" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/sass.png" className="w-[35px] h-[35px]" />
                </div>
                <div className="flex flex-col gap-7">
                  <img src="./src/assets/img/react.svg" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/figma.png" className="w-[22px] h-[35px] ml-2" />
                </div>
                <div className="flex flex-col gap-7">
                  <img src="./src/assets/img/node.svg" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/tailwind.svg" className="w-[40px] h-[45px]" />
                </div>
                </div>
               </div>
           </main>
        </div>
    );
}
