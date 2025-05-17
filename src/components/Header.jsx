import React from 'react';
import 'animate.css';

export default function Header() {
    return (
        <div id='home' className='bg-[#0a192f] flex flex-col gap-[10px] scroll-smooth'>
            {/* Navbar */}
            <nav className='flex justify-between items-center py-5 px-6 md:px-[45px] text-[17px] bg-[rgb(7,23,38)] animate__animated animate__fadeInDown animate__delay-1s'>
                <div className='text-gray-300'>
                    <img src="/img/developer.svg" className='w-[45px] h-[35px] md:w-[55px] md:h-[40px] rounded-xl' />
                </div>
                <div className='hidden sm:flex gap-6 md:gap-10 text-gray-300'>
                    <a href="#home" className='hover:text-[#64ffda] animate__animated animate__fadeInRight animate__delay-2s'>About</a>
                    <a href="#projects" className='hover:text-[#64ffda] animate__animated animate__fadeInRight animate__delay-2s'>Project</a>
                    <a href="#contact" className='hover:text-[#64ffda] animate__animated animate__fadeInRight animate__delay-2s'>Contact</a>
                </div>
            </nav>

            {/* Main content */}
            <main className='w-[90%] md:w-[75%] mx-auto mt-[40px]'>
                <p className='text-[#64ffda] text-[18px] md:text-[20px] animate__animated animate__fadeInLeft animate__delay-1s'>
                    Hi, My name is
                </p>
                <p className='text-[#8892b0] text-[36px] md:text-[56px] font-bold animate__animated animate__fadeInUp animate__delay-2s'>
                    Rahul Qurbanov
                </p>
                <p className='text-[#495670] text-[40px] md:text-[66px] font-bold animate__animated animate__fadeInUp animate__delay-3s'>
                    I'm a{' '}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                        Front-End Developer
                    </span>
                    .!
                </p>
                <p className='text-[#ccd6f6] text-[16px] md:text-[19px] mt-6 mb-10 animate__animated animate__fadeIn animate__delay-4s leading-relaxed'>
                    I am a detail-oriented Front-End Developer based in Azerbaijan.
                    I specialize in building responsive and user-friendly web applications using modern technologies like React, Tailwind CSS, and JavaScript.
                    I am passionate about writing clean, efficient code and continuously improving both my design and development skills.
                </p>

                {/* GitHub Link */}
                <div className='hover:skew-2 mb-10 animate__animated animate__zoomIn animate__delay-5s'>
                    <a href='https://github.com/RahulQurbanov?tab=overview&from=2025-04-01&to=2025-04-29' className='py-3 px-5 text-[#64ffda] border border-[#64ffda] bg-[#0a192f]'>
                        Check out my Github!
                    </a>
                </div>

                {/* Technologies */}
                <div>
                    <h1 className='text-[#8892b0] text-[16px] md:text-[18px] mb-5 animate__animated animate__fadeInDown animate__delay-4s'>
                        Here are a few technologies I’ve been working with recently:
                    </h1>

                    <div className="mt-4 flex flex-wrap gap-6 md:gap-10">
                        {[
                            ["/img/js.png", "/img/html.webp"],
                            ["/img/css.svg", "/img/git.svg"],
                            ["/img/github.svg", "/img/sass.png"],
                            ["/img/react.svg", "/img/figma.png"],
                            ["/img/node.svg", "/img/tailwind.svg"]
                        ].map((pair, idx) => (
                            <div key={idx} className="flex flex-col gap-6">
                                {pair.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        className={`${
                                            src.includes('figma') ? 'w-[22px] h-[35px] ml-2' :
                                            src.includes('tailwind') ? 'w-[40px] h-[45px]' :
                                            'w-[35px] h-[35px]'
                                        } animate__animated animate__rotateIn animate__delay-5s`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
