import DAFaqs from "../components/DAFaqs";
import { DAfaqs, image, webDevStack } from "../constants";
import { AiFillCaretRight } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const DataAnalysis = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center px-2 md:px-0 absolute section top-[60%] sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between items-center sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] ">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                100% Analytics 0% Drama
              </h1>
              <div className="pt-[70px] sm:block hidden"></div>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] ">
              <p className="text-[20px] font-medium leading-[35px]">
                Advance analytics platform for{" "}
                <span className="font-bold">enterprise data teams</span>
              </p>

              <div className=" pt-[48px]">
                <div className="flex flex-col sm:justify-start justify-center items-center sm:items-start gap-y-3">
                  <p>See it in action</p>
                  <div className="  flex ">
                    <input
                      type="email"
                      placeholder="Work email*"
                      className=" text-black w-[280px] py-2 px-5 rounded-full focus:outline-none"
                    />
                    <span className="text-2xl bg-orange-600 px-2 flex justify-center items-center -ml-10 rounded-r-full">
                      <AiFillCaretRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sm:pt-[140px] pt-[50px]  ">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex justify-between">
              <h2 className=" sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                Why Data Analysis?
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

          <div className="flex justify-between gap-y-9 sm:gap-y-0 sm:flex-row flex-col sm:pt-[100px] pt-[30px]">
            <div className="md:w-[45%] w-[100%] md:pr-[100px] sm:pr-[20px]  ">
              <img src={image.Data_analysis} alt="" />
            </div>

            <div className="md:pr-[43px] sm:w-[60%] w-[100%]">
              <p className="text-[20px] leading-[35px] font-semibold">
                Advanced analytics{" "}
                <span className="font-normal">
                  on the enterprise scale with
                </span>{" "}
                zero backlog
              </p>

              <div className="sm:pt-[40px] pt-[20px]">
                <p className="font-Lato text-[16px] font-medium leading-[25px] mb-5">
                  Solve complex analytic challenges while responding quicker to
                  business demands.
                </p>
                <ul className="text-[16px] font-Lato leading-[22px] font-medium list-[square] pl-4">
                  <li className="pl-2 marker">End-to-end solution</li>
                  <li className="pl-2 marker">Modern architecture</li>
                  <li className="pl-2 marker">Advanced metrics store</li>
                  <li className="pl-2 marker">Complete analytics catalog</li>
                  <li className="pl-2 marker">Granular data governance</li>
                  <li className="pl-2 marker">Flexible deployment</li>
                  <li className="pl-2 marker">True self-service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* service we've provided */}
        <div className="pt-[50px]">
          <div className="flex justify-between flex-wrap gap-y-8">
            <div className="sm:w-[47%] flex flex-col gap-y-4 sm:mt-16">
              <h2 className="font-semibold text-xl">
                Explore Our Data Analysis Services
              </h2>
              <p className="font-medium">
                Leverage our{" "}
                <span className="font-semibold">data analysis services</span> to
                make effective use of data. We can help you collect, store,
                cleanse, visualize, analyze and explore large datasets to
                unearth hidden patterns and meaningful insights.
              </p>

              <button className="bg-Blue py-3 px-8 uppercase text-white1 w-fit">
                Technical stack
              </button>
            </div>

            <div className="sm:w-1/2">
              {DAfaqs.map((faq) => {
                return <DAFaqs key={faq.id} {...faq} />;
              })}
            </div>
          </div>
        </div>
        {/* service we provided end */}

        {/* tech stack */}
        <div className="py-[50px]">
          <div className="text-center sm:w-[70%] mx-auto">
            <h3 className="sm:text-[43px] text-[25px] ">
              Our Tech Stack For Data Analysis
            </h3>
            <p>
              We leverage our skills to utilize cutting-edge data analysis tools
              and technologies to provide high-quality data analysis services.
            </p>
          </div>

          <div className="mt-[30px] flex items-center justify-between flex-wrap">
            <h4 className="font-medium text-[25px]">Database</h4>
            <ul className="flex  justify-center items-center sm:justify-normal sm:w-[70%]">
              <Marquee>
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
              </Marquee>
            </ul>
          </div>

          <div className="mt-[30px] flex items-center justify-between flex-wrap">
            <h4 className="font-medium text-[25px]">Programming Language</h4>
            <ul className="flex  justify-center items-center sm:justify-normal sm:w-[70%]">
              <Marquee>
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
              </Marquee>
            </ul>
          </div>

          <div className="mt-[30px] flex items-center justify-between flex-wrap">
            <h4 className="font-medium text-[25px]">Data Analysis Tools</h4>
            <ul className="flex  justify-center items-center sm:justify-normal sm:w-[70%]">
              <Marquee>
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
              </Marquee>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis;
