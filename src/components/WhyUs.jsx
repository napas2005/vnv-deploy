import React from "react";
import ButtonWhyUS from "./ButtonWhyUS";
import Abstract from "../assets/abstract.png";

const WhyUs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-white font-montserrat-medium">
        <div className="bg-discount-gradient p-4 rounded-lg shadow max-w-[360px] h-[180px] inline-block relative transition-transform duration-300 hover:scale-110 z-[1]">
          <div className="absolute bg-no-repeat bg-center bg-contain w-[120px] h-[120px] left-[116px] top-[32px] opacity-[50%] animate-spin-slow">
            <img
              src={Abstract}
              alt="abstract"
              className="w-full h-full opacity-50"
            />
          </div>

          <div className="relative z-[10]">
            <h2 className="text-xl font-semibold mb-2">Економія часу</h2>
            <p>
              Наш продукт допоможе вам значно скоротити час виконання завдань та
              оптимізувати робочий процес.
            </p>
          </div>
        </div>

        <div className="bg-discount-gradient p-4 rounded-lg shadow h-[180px] max-w-[360px] inline-block relative transition-transform duration-300 hover:scale-110 z-[1]">
          <div className="absolute bg-no-repeat bg-center bg-contain w-[120px] h-[120px] left-[116px] top-[32px] opacity-[50%] animate-spin-slow">
            <img
              src={Abstract}
              alt="abstract"
              className="w-full h-full opacity-50"
            />
          </div>

          <div className="relative z-[10]">
            <h2 className="text-xl font-semibold mb-2">Якість гарантовано</h2>
            <p>
              Ми ставимо на перше місце якість наших продуктів, щоб забезпечити
              найкращий результат.
            </p>
          </div>
        </div>

        <div className="bg-discount-gradient p-4 rounded-lg shadow h-[180px] max-w-[360px] inline-block relative transition-transform duration-300 hover:scale-110 z-[1]">
          <div className="absolute bg-no-repeat bg-center bg-contain w-[120px] h-[120px] left-[116px] top-[32px] opacity-[50%] animate-spin-slow">
            <img
              src={Abstract}
              alt="abstract"
              className="w-full h-full opacity-50"
            />
          </div>

          <div className="relative z-[10]">
            <h2 className="text-xl font-semibold mb-2">Підтримка 24/7</h2>
            <p>
              Наша команда готова допомогти вам цілодобово. Ви можете рахувати
              на нашу підтримку в будь-який момент.
            </p>
          </div>
        </div>

        <div className="bg-discount-gradient p-4 rounded-lg shadow h-[180px] max-w-[360px] inline-block relative transition-transform duration-300 hover:scale-110 z-[1]">
          <div className="absolute bg-no-repeat bg-center bg-contain w-[120px] h-[120px] left-[116px] top-[32px] opacity-[50%] animate-spin-slow">
            <img
              src={Abstract}
              alt="abstract"
              className="w-full h-full opacity-50"
            />
          </div>

          <div className="relative z-[10]">
            <h2 className="text-xl font-semibold mb-2 z-[1]">
              Інноваційні рішення
            </h2>
            <p className="z-[2]">
              Ми постійно впроваджуємо інноваційні технології та рішення для
              вашого бізнесу, щоб ви були в кроці від конкурентів.
            </p>
          </div>
        </div>

        <div className="absolute z-[0] w-[50%] h-[600px] blue__gradient "></div>

        <div className="bg-discount-gradient p-4 rounded-lg shadow h-[180px] max-w-[360px] inline-block relative transition-transform duration-300 hover:scale-110 z-[1]">
          <div className="absolute bg-no-repeat bg-center bg-contain w-[120px] h-[120px] left-[116px] top-[32px] opacity-[50%] animate-spin-slow">
            <img
              src={Abstract}
              alt="abstract"
              className="w-full h-full opacity-50"
            />
          </div>

          <div className="relative z-[10]">
            <h2 className="text-xl font-semibold mb-2">Надійність</h2>
            <p>
              Ми гарантуємо надійність та стабільність наших послуг, які ви
              можете довіряти своєму бізнесу.
            </p>
          </div>
        </div>

        <div className="bg-discount-gradient p-4 rounded-lg shadow h-[180px] max-w-[360px] inline-block relative transition-transform duration-300 hover:scale-110 z-[1]">
          <div className="absolute bg-no-repeat bg-center bg-contain w-[120px] h-[120px] left-[116px] top-[32px] opacity-[50%] animate-spin-slow">
            <img
              src={Abstract}
              alt="abstract"
              className="w-full h-full opacity-50"
            />
          </div>

          <div className="relative z-[10]">
            <h2 className="text-xl font-semibold mb-2">
              Спеціальна пропозиція
            </h2>
            <p>
              Замовте зараз і отримайте знижку 10% на перший місяць використання
              наших послуг!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-10 ">
        <ButtonWhyUS />
      </div>
    </div>
  );
};

export default WhyUs;
