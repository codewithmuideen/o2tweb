import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ExpertFaq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className={`w-[100%] md:w-[300px] h-fit py-5   question  `}>
      <div className="flex justify-between items-center gap-2 px-4 ">
        <h2 className="  text-[20px] italic">{question}</h2>
        <button onClick={() => setShowAnswer(!showAnswer)} className="btn">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && (
        <p className="mt-2 sm:text-[20px] text-[17px] px-4">{answer}</p>
      )}
    </div>
  );
};

export default ExpertFaq;
