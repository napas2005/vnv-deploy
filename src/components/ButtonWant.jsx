import React from "react";
import { Button } from "@material-tailwind/react";

const ButtonWant = () => {
  return (
    <div className="flex w-max gap-4">
      <Button
        variant="outline"
        className="xs:w-[220px] w-[160px] xs:h-[52px] h-[42px] outline rounded-lg z-[1]"
      >
        Хочу
      </Button>
    </div>
  );
};

export default ButtonWant;
