import React from "react";
import {
  Navbar,
  Main,
  WhyUs,
  Services,
  Leadmagnet,
  Feedback,
  Portfolio,
  FAQ,
  SocialLinks,
  Reviews,
  Slider1
} from "./components/export";
import { Slider } from "@material-tailwind/react";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="2xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full ">
          <Main />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full flex justify-center">
          <WhyUs />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full flex justify-center">
          <Services />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full">
          <Leadmagnet />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full">
          <Feedback />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full px-4 relative">
          <Portfolio />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full px-4 relative">
          <FAQ />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full">
          <SocialLinks />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full flex justify-center">
          <Reviews />
        </div>
      </div>

      <div className="bg-primary flex justify-center items-start my-12">
        <div className="xl:max-w-[1280px] w-full flex justify-center">
          <Slider1 />
        </div>
      </div>
    </div>
  );
};

export default App;
