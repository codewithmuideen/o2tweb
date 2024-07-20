import { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const DAFaqs = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="py-3 mb-4 bg-white1 px-5 drop-shadow-lg">
      <div className="flex justify-between items-center ">
        <h2 className="text-[20px] ">{question}</h2>
        <button onClick={() => setShowAnswer(!showAnswer)} className="btn">
          {showAnswer ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>
      {showAnswer && <p className="mt-2  text-[17px]">{answer}</p>}
    </div>
  );
};

export default DAFaqs;
