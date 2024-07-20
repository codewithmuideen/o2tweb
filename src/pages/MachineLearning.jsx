import { MLStack, MachineWC, image } from "../constants";
import Button from "../components/Button";

const MachineLearning = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center section px-2 md:px-0 absolute top-[60%] sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row sm:items-center flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                Machine Learning Services
              </h1>
              <div className="pt-[70px] sm:block hidden">
                <Button
                  text={"CONTACT US "}
                  styles={
                    " border-2 border-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-max text-center text-white "
                  }
                />
              </div>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] ">
              <p className="text-[20px] leading-[35px] font-medium">
                Machine Learning is based on creating autonomous self-learning
                workflows which can be adopted in many different scenarios
                within organisations to create recommendations, sense demand,
                predict maintenance and performance outcomes, assess product
                affinity, conduct matching and anomaly detection to name a few.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-10">
        {/* service we've provided */}
        <div className="mb-[30px]">
          <h3 className="sm:text-[45px] text-[25px] text-center">WHAT WE DO</h3>
          <div className="w-full flex justify-around flex-wrap gap-y-10 mt-[70px]">
            {MachineWC.map((card) => (
              <div
                key={card.id}
                className="sm:w-[22%] w-[100%] sm:mr-5 bg-white1 p-5 rounded-lg flex flex-col items-center justify-center text-center border-t-2 border-yellow-300"
              >
                <img src={card.icon} alt="" />
                <p className="pt-4">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        {/* service we provided end */}

        {/* tech stack */}
        <div className="pb-[80px]">
          <div className="text-center sm:w-[80%] mx-auto">
            <h3 className="sm:text-[43px] text-[25px] ">
              We can help you with industry-specific AI ML solutions using
              top-notch tools and technologies.
            </h3>
          </div>

          <div className="mt-[50px]">
            <ul className="flex flex-wrap justify-center items-center sm:justify-normal">
              {MLStack.map((card) => (
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

export default MachineLearning;
