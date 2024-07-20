import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { image, links, servicelinks, training } from "../constants";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import Button from "./Button";

const containerVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  // ? Mouse over effect start //
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };
  // ? Mouse over effect ends //

  // scroll effect
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20  ${
        active ? "shadow-lg bg-Dark4 " : "bg-white"
      }`}
    >
      <div className=" section">
        <div
          className={`py-2 md:py-0 flex justify-between items-center  w-full ${
            active ? "" : ""
          }`}
        >
          <Link to="/">
            <img
              src={image.logo}
              alt="logo-icon"
              className="sm:w-[160px] w-[200px] md:w-[295px]  cursor-pointer object-cover "
            />
          </Link>

          <div className=" hidden lg:flex justify-evenly  w-1/2 ">
            <div className="flex gap-x-5 lg:h-[85px] h-[55px] justify-center items-center  ">
              <ul className="list-none lg:flex hidden justify-end items-center h-full">
                {links.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer h-full ${
                      index === links.length - 1 ? "mr-0" : "mr-7"
                    }`}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                  >
                    <Link
                      to={nav.url}
                      className={`text-black h-full flex flex-col justify-center items-center link text-[17px] font-semibold transition-colors duration-300 ${
                        active ? "text-white" : ""
                      }`}
                    >
                      {nav.text}
                    </Link>
                    {nav.text === "Services" && hoveredIndex === index && (
                      <div className="services-hover-content">
                        <div className="w-full px-7 py-5  ">
                          <div className="  ">
                            <ul>
                              {servicelinks.map((link, index) => (
                                <li
                                  key={link.id}
                                  className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash ${
                                    index === 4 ? "mb-0" : ""
                                  } `}
                                >
                                  <Link to={link.url}>{link.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {nav.text === "Training" && hoveredIndex === index && (
                      <div className="training-hover-content">
                        <div className="w-full px-7 py-5  ">
                          <div className="  ">
                            <ul>
                              {training.map((link, index) => (
                                <li
                                  key={link.id}
                                  className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash ${
                                    index === 4 ? "mb-0" : ""
                                  } `}
                                >
                                  <Link to={link.url}>{link.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center  gap-[20px]">
              <Button
                text={"Let's Talk "}
                styles={`
                    border-2 border-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-max text-center text-white ${
                      active ? "" : "bg-Blue"
                    }`}
              />
            </div>
          </div>

          {/* mobile navbar */}

          <div className="lg:hidden flex  justify-end items-center">
            {toggle ? (
              <AiOutlineClose
                alt="menu-icon"
                className={`w-[38px]  h-[38px] object-contain ${
                  active ? "text-white" : ""
                }`}
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                alt="menu-icon"
                className={`w-[38px]  h-[38px] object-contain ${
                  active ? "text-white" : ""
                }`}
                onClick={() => setToggle((prev) => !prev)}
              />
            )}

            {toggle && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`${
                  toggle ? "block" : "hidden"
                } bg-white p-3 bg-DarkBlueMb z-50 absolute top-[55px] left-0 right-0  w-full `}
              >
                <MobileNav setToggle={setToggle} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
