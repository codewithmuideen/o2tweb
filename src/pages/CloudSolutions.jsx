import { CloudBC, CloudSC, image } from "../constants";
import { IoCheckmark } from "react-icons/io5";
import CloudDesignSlider from "../utils/CloudDesignSlider";

const CloudSolutions = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center  px-2 md:px-0 absolute section top-[60%] sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:items-center sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                Cloud Solutions Services
              </h1>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] ">
              <p className="text-[20px] font-semibold leading-[35px]">
                Created for the latest demanding workloads, Hypertec Cloud
                offers a mix of cloud instances, bare metal servers, block
                storage, object storage and multiple other cloud services to
                help you run your infrastructure more efficiently at a balanced
                price point.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        {/* service we've provide */}
        <div className="my-8 ">
          <div className="flex sm:flex-row flex-col gap-y-5 justify-around sm:items-center">
            <div className="sm:w-[40%] w-[100%]">
              <img src={image.CAS} alt="" className="w-full rounded-lg" />
            </div>

            <div className="sm:w-[40%] w-[90%]">
              <h3 className=" text-[32px] leading-[40px]">
                Cloud Architecture Services We Provide
              </h3>
              <p className="mt-5">
                IT Outpost&apos;s expert team diagnoses, explores, designs and
                creates plans, provides cloud deployment and federation
                services. The architecture of cloud services fulfills the basic
                requirements of the business and builds them for the necessary
                solutions.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-around flex-wrap gap-y-10 mt-[70px]">
            {CloudSC.map((card) => (
              <div
                key={card.id}
                className="sm:w-[24%] w-[100%] sm:mr-3 bg-white1 p-5 rounded-lg border-t-2 border-Blue"
              >
                <div>
                  <img src={card.icon} alt="" />
                  <h4 className="pt-4 font-semibold text-[18px]">
                    {card.title}
                  </h4>
                </div>

                <p className="pt-4">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
        {/* service we provide end */}

        {/* cloud design stage */}
        <div className="my-8 ">
          <div className="flex sm:flex-row flex-col gap-y-5 justify-around sm:items-center">
            <div className="sm:w-[40%] w-[90%]">
              <h3 className=" text-[32px]  leading-[40px]">
                Our Cloud Architecture Design Stages
              </h3>
              <p className="mt-5">
                At IT Outposts, we offer full-cycle cloud computing architecture
                services tailored to your goals and needs. Based on workflows
                elaborated in the active field operation, we can put the best
                practices combined with our own expertise at the core of your
                projects.
              </p>
            </div>

            <div className="sm:w-[40%] w-[100%]">
              <img src={image.CADS} alt="" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="mt-3">
            <CloudDesignSlider />
          </div>
        </div>
        {/* cloud design stage end */}

        {/* benefits of cloud service */}
        <div>
          <h3 className="sm:text-[45px] text-[25px] text-center">
            Benefits of Our Cloud Design Services
          </h3>
          <div className="my-8 flex justify-around flex-wrap gap-y-5">
            {CloudBC.map((card) => (
              <div
                key={card.id}
                className="sm:w-[40%] w-[100%] sm:mr-7 sm:py-8 sm:px-5 rounded-lg flex gap-x-3"
              >
                <span className="bg-yellow-300 rounded-full w-fit h-fit p-3 text-3xl text-Blue">
                  <IoCheckmark />
                </span>
                <div>
                  <h4 className="font-semibold text-xl">{card.title}</h4>
                  <p className="pt-4">{card.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* benefits of cloud service end */}
      </div>
    </section>
  );
};

export default CloudSolutions;
