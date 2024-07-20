import React, { useState, useEffect } from "react";
import { serviceCard } from "../constants";
import { BsArrowRight } from "react-icons/bs";
import ServicesSlider from "../components/ServicesSlider";
import { Link } from "react-router-dom";

const ServicesCard = () => {
  const [people, setPeople] = useState(serviceCard);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className=" bg-Dark2  flex flex-col justify-center items-center">
      <div className="sm:block hidden section">
        <div className=" flex ">
          {serviceCard.map((card, index) => (
            <div
              className={`   pt-[28px] px-[20px] 
              }`}
              key={index}
            >
              <div className=" h-[130px] md:h-[420px] flex flex-col justify-between ">
                <div>
                  <div className="flex items-center">
                    <img src={card.icon} alt={card.title} />
                    <h5 className=" text-Yellow text-[20px] font-bold leading-8 pl-[32px] ">
                      {card.title}
                    </h5>
                  </div>

                  <div className="pl-[19px] border-l-[1px] border-Blue mt-[23px]">
                    <p className=" text-white text-[16px] leading-8">
                      {card.description}
                    </p>

                    <Link
                      to={card.url}
                      className="flex items-center text-[12px] font-bold leading-5 text-Yellow gap-2 mt-3"
                    >
                      {card.more} <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <div className="section-center">
          <ServicesSlider people={people} index={index} />
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
