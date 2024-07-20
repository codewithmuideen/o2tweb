import { Link } from "react-router-dom";
import { servicelinks, training } from "../constants";
import Button from "./Button";

const MobileNav = ({ setToggle }) => {
  return (
    <section>
      <div>
        <h2 className="text-[20px] font-bold text-Ash">Services</h2>
        <ul className="mt-2 list-disc">
          {servicelinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setToggle((prev) => !prev)}
              className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash marker`}
            >
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-4">
        <h2 className="text-[20px] font-bold text-Ash">Training</h2>
        <ul className="mt-2 list-disc">
          {training.map((link) => (
            <li
              key={link.id}
              onClick={() => setToggle((prev) => !prev)}
              className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash marker`}
            >
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-6">
        <Link
          to={"/contact"}
          className="text-[20px] font-bold text-Ash"
          onClick={() => setToggle((prev) => !prev)}
        >
          Contact Us
        </Link>
      </div>

      <Button
        text={"Let's Talk "}
        styles={`
                    border-2 border-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-full text-center text-black mb-4`}
      />
    </section>
  );
};

export default MobileNav;

// font-poppins font-semibold cursor-pointer text-[18px] w-full mb-4 border-b-[1px] border-Dark pb-4
