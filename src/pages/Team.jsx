import React, { useState, useEffect } from "react";
import MarqueeSlider from "../components/MarqueeSlider";
import { TeamvaluesCard, TeamQoutesCard } from "../constants";
import TeamMembers from "../components/TeamMembers";
import TeamMemberSlider from "../components/TeamMemberSlider";

const Team = () => {
  const [people, setPeople] = useState(TeamQoutesCard);
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
    <section className="bg-Footer pb-[50px]">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white text-center md:w-[90%] px-2 md:px-0 w-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="md:text-[80px] text-[50px] leading-[96px] font-bold">
            Team
          </h1>
          <p className="mt-4 text-[18px]  font-Lato leading-8 md:w-[70%] w-[100%] mx-auto ">
            We're a professional family shaping the future through the
            capabilities of Python, project by project. Discover our team, our
            driving forces, and the individuals you' 11 collaborate with as a
            client or colleague.
          </p>
        </div>

        <MarqueeSlider />
      </div>

      <div className="section">
        <div className="flex flex-col pt-5 gap-y-10 pb-5">
          <div>
            <h2 className="lg:text-[50px] text-[25px] lg:leading-[50px] leading-[20px] font-bold text-Yellow">
              People <span className="text-black">are</span>
            </h2>
            <span className="lg:text-[50px] text-[25px] font-bold">
              everything.
            </span>
          </div>

          <div>
            <TeamMembers />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end w-[100%] mt-10 ">
            <h2 className="lg:text-[30px] text-[25px] lg:leading-[75px] leading-[30px] font-bold  ">
              A culture we can be proud of
            </h2>
          </div>
          <div className=" flex flex-col md:flex-row mt-5 ">
            {/* left item */}
            <div className="w-[100%] lg:w-[60%] flex flex-wrap gap-y-2 lg:gap-y-0">
              {TeamvaluesCard.map((card) => (
                <div
                  className="lg:w-[336px] w-[100%]  lg:pt-[15px] pt-[10px] lg:px-[30px] flex gap-y-4 flex-col items-center text-center lg:h-[350px] "
                  key={card.id}
                >
                  <div>
                    <img src={card.icon} alt="" />
                  </div>
                  <div>
                    <h2 className="text-[16px] font-bold leading-6">
                      {card.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-[16px] leading-[25px] text-Ash font-Lato">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* right item */}

            <div className="w-[30%] sm:mt-0 mt-24">
              <div className="section-center-team">
                <TeamMemberSlider people={people} index={index} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="section">
          {/* our team */}
          <div className="mt-[40px] pt-[20px] md:pt-[40px]">
            <div className="flex justify-between items-end w-[100%] ">
              <h2 className="lg:text-[60px] text-Dark2 text-[25px] lg:leading-[55px] leading-[20px] font-bold w-[65%] sm:w-[50%] ">
                Our Team
              </h2>

              <hr className="  border-black sm:w-[80%] w-[85%] " />
            </div>

            <div className="flex md:flex-row gap-y-2 md:gap-y-0 justify-between flex-col md:pt-[60px] pt-[20px]">
              <div className="w-[99%] md:w-[55%]">
                <p className="text-[20px] font-medium leading-[35px]">
                  The success of our clients and co-workers depends on smooth
                  processes and informed decision making. We have a roster of
                  seasoned leaders applying the best management and
                  communication practices on the market to our work.
                </p>
              </div>
              <div className="w-[99%] md:w-[45%]">
                <p className="text-[20px] font-Lato font-bold leading-[31px]]">
                  Their combined experience across the entire spectrum of
                  delivering successful software projects and assembling
                  high-performing teams has helped us become Europe’s largest
                  Python software house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
