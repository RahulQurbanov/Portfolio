import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0a192f]">
      <div
        id="contact"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
      >
        <h1 className="text-white text-3xl font-bold mb-6 border-b-2 border-[#133563] inline-block">
          📬 Contact Info
        </h1>

        <div className="text-white text-lg space-y-3 mt-2">
          <p>
            📧 Email:{" "}
            <span className="text-purple-300 font-semibold">
              rahulqurbanov055@gmail.com
            </span>
          </p>
          <p>
            📞 Phone:{" "}
            <span className="text-purple-300 font-semibold">
              +9940558902705
            </span>
          </p>
        </div>

        <div className="flex gap-6 items-center mt-6">
          <a
            href="https://github.com/RahulQurbanov"
            className="transform hover:scale-110 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/github.svg"
              alt="GitHub"
              className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rahul-qurbanov-483148261/"
            className="transform hover:scale-110 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/linkedin.svg"
              alt="LinkedIn"
              className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer"
            />
          </a>
        </div>

        <div className="mt-8 border-t border-[#133563] pt-4 text-center text-sm text-purple-200">
          © {new Date().getFullYear()} Rahul Qurbanov. All rights reserved.
        </div>
      </div>
    </div>
  );
}
