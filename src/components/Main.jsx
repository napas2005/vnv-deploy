import React from "react";
import { discount, robot } from "../assets/index";
import GetStarted from "./GetStarted";

const Main = () => {
  return (
    <section id="home" className={` flex md:flex-row flex-col py-0`}>
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className="text-white font-montserrat font-normal text-[20px]">
            Бонус{" "}
            <span className="font-montserrat font-normal text-dimWhite text-[18px] leading-[30.8px]">
              при першому замовленні
            </span>
          </p>
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] ml-2"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="font-montserrat flex-1 ss:text-[72px] text-[52px] text-white ss:leading-[100px]">
            Easy, quality, IT - <br className="sm:block hidden" />
            <span className="text-gradient">winning solutions</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 z-[0] ">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-montserrat ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          for your business
        </h1>
      </div>
      <div className="absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      <div className="flex-1 flex justify-center items-center my-0 ">
        <img
          src={robot}
          alt="robot"
          className="w-[100%] g-[100%] relative z-[5] transform transition-transform animate-float"
        />
      </div>

      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Main;
