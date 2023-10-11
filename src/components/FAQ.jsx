import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const FAQ = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="bg-discount-gradient rounded-t-lg px-2 text-white p-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b-[1px] border-b-sky-400"
        >
          Чому варто обрати вашу компанію?
        </AccordionHeader>
        <AccordionBody className="mt-4">
          Ми пропонуємо якісні та інноваційні рішення, маємо досвід у галузі,
          гарантуємо надійність та підтримку 24/7.
        </AccordionBody >
      </Accordion>
      <Accordion
        open={open === 2}
        icon={<Icon id={2} open={open} />}
        className="bg-discount-gradient px-2 text-white p-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-b-[1px] border-b-sky-400"
        >
          Які гарантії надаєте щодо якості продуктів?
        </AccordionHeader>
        <AccordionBody className="mt-4">
          Ми ставимо на перше місце якість наших продуктів і надаємо гарантії на
          їхню якість та надійність.
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        className="bg-discount-gradient rounded-b-lg px-2 text-white p-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-b-[1px] border-b-sky-400"
        >
          Як можу зв'язатися з вашою підтримкою у випадку потреби?
        </AccordionHeader>
        <AccordionBody className="mt-4">
          Ви можете зв'язатися з нашою підтримкою цілодобово через Telegram,
          Viber, Whatsapp або електронну пошту. Наша команда готова допомогти в
          будь-який момент.
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default FAQ;
