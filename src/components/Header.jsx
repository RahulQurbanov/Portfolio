import React from 'react';
import 'animate.css';

export default function Header() {
    return (
        <div className='bg-[#0a192f] flex flex-col gap-[10px]'>
            <nav className='flex justify-between items-center py-5 px-[45px] text-[17px] bg-[#071726] animate__animated animate__fadeInDown animate__delay-1s'>
                <div className='text-gray-300'>Logo:</div>
                <div className='flex gap-10 text-gray-300'>
                    <a href="#" className='hover:text-[#64ffda] animate__animated animate__fadeInRight animate__delay-2s'>About:</a>
                    <a href="#" className='hover:text-[#64ffda] animate__animated animate__fadeInRight animate__delay-2s'>Project:</a>
                    <a href="#" className='hover:text-[#64ffda] animate__animated animate__fadeInRight animate__delay-2s'>Contact:</a>
                </div>
            </nav>

            <main className='w-[75%] m-auto mt-[40px]'>
                <p className='text-[#64ffda] text-[20px] animate__animated animate__fadeInLeft animate__delay-1s'>Hi, My name is</p>
                <p className='text-[#8892b0] text-[56px] font-bold animate__animated animate__fadeInUp animate__delay-2s'>Rahul Qurbanov</p>
                <p className='text-[#495670] text-[66px] font-bold animate__animated animate__fadeInUp animate__delay-3s'>I'm a Front-End Developer.!</p>

                <p className='w-[820px] text-[#ccd6f6] text-[19px] pl-1 mt-[35px] mb-[55px] animate__animated animate__fadeIn animate__delay-4s'>
                    I am a detail-oriented Front-End Developer based in Azerbaijan.
                    I specialize in building responsive and user-friendly web applications using modern technologies like React, Tailwind CSS, and JavaScript.
                    I am passionate about writing clean, efficient code and continuously improving both my design and development skills.
                </p>

                <div className='hover:skew-2 mb-[30px] animate__animated animate__zoomIn animate__delay-5s'>
                    <a href='https://github.com/RahulQurbanov?tab=overview&from=2025-04-01&to=2025-04-29' className='py-3 px-5 text-[#64ffda] border border-[#64ffda] bg-[#0a192f]'>
                        Check out my Github!
                    </a>
                </div>

                <div>
                    <h1 className='text-[#8892b0] text-[18px] mb-[25px] animate__animated animate__fadeInDown animate__delay-6s'>
                        Here are a few technologies I’ve been working with recently:
                    </h1>
                    <div className="mt-2 flex gap-10">
                  <div className="flex flex-col gap-7">
                    <img src="./src/assets/img/js.png" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-1s" />
                    <img src="./src/assets/img/html.webp" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-2s" />
                  </div>
                  <div className="flex flex-col gap-7">
                    <img src="./src/assets/img/css.svg" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-3s" />
                    <img src="./src/assets/img/git.svg" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-4s" />
                  </div>
                  <div className="flex flex-col gap-7">
                    <img src="./src/assets/img/github.svg" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-5s" />
                    <img src="./src/assets/img/sass.png" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-6s" />
                  </div>
                  <div className="flex flex-col gap-7">
                    <img src="./src/assets/img/react.svg" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-7s" />
                    <img src="./src/assets/img/figma.png" className="w-[22px] h-[35px] ml-2 animate__animated animate__rotateIn animate__delay-8s" />
                  </div>
                  <div className="flex flex-col gap-7">
                    <img src="./src/assets/img/node.svg" className="w-[35px] h-[35px] animate__animated animate__rotateIn animate__delay-9s" />
                    <img src="./src/assets/img/tailwind.svg" className="w-[40px] h-[45px] animate__animated animate__rotateIn animate__delay-[10s]" />
                  </div>
                     </div>

                </div>
            </main>
        </div>
    );
}
