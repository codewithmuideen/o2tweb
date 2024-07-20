import React from "react";
import { teamMembers } from "../constants";

const TeamMembers = () => {
  return (
    <div className="flex flex-wrap justify-between sm:gap-0 gap-4">
      {teamMembers.map((card, index) => (
        <div key={card.id} className="sm:w-[20%] w-[43%]">
          <img src={card.img} alt={card.name} className=" rounded-xl" />

          <div className="mt-3">
            <h3>{card.name}</h3>
            <h4>{card.position}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
