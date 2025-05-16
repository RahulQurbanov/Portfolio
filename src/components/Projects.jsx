import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function Projects() {
  const { ref: investmentRef, inView: investmentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: quizRef, inView: quizInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: todoRef, inView: todoInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: koolCodersRef, inView: koolCodersInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: weatherRef, inView: weatherInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='bg-[#0a192f]'>
    <div id='projects' className='w-[75%] m-auto'>
      <h1 className='text-[29px] font-bold w-[76%] m-auto text-white py-[45px]'>
        You can check out all my projects on my{' '}
        <a
          href="https://github.com/RahulQurbanov"
          className="bg-gradient-to-r font-bold from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent  underline hover:brightness-125 animate-pulse"
        >
          GitHub
        </a>{' '}
        Profile..
      </h1>

        <div className='flex flex-row gap-[20px] justify-around mb-[95px]' ref={investmentRef}>
        <div className={`w-[50%]`}>
          <a href="https://github.com/RahulQurbanov/E-commers">
            <img src="/img/mybrand.jpeg" className='h-[85%] w-[465px] rounded-xl opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out' />
          </a>
        </div>

        <div className={`w-[50%] flex flex-col gap-[15px]`}>
          <h2 className='text-[#ccd6f6] text-[30px] font-bold'>E-commers</h2>
          <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>
          The application integrates multiple real-world APIs to simulate a functional shopping experience. Each section of the website fetches live data from separate APIs  from products and categories to detailed product views  ensuring that the content remains fresh and realistic.           </div>
          <div className='flex gap-5'>
            <img src="/img/html.webp" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
            <img src="/img/js.png" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
            <img src="/img/react.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
            <img src="/img/vite.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
            <img src="/img/tailwind.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
            <img src="/img/api.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
          </div>
          <div className='flex gap-2 items-end justify-end'>
            <a href="https://github.com/RahulQurbanov/E-commers"><img src="/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="https://github.com/RahulQurbanov/E-commers"><img src="/img/live.svg" className="w-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse h-[40px] cursor-pointer" /></a>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-[20px] justify-between mb-[95px' ref={investmentRef}>
            <div className={`w-[45%] flex flex-col gap-[15px]`}>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>Investment Calculator</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>This project is an interactive Investment Calculator built with React and styled using Tailwind CSS.
Users can input their desired investment amount, interest rate, and the number of months — the calculator will automatically compute the potential returns based on these values.</div>
            <div className='flex gap-5'>
                  <img src="/img/html.webp" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`}/>
                  <img src="/img/js.png" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/react.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/vite.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/tailwind.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/api.svg" className={`w-[35px] h-[35px] ${investmentInView ? 'animate__animated animate__rotateIn' : ''}`} />
            </div>
            <div className='flex gap-2 items-end justify-end'>
           <a href="https://github.com/RahulQurbanov/Investment-Calculator"><img src="/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="https://github.com/RahulQurbanov/Investment-Calculator"><img src="/img/live.svg" className="w-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse h-[40px] cursor-pointer" /></a>
            </div>
            </div>
            <div className={`w-[50%] flex justify-end`}>
            <a href="https://github.com/RahulQurbanov/Investment-Calculator"><img src="/img/investment.png" className='h-[70%] w-[475px] rounded-xl opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/></a>
            </div>
        </div>
        <div className='flex flex-row gap-[20px] justify-around mb-[45px]' ref={quizRef}>
        <div className={`w-[50%]`}>
            <a href="https://github.com/RahulQurbanov/Quiz-App"><img src="/img/quizapp.png" className='h-[85%] w-[480px] rounded-lg opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/></a>
            </div>
            <div className={`w-[45%] flex flex-col gap-[15px]`}>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>Quiz App</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>This is a dynamic Quiz App built using React and styled with Tailwind CSS.
                All questions are loaded from a JSON file, and users receive points for each correct answe , while wrong answers do not reduce the score. The app offers smooth interaction, real-time feedback, and is perfect for quick knowledge testing.</div>
            <div className='flex gap-5'>
                  <img src="/img/html.webp" className={`w-[35px] h-[35px] ${quizInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/js.png" className={`w-[35px] h-[35px] ${quizInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/react.svg" className={`w-[35px] h-[35px] ${quizInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/vite.svg" className={`w-[35px] h-[35px] ${quizInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/tailwind.svg" className={`w-[35px] h-[35px] ${quizInView ? 'animate__animated animate__rotateIn' : ''}`} />
            </div>
            <div className='flex gap-2 items-end justify-end'>
           <a href="https://github.com/RahulQurbanov/Quiz-App"><img src="/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="http://localhost:5173/"><img src="/img/live.svg" className="w-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse h-[40px] cursor-pointer" /></a>
            </div>
            </div>
        </div>
        <div className='flex flex-row gap-[20px] justify-around mb-[95px]' ref={todoRef}>
            <div className={`w-[45%] flex flex-col gap-[15px]`}>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>TodoList App :</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>This project is a To-Do List Application built with React and Vite. The application features two separate sections: Active and Done — allowing users to efficiently organize their tasks. Users can easily add new tasks, edit task names, mark them as completed, or delete them. The app offers a smooth and intuitive experience, making task management clear and convenient.</div>
            <div className='flex gap-5'>
            <img src="/img/html.webp" className={`w-[35px] h-[35px] ${todoInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/js.png" className={`w-[35px] h-[35px] ${todoInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/react.svg" className={`w-[35px] h-[35px] ${todoInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/vite.svg" className={`w-[35px] h-[35px] ${todoInView ? 'animate__animated animate__rotateIn' : ''}`} />
            </div>
            <div className='flex gap-2 items-end justify-end'>
           <a href="https://github.com/RahulQurbanov/Todo-List-"><img src="/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="https://rahulqurbanov.github.io/Todo-List-/"><img src="/img/live.svg" className="w-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse h-[40px] cursor-pointer" /></a>
            </div>
            </div>
            <div className={`w-[50%] flex justify-end`}>
            <a href="https://rahulqurbanov.github.io/Todo-List-/"><img src="/img/todo-react.png" className='h-[77%] mt-[15px] w-[465px] rounded-lg opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/></a>
            </div>
        </div>
        <div className='flex flex-row gap-[20px] justify-around mb-[45px]' ref={koolCodersRef}>
        <div className={`w-[50%]`}>
            <a href="https://github.com/RahulQurbanov/Project-KoolCoders"><img src="/img/KoolCoders.png" className='h-[85%] w-[475px] rounded-lg opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/></a>
            </div>
            <div className={`w-[45%] flex flex-col gap-[15px]`}>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>KoolCoders Projects</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>This project is designed as an online course platform. It was fully built using HTML, CSS, and JavaScript. The website layout is clean and responsive, featuring sections for courses, instructors, and interactive elements to simulate a real e-learning experience.</div>
            <div className='flex gap-5'>
            <img src="/img/html.webp" className={`w-[35px] h-[35px] ${koolCodersInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/css.svg" className={`w-[35px] h-[35px] ${koolCodersInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/js.png" className={`w-[35px] h-[35px] ${koolCodersInView ? 'animate__animated animate__rotateIn' : ''}`} />
            </div>
            <div className='flex gap-2 items-end justify-end'>
           <a href="https://github.com/RahulQurbanov/Project-KoolCoders"><img src="/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="https://rahulqurbanov.github.io/Project-KoolCoders/"><img src="/img/live.svg" className="w-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse h-[40px] cursor-pointer" /></a>
            </div>
            </div>
        </div>
        <div className='flex flex-row gap-[20px] justify-around'  ref={weatherRef}>
            <div className={`w-[45%] flex flex-col gap-[15px]`}>
               <h2 className='text-[#ccd6f6] text-[30px] font-bold'>Weather Projects :</h2>
               <div className='w-[500px] bg-[#112240] text-gray-300 rounded-lg py-2 px-5'>This project was built using HTML, CSS, and JavaScript. It fetches real-time 7-day weather forecasts for any city worldwide using the OpenWeather API. The user can search for a city, and the app displays accurate and up-to-date weather information in a clean and user-friendly design.</div>
            <div className='flex gap-5'>
            <img src="/img/html.webp" className={`w-[35px] h-[35px] ${weatherInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/css.svg" className={`w-[35px] h-[35px] ${weatherInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/js.png" className={`w-[35px] h-[35px] ${weatherInView ? 'animate__animated animate__rotateIn' : ''}`} />
                  <img src="/img/api.svg" className={`w-[35px] h-[35px] ${weatherInView ? 'animate__animated animate__rotateIn' : ''}`} />
            </div>
            <div className='flex gap-2 items-end justify-end'>
           <a href="https://github.com/RahulQurbanov/Weather-prognoz"><img src="/img/github1.svg" className="w-[50px] h-[50px] cursor-pointer  opacity-45 hover:opacity-100" /></a>
            <a href="https://rahulqurbanov.github.io/Weather-prognoz/"><img src="/img/live.svg" className="w-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse h-[40px] cursor-pointer" /></a>
            </div>
            </div>
            <div className={`w-[50%] flex justify-end`}>
            <a href="https://github.com/RahulQurbanov/Weather-prognoz"><img src="/img/Weather.png" className='h-[81%] w-[485px] rounded-lg opacity-20 hover:opacity-65 cursor-pointer transition-all translate-0.5 ease-in-out'/></a>
            </div>
        </div>
      </div>
      </div>
  )}
