import React from "react";
import { BsArrowRight } from "react-icons/bs";

const TeamMemberSlider = ({ people, index }) => {
  return (
    <div>
      {people.map((person, personIndex) => {
        const { id, img, quote, name, post } = person;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <main className={`${position}`} key={id}>
            <div className=" h-full flex flex-col gap-y-8 px-5 ">
              <div className=" border-l-2 border-Yellow sm:w-[40%] w-[98%] sm:pl-5 pl-3">
                <p className=" text-black text-[20px] leading-8 pr-10">
                  {quote}
                </p>
              </div>

              <div className="flex gap-x-3">
                <div>
                  <img src={img} alt="" className="w-[50px] rounded-full" />
                </div>

                <div>
                  <h3 className=" text-black text-[19px] leading-8">{name}</h3>
                  <h4 className=" text-black text-[16px] leading-8">{post}</h4>
                </div>
              </div>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default TeamMemberSlider;
