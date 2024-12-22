"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);
  // console.log("curr = " + curr);  
  // console.log({slides})
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition0-transform ease-out duration-500 w-full h-64 md:h-80 lg:h-96"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="flex absolute inset-0 items-center justify-between p-4 ">
        <button className="p-1 shadow bg-white/80 rounded-full" onClick={prev}>
          <ChevronLeft />
        </button>
        <button className="p-1 shadow bg-white/80 rounded-full" onClick={next}>
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-3 inset-x-0">
        <div className="flex justify-center items-center gap-1">
          {slides.map((_, i) => (
            <div
              className={`
                            transition-all w-3 h-3 bg-white rounded-full
                            ${curr === i ? "p-2" : "bg-opacity-50"}
                            `}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
