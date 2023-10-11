import React, { useState, useEffect } from "react";
import { Example } from "../assets";

const Slider1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2, 3, 4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full flex flex-col sm:flex-row p-6 xs:mb-[100px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/4 h-64 sm:h-[80px] gap-x-4 rounded-lg bg-${
            slide === 1 ? "red" : slide === 2 ? "green" : "blue"
          }-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          {}
          <img src={Example} alt="example" className="rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default Slider1;
