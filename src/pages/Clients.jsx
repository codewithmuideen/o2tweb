import { image, numbers, numbers2 } from "../constants";
import ClientM from "../components/ClientM";

const Clients = () => {
  return (
    <section className="mt-5 ">
      <div className="section ">
        <div className="flex flex-col">
          <div className="flex justify-between items-center sm:flex-row flex-col ">
            <div className="sm:w-[45%] w-full">
              <img
                src={image.client}
                alt="client_Bg"
                className="w-full  rounded-lg object-cover"
              />
            </div>
            <div className="sm:w-[50%] w-full">
              <p className="text-[18px] leading-8">
                At OlamiTobi Technolgies, we understand that selecting the right partner
                for your technology, data, and development needs is a critical
                decision. With a plethora of options available, it&apos;s
                essential to know why OlamiTobi Technologies should be your top choice. OlamiTobi Technologies stands out as the ideal partner for your
                technology, data, and development needs due to our expertise,
                customization, data-driven approach, scalability, commitment to
                quality, and client-centric approach. We are dedicated to
                helping your business thrive through innovative and
                cost-effective solutions.
              </p>
            </div>
          </div>

          {/*section of numbers */}
          <div className="flex justify-between mt-20 gap-5">
            <div className="flex gap-3 md:pl-5 w-[100%] md:w-[70%] ">
              <ul className="w-[50%]">
                {numbers.map((card, index) => (
                  <li
                    key={card.id}
                    className={`w-[100%] pl-[10px] ${
                      index === 1 ? "" : ""
                    } border-b border-gray-300`}
                  >
                    <div className="h-[175px] md:h-[120px] flex flex-col justify-between ">
                      <div className=" h-[90%]">
                        <p
                          className={`font-bold md:text-[30px] text-[25px] leading-[54px] ${
                            index === 2 ? "md:mt-[5px]" : ""
                          }`}
                        >
                          {card.title}
                        </p>
                        <span
                          className={`text-[16px] ${index === 2 ? "" : ""}`}
                        >
                          {card.span}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="w-[50%]">
                {numbers2.map((card, index) => (
                  <li
                    key={card.id}
                    className={`pl-[10px] w-[100%] ${
                      index === 1 ? "" : ""
                    } border-b border-gray-300`}
                  >
                    <div className="h-[175px] md:h-[120px] flex flex-col justify-between ">
                      <div className=" h-[90%]">
                        <p className="font-bold md:text-[30px] text-[25px] leading-[54px]">
                          {card.title}
                        </p>
                        <span className="text-[16px] ">{card.span}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:block hidden w-[592.872px] h-[491.577px] ">
              <img src={image.client2} alt="" />
            </div>
          </div>

          {/* section of company featured */}
          <div className="md:-mt-[100px] mt-[40px]">
            <div className=" pt-[52px] pb-[40px] lg:px-[20px] px-[10px] rounded-lg w-[95%] mx-auto flex flex-col items-center bg-white1">
              <div className="pb-[40px]">
                <h2 className=" font-bold text-[22px] leading-8 text-center">
                  Clients & Partners
                </h2>
              </div>
              <div>
                <ClientM />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
