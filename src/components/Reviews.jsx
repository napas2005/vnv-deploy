import React from "react";
import ReviewComponent from "./ReviewComponent";

const Reviews = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <h2 className="text-white xs:text-[42px] text-[28px] mb-6">НАШІ ВІДГУКИ</h2>
      <div className="flex justify-center items-center md:flex-row flex-col  xs:gap-x-6 gap-y-6">
        <ReviewComponent
          name="Віталій"
          text="Цей веб-сайт - ідеальне рішення для бізнесу! Я вже встиг скористатися їхніми послугами з розробки веб-сайту, і результат мене вражає. Висока якість та ефективність виконаної роботи роблять їх найкращим вибором для веб-розробки."
        />
        <ReviewComponent
          name="Олена"
          text="Цей веб-сайт дійсно допомагає економити час та зусилля. Їхні інноваційні рішення революціонізують робочий процес та зроблять ваш бізнес більш конкурентоспроможним."
        />
        <ReviewComponent
          name="Максим"
          text="Не можу не відзначити надійність цієї компанії. Їхня підтримка доступна 24/7 і завжди готова допомогти. Я впевнений, що мій бізнес завжди в надійних руках."
        />
      </div>
    </div>
  );
};

export default Reviews;
