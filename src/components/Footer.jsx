import { Link } from "react-router-dom";
import { servicelinks, socials, training } from "../constants";

const Footer = () => {
  return (
    <footer className="-mt-3 bg-black pb-[35px]">
      <div className="section">
        <div className="flex md:flex-row justify-between flex-col ">
          <div className="md:w-[30%] w-[100%] pt-10  flex  flex-col gap-7  px-2 md:px-0">
            <div className="text-Ash">
              <h2 className="text-[25px]">Contacts</h2>
              <p>Zone 7, Capital Area,</p>
              <p>Behind Capital Hotel, Osun, Nigeria.</p>
              <p> Nigeria tel: +234(0) 813 432 4983</p>
              <p> Mail: olamitobitechnologies@gmail.com</p>
            </div>

            <div className="">
              <ul className="flex  justify-between">
                {socials.map((social) => (
                  <li
                    key={social.id}
                    className="border-2 border-Ash hover:bg-Blue hover:text-white text-Blue text-[30px]  rounded-full p-2"
                  >
                    <Link to={social.url}>{social.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* left item start */}
          <div className=" md:w-[50%] w-[100%] pt-10 ">
            <div className="  md:pl-[78px] ">
              {/* service list */}
              <div className=" w-full md:w-40% md:mt-0 mt-5 flex flex-wrap gap-x-20">
                <div>
                  <h2 className="text-[20px] font-bold text-Ash">Services</h2>
                  <ul className="mt-5 list-disc">
                    {servicelinks.map((link) => (
                      <li
                        key={link.id}
                        className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash marker`}
                      >
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 sm:mt-0">
                  <h2 className="text-[20px] font-bold text-Ash">Training</h2>
                  <ul className="mt-5 list-disc">
                    {training.map((link) => (
                      <li
                        key={link.id}
                        className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash marker`}
                      >
                        <Link to={link.url}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* end of service list */}
            </div>
          </div>
          {/* left item end */}
        </div>

        <div className="pt-10">
          <div className="border-t border-Ash pt-3">
            <p className="text-Ash">
              Copyright © 2024 OlamiTobi Technologies. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
