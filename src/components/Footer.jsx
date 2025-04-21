import React from "react"
export default function Footer() {
    return <div className="bg-[#0a192f]">
        <div className="w-[73%] m-auto">
            <h1 className="text-white text-3xl font-bold">Contact Info :</h1>
            <div className="text-white text-lg mt-[25px]">
                <p>Email: rahulqurbanov055@gmail.com</p>
                <p>Phone: +9940558902705</p>
            </div>
            <div className="flex gap-1 items-center mt-[10px]">
               <a href="https://github.com/RahulQurbanov?tab=overview&from=2025-04-01&to=2025-04-21"><img src="src/assets/img/github.svg" className="w-[40px] h-[30px] cursor-pointer"/></a>
                <a href="https://www.linkedin.com/in/rahul-qurbanov-483148261/"><img src="src/assets/img/linkedin.svg" className="w-[30px] h-[25px] cursor-pointer"/></a>
            </div>
        </div>
    </div>
}