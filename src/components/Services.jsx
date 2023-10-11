import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import ButtonWant from "./ButtonWant";

const Services = () => {
  const data = [
    {
      label: "РОЗРОБКА",
      value: "develop",
      desc: `Наша команда професійних розробників пропонує створення унікальних веб-сайтів, які відповідають вашим унікальним потребам і вимогам. Ми створимо для вас сучасний і привабливий веб-сайт, який виділить ваш бізнес серед конкурентів`,
    },
    {
      label: "ОПТИМІЗАЦІЯ",
      value: "optimisation",
      desc: `Ми пропонуємо послуги з оновлення та покращення вашого веб-сайту. Наша команда допоможе вам оптимізувати швидкість завантаження, підняти рейтинг в пошукових системах та забезпечити відмінну роботу вашого веб-сайту`,
    },
    {
      label: "МОБІЛЬНI",
      value: "mobile",
      desc: `Ми створюємо мобільні додатки для платформ Android та iOS, які допоможуть вам розширити свою аудиторію та полегшити взаємодію з клієнтами. Наші додатки дотримуються найвищих стандартів якості та безпеки`,
    },
    {
      label: "КОНСУЛЬТАЦІЯ",
      value: "consult",
      desc: `Наша компанія пропонує широкий спектр ІТ-консалтінгу та технічної підтримки для бізнесу. Ми допомагаємо вирішувати технічні проблеми, розробляти стратегії розвитку ІТ та забезпечувати безперебійну роботу

      Кібербезпека та захист даних`,
    },
    {
      label: "ЗАХИСТ",
      value: "safety",
      desc: `Ми забезпечуємо вас найсучаснішими рішеннями з кібербезпеки, щоб захистити ваш бізнес від онлайн-загроз та кібератак. Ми розробимо стратегію захисту даних та надамо комплексні рішення для забезпечення конфіденційності інформації`,
    },
  ];

  return (
    <Tabs
      value="html"
      orientation="vertical"
      className="bg-discount-gradient rounded-r-lg m-6 sm:m-12 gap-2 text-montserrat xs:h-[264px] h-[480px]"
    >
      <TabsHeader className="sm:w-56 w-32 text-slate-700 p-6 gap-6 bg-slate-500 justify-center items-center xs:h-[264px] h-[480px]">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            activeClassName="bg-white text-slate-900"
            className="rounded-lg hover:bg-white w-[120px] hover:text-black ease duration-300 font-bold"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="flex justify-center items-center w-[1280px] text-slate-200" >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="py-0">
            {desc}
            <div className="relative md:left-[72%] md:top-[32px] top-[24px]">

            <ButtonWant />
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default Services;
