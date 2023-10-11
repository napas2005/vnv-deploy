import React, { useState } from "react";
import { email, viber, whatsapp, telegram } from "../assets";

const Feedback = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="md:flex-row flex justify-between items-center flex-col py-0 m-6">
      <form className=" bg-discount-gradient xs:w-[560px] flex items-center justify-center flex-col rounded-xl xs:p-8 p-4">
        <div class="space-y-4">
          <div class="border-b-[4px] border-b-cyan-600 xs:pb-12 pb-6">
            <div class="xs:mt-10 mt-2 grid grid-cols-1 gap-x-6 xs:gap-y-8 gap-y-4 sm:grid-cols-6">
              <div class="col-span-full">
                <label
                  for="about"
                  class="block xs:text-[36px] text-[28px] font-medium leading-6 text-white"
                >
                  Отримай зворотній зв'язок
                </label>
                <div class="xs:mt-8 mt-4">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    placeholder="Опишіть ваше питання"
                    class=" font- montserratblock w-full rounded-xl text-[16px]  p-1.5 text-slate-700 placeholder:text-slate-600 transition-ease duration-300  focus:outline-0 focus:border-[3px] focus:border-white bg-gradient-to-r from-cyan-300 to-blue-500  sm:text-[18px] sm:leading-6"
                  ></textarea>
                </div>
                <p class="xs:text-[28px] text-[24px] leading-6 text-white xs:mt-8 mt-4"></p>
              </div>
            </div>
          </div>

          <div class="border-b-[4px] border-b-cyan-600 xs:pb-12 pb-6">
            <h2 class="xs:text-[36px] text-[28px] font-semibold leading-7 text-white">
              Персональна інформація
            </h2>

            <div class="xs:mt-10 mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-[18px] font-medium leading-6 text-white"
                >
                  Ім'я
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="block w-full rounded-xl text-[16px]  p-1.5 text-slate-700 placeholder:text-slate-700 transition-ease duration-300  focus:outline-0 focus:border-[3px] focus:border-white bg-gradient-to-r from-cyan-300 to-blue-500  sm:text-[18px] sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-[18px] font-medium leading-6 text-white"
                >
                  Прізвище
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-xl text-[16px]  p-1.5 text-slate-700 placeholder:text-white transition-ease duration-300  focus:outline-0 focus:border-[3px] focus:border-white bg-gradient-to-r from-cyan-300 to-blue-500  sm:text-[18px] sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="email"
                  class="block text-[18px] font-medium leading-6 text-white"
                >
                  Електронна пошта
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block w-full rounded-xl text-[16px]  p-1.5 text-slate-700 placeholder:text-slate-700 transition-ease duration-300  focus:outline-0 focus:border-[3px] focus:border-white bg-gradient-to-r from-cyan-300 to-blue-500  sm:text-[18px] sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end self-center gap-x-6">
          <button
            type="submit"
            class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-[180px] h-[42px] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Відправити
          </button>
        </div>
      </form>

      <div className="flex justify-center items-start flex-col lg:max-w-[560px] md:max-w-[500px] max-w-[460px] gap-y-10 xs:mt-0 py-8">
        <h2 className="font-montserrat xs:text-[52px] text-[40px] text-white">
          Заповніть форму або ж зв'яжіться з нами у месенджерах
        </h2>
        <div className="flex flex-row justify-center items-center">
          <img
            src={telegram}
            alt="tg"
            className="w-[48px] h-[48px] md:mr-4 mr-2"
          />
          <h3 className="xs:text-[36px] text-[28px] text-white bg-discount-gradient w-[180px] flex items-center justify-center rounded-md cursor-pointer">
            Telegram
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src={viber}
            alt="tg"
            className="w-[48px] h-[48px] md:mr-4 mr-2"
          />
          <h3 className="xs:text-[36px] text-[28px] text-white bg-discount-gradient w-[180px] flex items-center justify-center rounded-md cursor-pointer">
            Viber
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src={whatsapp}
            alt="tg"
            className="w-[48px] h-[48px] md:mr-4 mr-2"
          />
          <h3 className="xs:text-[36px] text-[28px] text-white bg-discount-gradient w-[180px] flex items-center justify-center rounded-md cursor-pointer">
            Whatsapp
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src={email}
            alt="tg"
            className="w-[48px] h-[48px] md:mr-4 mr-2"
          />
          <div
            className={`xs:text-[36px] text-[28px] text-white w-[180px] flex items-center justify-center rounded-md cursor-pointer bg-discount-gradient hover:w-[340px] hover:h-[40px] hover:text-[24px]  ${
              isHovered ? "text-white" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? "team@vnv.solutions" : "E-mail"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
