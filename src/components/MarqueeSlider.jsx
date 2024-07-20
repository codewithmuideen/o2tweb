import React from "react";
import Marquee from "react-fast-marquee";
import { SliderCard, image } from "../constants";

const MarqueeSlider = () => {
  return (
    <div>
      <div className="text-center md:w-[80%] px-2 md:px-0 w-full   absolute top-[90%] md:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Marquee direction="right" speed={40} delay={1} pauseOnHover={true}>
          {SliderCard.map((card, index) => (
            <div
              key={card.id}
              className="flex items-center justify-center h-full mx-10"
            >
              <img
                src={card.img}
                alt=""
                className={`${card.id === 4 ? "w-[70px]" : "w-[200px]"} ${
                  card.id === 1 ? "w-[80px] sm:w-[140px]" : ""
                }`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
