import React from "react";

const SocialMediaCard = (props) => {
  return (
    <div className="bg-discount-gradient p-4 rounded-lg shadow xs:w-[400px] ss:max-w-[420px] max-w-[280px] xs:h-[120px] h-[80px] flex justify-center items-center flex-row xs:gap-x-8 gap-x-4 transition-transform duration-300 hover:scale-110">
      <img src={props.img} alt="image" className="max-w-[52px] max-h-[52px]" />
      <h2 className="text-gradient xs:text-[36px] text-[28px]">{props.text}</h2>
    </div>
  );
};

export default SocialMediaCard;
