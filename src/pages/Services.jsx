import React from "react";
import Training from "./Training";
import End from "./End";
import Expert from "./Expert";
import MarqueeSlider from "../components/MarqueeSlider";

const Services = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white text-center md:w-[90%] px-2 md:px-0 w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-[80px] text-[50px] leading-[96px] font-bold">
            Services
          </h1>
          <p className="mt-4 text-[18px]  font-Lato leading-8 md:w-[70%] w-[100%] mx-auto ">
            Your project is all that matters. We’ll build it like it was our
            own. Whether it’s team extension, end-to-end product development, or
            expert consulting you’re after, we’ll do everything in our power to
            meet your needs.
          </p>
        </div>

        <MarqueeSlider />
      </div>

      <div className="bg-white  sm:pt-[100px] pt-[50px] pb-[40px]">
        <Expert />
      </div>

      <div className="section ">
        <End />
      </div>

      <div className="section pt-5">
        <Training />
      </div>
    </section>
  );
};

export default Services;
