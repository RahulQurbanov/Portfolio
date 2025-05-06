import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0a192f]">
      <div id="contact" className="w-[85%] max-w-6xl mx-auto pt-[45px]">
        <h1 className="text-white text-3xl font-bold mb-6 border-b-2 border-[#133563] mt-2 inline-block">
          📬 Contact Info
        </h1>

        <div className="text-white text-lg mt-2 ">
          <p>
            📧 Email:{" "}
            <span className="text-purple-300 font-semibold">
              rahulqurbanov055@gmail.com
            </span>
          </p>
          <p>
            📞 Phone:{" "}
            <span className="text-purple-300 font-semibold mt-1">
              +9940558902705
            </span>
          </p>
        </div>

        <div className="flex gap-4 items-center mt-6">
          <a
            href="https://github.com/RahulQurbanov"
            className="transform hover:scale-110 transition duration-200"
          >
            <img
              src="/img/github.svg"
              className="w-[35px] h-[35px] cursor-pointer"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-qurbanov-483148261/"
            className="transform hover:scale-110 transition duration-200"
          >
            <img
              src="/img/linkedin.svg"
              className="w-[30px] h-[30px] cursor-pointer"
              alt="LinkedIn"
            />
          </a>
        </div>

        <div className="mt-5 border-t border-[#133563] pt-4 text-center text-sm text-purple-200">
          © {new Date().getFullYear()} Rahul Qurbanov. All rights reserved.
        </div>
      </div>
    </div>
  );
}