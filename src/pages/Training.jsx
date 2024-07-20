import React from "react";
import { image, training } from "../constants";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Training = () => {
  return (
    <section className="pb-[50px]">
      <div className="flex justify-between items-end w-[100%] ">
        <h2 className="lg:text-[60px] text-[25px] lg:leading-[75px] leading-[20px] font-bold w-[65%] sm:w-[50%] ">
          Training
        </h2>

        <hr className="  border-black sm:w-[55%] w-[35%] " />
      </div>

      <div className="sm:pt-[50px] pt-[40px]">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="sm:w-[45%] w-[100%]">
            <img src={image.serviceT} alt="" />
          </div>

          <div className="sm:w-[50%] w-[100%] pt-[40px]">
            <strong className="text-[16px] font-Lato leading-6 text-Dark4">
              Are you looking for developers to join your in-house team? Or
              maybe you need to add specific skills to your roster? Whether it’s
              extra manpower or top-notch specialists, you’re in good hands with
              STX Next. We’ll augment your team with the exact people you
              require in less than 14 days. That commitment is a point of pride
              for our company.
            </strong>

            <p className="text-[16px] font-Lato leading-[26px] mt-[40px]">
              Our people will complement your staff, help you overcome any
              potential skill gaps, and increase your speed of delivery. The
              control over the project remains on your end and you keep all the
              strategic competencies completely in-house, distributing the work
              among all team members—both in-house and outsourced. Adding the
              missing skill sets to your existing internal team will allow you
              to build the most effective team faster, scale up or down at will,
              and deliver your project on time and within budget.
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-5 lg:-mt-[120px] relative ">
        <div className="bg-white lg:w-[900px] w-[100%] py-[48px] sm:px-[30px] rounded-2xl">
          <div className="pb-[32px] pl-1">
            <h2 className="text-[22px] leading-[31px] font-Montserrat font-bold">
              We can help with:
            </h2>
          </div>

          <div className="">
            <ul className="flex flex-wrap">
              {training.map((card) => (
                <li key={card.id} className="p-[12px] w-[100%] md:w-fit">
                  <Link
                    to={card.url}
                    className=" hover:scale-105 hover:shadow-lg flex items-center justify-between px-4 border rounded-md border-Ash md:w-[250px] w-[100%] h-[80px]"
                  >
                    <div className="flex items-center">
                      <img src={card.icon} alt="" className="mr-3 w-[50px]" />
                      <p className="text-[14px] font-Lato leading-[21px] font-semibold">
                        {card.title}
                      </p>
                    </div>
                    <BsArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
