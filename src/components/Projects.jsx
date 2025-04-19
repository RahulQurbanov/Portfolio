import React from 'react';

export default function Projects() {
    return <div className='bg-[#0a192f]'>
        <div className='w-[75%] m-auto'>
        <h1 className='text-[29px] font-bold w-[76%] m-auto text-white py-[45px]'>You can check out all my projects on my <a href="https://github.com/RahulQurbanov">GitHub</a> Profile</h1>
        <div className='flex flex-row gap-[20px] justify-around'>
            <div className='w-[50%]'>
                <img src="src/assets/img/Weather.png" className='h-full opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/>
            </div>
            <div className='w-[45%] flex flex-col gap-[15px]'>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>Weather Projects</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>This project was built using HTML, CSS, and JavaScript. It fetches real-time 7-day weather forecasts for any city worldwide using the OpenWeather API. The user can search for a city, and the app displays accurate and up-to-date weather information in a clean and user-friendly design.</div>
            <div className='flex gap-5'>
            <img src="./src/assets/img/html.webp" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/css.svg" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/js.png" className="w-[35px] h-[35px]" />
                  <img src="./src/assets/img/api.svg" className="w-[35px] h-[35px]" />
            </div>
            <div className='flex gap-2 items-end justify-end'>
           <a href="https://github.com/RahulQurbanov/Weather-prognoz"><img src="./src/assets/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="https://rahulqurbanov.github.io/Weather-prognoz/"><img src="./src/assets/img/live.svg" className="w-[40px] h-[40px] cursor-pointer opacity-45 hover:opacity-100" /></a>
            </div>
            </div>
        </div>
        </div>
    </div>
}