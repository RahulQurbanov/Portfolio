import React from 'react';

export default function Header() {
    return (
        <div className='bg-[#0a192f] flex flex-col gap-1'>
           <nav className='flex justify-between items-center py-5 px-10'>
            <div className='text-gray-300'>Logo:</div>
            <div className='flex gap-5 text-gray-300'>
                <a href="#">About</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
            </div>
           </nav>
           <main className='w-[550px] bg-red-100 m-auto'>
            <p>salam</p>
           </main>
        </div>
    );
}
