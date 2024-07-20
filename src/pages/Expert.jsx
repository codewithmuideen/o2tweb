import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { expertConsultCard, image } from "../constants";

const Expert = () => {
  return (
    <section>
      <div className="section">
        <div className="flex justify-between sm:flex-row flex-col">
          <div className="sm:w-[58%] w-[100%]">
            <h2 className=" lg:text-[60px] text-[25px] lg:leading-[75px] leading-[20px] font-bold">
              Expert Consulting
            </h2>
            <div className="sm:pt-[80px] pt-[40px]">
              <p className="text-[20px] font-medium leading-[35px]">
                Solving your problems or improving your product with the help of
                subject matter experts
              </p>
            </div>
            <div className="pt-[40px]">
              <p className="font-Lato text-[16px] leading-[26px]">
                We’ll give you just that: a few select individuals who are
                experts in their fields that can give you unique insights
                tailored to your business. We’ll analyze your product, advise
                you as partners, and cooperate with you closely to improve
                everything that needs work.
              </p>
            </div>
          </div>

          <div className="w-[40%] pl-[40px] sm:block hidden">
            <img src={image.consultT} alt="" />
          </div>
        </div>

        <div className="pt-[40px] flex  flex-wrap">
          {expertConsultCard.map((card, index) => (
            <div className="p-[15px] sm:w-[45%] md:w-[33%] w-[100%]">
              <div
                className={`hover:scale-105 hover:shadow-lg border-Ash border-[0.5px] p-[32px] rounded-lg md:h-[339px]
           `}
              >
                <div className="flex items-center">
                  <img src={card.icon} alt={card.title} />
                  <h5 className="  text-[20px] font-bold leading-8 pl-[32px] ">
                    {card.title}
                  </h5>
                </div>

                <div className="pt-[35px]">
                  <p className="  text-[14px] leading-[22px] font-Lato">
                    {card.description}
                  </p>
                </div>

                <div className="pt-[20px]">
                  <Link
                    to={card.url}
                    className="flex text-Blue items-center text-[12px] font-bold leading-5  gap-4"
                  >
                    <div>{card.more}</div>{" "}
                    <div className="text-[20px]">
                      <BsArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expert;
