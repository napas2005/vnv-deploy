import React from "react";
import { Button } from "@material-tailwind/react";

const DetailsButton = () => {
  return (
    <div className="flex w-max gap-4">
      <Button
        variant="gradient"
        className="xs:w-[280px] w-[180px] xs:h-[68px] h-[52px] xs:text-[32px]  text-[22px]  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl z-[1] flex items-center justify-center "
      >
        Детальніше
      </Button>
    </div>
  );
};

export default DetailsButton;
