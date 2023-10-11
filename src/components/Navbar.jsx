import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-[11]">
      <img src={logo} alt="vnvLogo" className="w-[150px] h-[150px]" />

      <ul className="list-none sm:flex hidden justify-end items-end flex-1">
        <li className="font-montserrat font-normal cursor-pointer text-[24px] text-white mr-10 relative group">
          ПОСЛУГИ
          <span className="absolute h-1 w-0 top-8 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:w-full transition-all duration-300 origin-left"></span>
        </li>
        <li className="font-montserrat font-normal cursor-pointer text-[24px] text-white mr-10 relative group">
          ПРОЄКТИ
          <span className="absolute h-1 w-0 top-8 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:w-full transition-all duration-300 origin-left"></span>
        </li>
        <li className="font-montserrat font-normal cursor-pointer text-[24px] text-white relative group">
          КОМАНДА
          <span className="absolute h-1 w-0 top-8 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:w-full transition-all duration-300 origin-left"></span>
        </li>
      </ul>

      <div className="sm:hidden flex ml-2 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain xs:w-[36px] xs:h-[36px]"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-36 right-0 left-0 mx-4 my-2 min-w-[30px] min-h-[640px] rounded-xl sidebar z-[10]`}
      >
        <ul className="list-none flex flex-col justify-start items-start flex-1 pl-2">
          <li className="font-montserrat-200 font-normal cursor-pointer text-[32px] text-softGray mb-4 inline-block transform transition-transform duration-300 hover:translate-x-10 hover:text-white-500">
            01_ПОСЛУГИ
          </li>
          <li className="font-montserrat-200 font-normal cursor-pointer text-[32px] text-softGray mb-4 inline-block transform transition-transform duration-300 hover:translate-x-10 hover:text-white-500">
            02_ПРОЄКТИ
          </li>
          <li className="font-montserrat-200 font-normal cursor-pointer text-[32px] text-softGray mb-12 inline-block transform transition-transform duration-300 hover:translate-x-10 hover:text-white-500">
            03_КОМАНДА
          </li>
          <li className="font-montserrat-300 font-normal cursor-pointer  text-[18px] text-softGray mb-12 inline-block transition-transform duration-300 hover:-translate-x-5 hover:scale-110">
            <h3 className="text-gray">Україна</h3>
            <p>Карла Мікльоша, 7</p>
            <p>Львів</p>
          </li>
          <li className="font-montserrat-300 font-normal cursor-pointer  text-[18px] text-softGray mb-12 relative">
            <p className="inline-block cursor-pointer relative group">
              team@vnv.solutions
              <span className="absolute h-1 w-0 top-8 left-0 bg-slate-700 group-hover:w-full transition-all duration-300 origin-left"></span>
            </p>
          </li>
          <li className="font-montserrat-300 font-normal cursor-pointer text-[18px] text-softGray mb-4">
            <h3 className="text-gray mb-4">Ми у соцмережах</h3>
            <a
              href="https://www.linkedin.com/company/vnv-tech/"
              className="mb-4"
            >
              <p className="transform transition-transform duration-300 hover:translate-x-10 hover:text-white-500">
                Linkedin
              </p>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100088433736254"
              className="mb-4"
            >
              <p className="transform transition-transform duration-300 hover:translate-x-10 hover:text-white-500">
                Facebook
              </p>
            </a>
            <a
              href="https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE="
              className="mb-4"
            >
              <p className="transform transition-transform duration-300 hover:translate-x-10 hover:text-white-500">
                Instagram
              </p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
