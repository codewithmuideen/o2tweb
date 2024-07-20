import React from "react";
import { image } from "../constants";
import MarqueeSlider from "./MarqueeSlider";

const Header = () => {
  return (
    <div className=" app__bg ">
      {/* Black color overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* Your content */}
      <div className="absolute top-[20%] md:top-1/2  sm:left-[15%] md:left-[30%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 flex gap-3">
        <div className="md:block hidden">
          <img src={image.mouse} alt="" />
        </div>
        <div className="text-white text-center sm:text-left    ">
          <div className=" px-3 md:py-3 flex flex-col gap-y-4 md:gap-y-2 justify-center md:items-start items-center w-full  sm:w-[554px]   ">
            <div>
              <h1 className="text-[40px] font-bold text-white leading-[45px]  sm:leading-[57px] text-focus-in">
                Data Quotient <br />{" "}
              </h1>
              <span className="text-[30px] sm:leading-[40px] text-Yellow text-focus-in">
                Simplified Data Insights for Smarter Business
              </span>
            </div>
            <p className="mt-4 sm:text-[23px] text-[20px] text-focus-in ">
              We boast a diverse array of specialized teams dedicated to various
              facets of technology and business, ensuring unwavering commitment
              to top-notch quality.
            </p>
          </div>
        </div>
      </div>

      <MarqueeSlider />
    </div>
  );
};

export default Header;
