import React from "react";
import DetailsButton from "./DetailsButton";

const Leadmagnet = () => {
  return (
    <section id="home" className={` flex md:flex-row flex-col py-0`}>
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6 m-4">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-montserrat flex-1 ss:text-[72px] xs:text-[46px] text-[36px] text-white ss:leading-[100px]">
            На тебе чекає <br className="sm:block hidden" />
            <span className="text-primary bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              Безкоштовний{" "}
            </span>
            <span className="text-primary bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              {" "}
              бонус
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 z-[0] "></div>
        </div>
        <h1 className="font-montserrat ss:text-[68px] xs:text-[52px] text-[36px] text-white ss:leading-[100px] leading-[75px]">
          при першому замовленні
        </h1>
      </div>

      <div className="flex justify-around h-[420px] md:h-[420px] lg:h-[500px] lg:w-[660px] flex-col items-center my-0 bg-discount-gradient rounded-xl m-6">
        <h2 className="font-montserrat md:text-[26px] lg:text-[36px] xs:text-[24px] text-[18px] text-white p-6">
          Ми раді вас привітати! При замовленні від нас вперше, ви отримаєте
          можливість вибрати один з наших продуктів або послуг абсолютно
          безкоштовно.
        </h2>

        <DetailsButton />
      </div>
    </section>
  );
};

export default Leadmagnet;
