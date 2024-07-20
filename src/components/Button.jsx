import { BsArrowDown } from "react-icons/bs";

const Button = ({ styles, text }) => {
  const handleClick = () => {
    window.location.href = "mailto:olamitobitechnologies@gmail.com";
  };

  return (
    <div>
      <button
        type="button"
        className={`${styles} flex justify-center items-center gap-3 md:gap-2`}
        onClick={handleClick}
      >
        {text} <BsArrowDown />
      </button>
    </div>
  );
};

export default Button;
