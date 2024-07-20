import { image, webDevStack } from "../constants";
import Button from "../components/Button";
import DevSOCard from "../components/DevSOCard";

const DevSecOps = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center  px-2 md:px-0 section top-[60%] absolute sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row sm:items-center flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[60px] uppercase text-[30px] sm:leading-[74px]  font-bold">
                DevSecOps Platform
              </h1>
              <span className="pt-[70px] sm:block hidden">
                <Button
                  text={"Download Product sheet"}
                  styles={
                    " border-2 border-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-max text-center text-white "
                  }
                />
              </span>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] flex items-center justify-center">
              <p className="text-[20px] font-semibold leading-[35px]">
                Align your DevOps with government security standards for a
                clearer path to software accreditation and resiliency on game
                warden
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sm:pt-[140px] pt-[50px] pb-[100px]">
          <div className="flex sm:flex-row flex-col justify-between gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[50px] sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                Why DevSecOps?
              </h2>
              <img
                src={image.webdevelopment}
                alt=""
                className="w-[100px] sm:hidden block"
              />
            </div>

            <div className="sm:w-[49%] w-[100%] flex flex-col justify-between items-end">
              <img
                src={image.webdevelopment}
                alt=""
                className="w-[133px] sm:block hidden"
              />
              <hr className="  border-black md:w-[95%] sm:w-[80%] w-[100%] " />
            </div>
          </div>

          <div className="flex justify-between items-center gap-y-9 sm:gap-y-0 sm:flex-row flex-col sm:pt-[100px] pt-[30px]">
            <div className="md:w-[45%] w-[100%] md:pr-[100px] sm:pr-[20px]  ">
              <img src={image.DevSecOps} alt="" />
            </div>

            <div className="md:pr-[43px] sm:w-[60%] w-[100%]">
              <p className="text-[20px] leading-[35px] font-medium">
                Streamline your software delivery and deployment with a reliable
                DevSecOps engineering partner by your side. We will help you
                reinvent your development processes with an efficient production
                infrastructure and productive collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* service we've provided */}
        <div className="pb-[100px]">
          <DevSOCard />
        </div>
        {/* service we provided end */}

        {/* tech stack */}
        <div className="pb-[80px]">
          <div className="flex justify-between items-end w-[100%] ">
            <h2 className="sm:text-[40px] text-[25px] sm:leading-[75px] leading-[25px] font-bold w-[85%] sm:w-[70%] ">
              Our DevSecOps tech stack
            </h2>

            <hr className="  border-black sm:w-[45%] w-[15%] " />
          </div>

          <div className="mt-[50px]">
            <ul className="flex flex-wrap justify-center items-center sm:justify-normal">
              {webDevStack.map((card) => (
                <li
                  key={card.id}
                  className="py-[15px] px-[10px] sm:w-[150px]  w-[100px]  "
                >
                  <div className="flex items-center justify-center flex-col">
                    <img src={card.icon} alt="" className=" w-[50px]" />
                    <p className="text-[14px] font-Lato capitalize font-semibold">
                      {card.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSecOps;
