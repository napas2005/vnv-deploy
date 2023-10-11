import React from "react";
import SocialMediaCard from "./SocialMediaCard";
import { instagram, facebook, linkedin } from "../assets";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center flex-col p-1">
        <h2 className="text-white xs:text-[42px] text-[28px]">МИ У СОЦМЕРЕЖАХ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white font-montserrat-medium p-6">
        <SocialMediaCard text="Instargram" img={instagram} />
        <SocialMediaCard text="Facebook" img={facebook} />
        <SocialMediaCard text="Linkedin" img={linkedin} />
      </div>
    </div>
  );
};

export default SocialLinks;
