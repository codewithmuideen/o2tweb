import Marquee from "react-fast-marquee";
import {
  DataBC,
  DataBC2,
  DataDC,
  DataMC,
  DataPC,
  DataWC,
  image,
  webDevStack,
} from "../constants";

const DataEngineering = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left text-center section px-2 md:px-0   absolute top-[60%]  sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] flex items-center">
              <h1 className="md:text-[60px] text-[30px] sm:leading-[74px]  font-bold">
                Data Engineering Services
              </h1>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] sm:w-[48%] w-[100%] flex items-center">
              <p className="text-[20px] font-semibold leading-[35px]">
                Accelerate generation and adoption of actionable insights
                through mature data platforms leveraging our data engineering
                solutions and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="sm:pt-[140px] pt-[50px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className=" sm:text-[45px] text-[25px] font-bold leading-[40px] sm:leading-[75px]">
                Why Data Engineering?
              </h2>
              <img
                src={image.dataengineering}
                alt=""
                className="w-[100px] sm:hidden block"
              />
            </div>

            <div className="sm:w-[49%] w-[100%] flex flex-col justify-between items-end">
              <img
                src={image.dataengineering}
                alt=""
                className="w-[120px] sm:block hidden mb-2"
              />
              <hr className="  border-black md:w-[95%] sm:w-[80%] w-[100%] " />
            </div>
          </div>

          <div className="flex justify-between gap-y-9 sm:gap-y-0 sm:flex-row flex-col sm:pt-[100px] pt-[30px]">
            <div className="md:w-[50%] w-[100%]  sm:pr-[20px]  ">
              <img src={image.Data_engineering} alt="" />
            </div>

            <div className="md:pr-[43px] sm:w-[50%] w-[100%]">
              <p className="text-[20px] leading-[35px] font-medium">
                Most enterprises are struggling to deliver timely insights for a
                wide range of reasons, some of which include multiple data
                platforms, lack of data trust, limited knowledgeMenu 7 about the
                data, and inadequate compute resources. Data platforms form the
                foundation for delivering quality insights to the consumers.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[16px] font-bold leading-[25px] mb-5">
                  Without robust data engineering services, insights generation
                  and last mile adoption of insights remain a pipe dream for
                  today’s business executives. Tredence’s data engineering
                  offerings include Advisory, Implementation and Operate
                  services with a focus on reducing cost of ownership, avoiding
                  technical debt, and improving longer term sustainability.
                </p>
                <p className="text-[14px] font-Lato leading-[22px]">
                  Tredence’s proprietary digital accelerators along with our
                  cloud data modernization & migration and data engineering
                  services are proven to reduce time to value significantly for
                  our clients in operationalizing modern data platforms on the
                  cloud. Our digital accelerators cover all aspects of data
                  operations, which include ingesting data from many data
                  sources, provisioning the data or insights, intelligent
                  catalog, data quality and trust, testing and deployment.
                  Accelerate your data efforts with our AL/ML based digital
                  accelerators and strategic partnerships to keep up with the
                  scale, speed and value that today’s business environment
                  demands.
                </p>

                <button className="bg-Blue py-3 px-8 uppercase text-white1 w-fit mt-3">
                  Make your data reliable now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* service we've provided */}
        <section className="pt-[50px]">
          <div className="flex justify-around items-center sm:flex-row flex-col ">
            <div className="sm:w-[20%] w-full">
              <img
                src={image.BigData}
                alt="client_Bg"
                className="w-full  rounded-lg object-cover"
              />
            </div>
            <div className="sm:w-[50%] w-full sm:mt-0 mt-7">
              <h2 className=" text-[25px] sm:text-[30px] font-semibold leading">
                Big Data Storage
              </h2>
              <p className="text-[20px] font-normal leading-[25px] py-3">
                Store, manage, and retrieve massive amounts of data.
              </p>

              <span>
                Big Data is, by definition, massive. And storing and accessing
                this data efficiently is often a massive challenge for
                organizations.
              </span>
              <span>
                DQ. team has a deep understanding of all the various Big Data
                Storage challenges. We also have vast experience in helping
                businesses to optimize Big Data Storage technologies and
                processes to allow all types of data – big or otherwise – to be
                turned into valuable insights for accelerated and informed
                decision making
              </span>
            </div>
          </div>

          <div className="mt-[40px]">
            <h2 className="text-[25px] sm:text-[30px] font-semibold">
              Data Pipeline
            </h2>
            <div className="flex sm:flex-row justify-around items-center flex-col pt-5">
              <div className="sm:w-[40%]">
                <img src={image.Dp} alt="" />
              </div>

              <div className=" sm:mt-0 my-7 sm:w-[47%] ">
                <p className="text-[20px] font-medium leading-[25px]">
                  Data Pipelines enable data to flow harmoniously
                </p>

                <p className="mt-2 font-normal  text-[18px]">
                  Dufrain has a strong reputation as experts in building Data
                  Pipelines. We can help you connect valuable data within your
                  business from data source to data warehouse, data lake,
                  analytics platform, or payment processing system.
                </p>
                <p className="mt-2 font-normal  text-[18px]">
                  Building efficient and automated Data Pipelines is arguably
                  the most critical aspect of successful data engineering. Your
                  organisation can benefit from our wealth of experience in
                  delivering intricate and cross-business Data Pipelines, Big
                  Data Pipelines, data integrations, real time streaming, batch
                  and event driven processing, and implementing scalable
                  solutions.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-center text-[25px] font-semibold">
                Data Pipelines bring key benefits
              </h3>

              <div className="w-full flex justify-around flex-wrap gap-y-5  mt-[30px]">
                {DataPC.map((card) => (
                  <div
                    key={card.id}
                    className="sm:w-[22%] w-[100%] sm:mr-5 bg-white1 p-5 rounded-lg border-t-2 border-Blue"
                  >
                    <div>
                      <img src={card.icon} alt="" />
                      <h4 className="pt-4 font-semibold text-[16px]">
                        {card.title}
                      </h4>
                    </div>

                    <p className="pt-4">{card.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <h2 className="text-[25px] sm:text-[30px] font-semibold ">
              Data Migration
            </h2>

            <div className="flex sm:flex-row justify-around items-center flex-col pt-5">
              <div className=" sm:mt-0 mb-7 sm:w-[47%]">
                <p className="text-[20px] font-medium leading-[25px] ">
                  Seamless Data Migration
                </p>

                <p className="mt-2 font-normal  text-[18px]">
                  Your data drives your business. If you are planning to migrate
                  data from one system or environment to another, including the
                  cloud, you need a partner with the right level of expertise.
                </p>
                <p className="mt-2 font-normal  text-[18px]">
                  With a deep understanding of data and the complexities
                  associated with large scale projects, our Data Migration
                  consultants deliver secure, cost-efficient and accurate
                  solutions for clients across a range of industries.
                </p>
              </div>

              <div className="sm:w-[40%]">
                <img src={image.DM} alt="" />
              </div>
            </div>

            <div className="my-10">
              <h3 className="text-center text-[25px] font-semibold">
                Data Migration Framework
              </h3>

              <div className="flex sm:flex-row flex-col gap-y-8 pt-7 items-center ">
                <p className=" sm:text-[20px] px-2   text-[18px] font-normal sm:w-[45%]">
                  We have successfully delivered hundreds of complex Data
                  Migration projects. Our comprehensive process ensures the
                  projects we undertake are on-time, within budget and quality
                  controlled.
                </p>

                <div className="w-full sm:w-[50%] flex flex-wrap justify-around gap-y-3  ">
                  <Marquee>
                    {DataMC.map((card, index) => (
                      <div
                        key={card.id}
                        className={`w-fit h-[180px] p-4 rounded-lg flex flex-col items-center justify-center bg-white mx-5 border-t-2 border-Blue`}
                      >
                        <img src={card.icon} alt="" className="w-[90px]" />
                        <h4 className="pt-4 text-[16px] text-center font-medium">
                          {card.title}
                        </h4>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>

            <div className="bg-white1 pt-5 pb-10 mt-10">
              <div className=" text-black pt-5 pb-10 sm:px-10  mt-6">
                <div className="flex flex-col gap-y-2 px-4">
                  <ul className="list-[square] pl-5">
                    <li className="marker">
                      <h4>THE BENEFITS</h4>
                    </li>
                  </ul>
                  <h2 className="sm:text-2xl text-Blue">
                    Dufrain Data Migration Accelerator
                  </h2>
                  <p>
                    Many data migration projects over-run due to various
                    challenges such as data quality, coding of mapping, and
                    inconsistent transformations. To mitigate these issues, we
                    have developed the Dufrain Data Migration Accelerator
                    (DDMA).
                  </p>
                </div>

                <div className="w-full flex flex-wrap justify-around gap-y-5 mt-[30px]">
                  {DataDC.map((card) => (
                    <div
                      key={card.id}
                      className="sm:w-[30%] w-[100%] sm:px-2 px-1 rounded-lg flex gap-x-4"
                    >
                      <img
                        src={card.icon}
                        alt=""
                        className="sm:w-[170px] w-[200px] "
                      />
                      <div>
                        <h4 className=" font-normal text-[18px] text-yellow-300">
                          {card.title}
                        </h4>
                        <p className="pt-1">{card.paragraph}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px]">
            <h2 className="text-[25px] sm:text-[30px] font-semibold ">
              Data Warehousing
            </h2>

            <div className="flex sm:flex-row justify-around items-center flex-col pt-5">
              <div className="sm:w-[40%]">
                <img src={image.DW2} alt="" />
              </div>

              <div className=" sm:mt-0 my-7 sm:w-[47%]">
                <p className="text-[20px] font-medium leading-[25px] ">
                  What is Data Warehousing?
                </p>

                <p className="mt-2 font-normal  text-[18px] ">
                  Data warehouses combine data from different sources into one
                  central and consistent data store to provide a “single version
                  of the truth”. This aggregated data means organisations can
                  run powerful data analytics and business intelligence to drive
                  better-informed business decisions.
                </p>
                <p className="mt-2 font-normal  text-[18px] ">
                  Our experienced team design and build Data Warehousing
                  solutions that integrate, cleanse and present data for
                  querying.
                </p>
                <p className="mt-2 font-normal  text-[18px] ">
                  Dufrain’s Data Warehouse will enable your organisation to
                  perform reliable analytics on large volumes of historical
                  data. In addition, it can provide storage for petabytes of
                  information.
                </p>
              </div>
            </div>

            <div className="bg-Dark2 text-white1 pt-5 pb-10 mt-[50px] flex justify-around sm:flex-row flex-col items-center gap-y-4 sm:gap-y-0">
              <div className="sm:w-[45%] flex flex-col gap-y-5 px-4 sm:px-0">
                <h3 className="text-[35px] font-semibold text-Blue">
                  Your business <br /> Data is disparate
                </h3>

                <div className="">
                  <p className=" sm:text-[18px] text-[16px] font-normal ">
                    Each area of your organisation is unique and different
                    departments interact in different ways. This creates
                    inconsistencies and data complexity, making it difficult to
                    see the big picture across the whole business.
                  </p>
                  <p className=" sm:text-[18px] text-[16px] font-normal  mt-2">
                    Our Data Warehousing combines data from all departments into
                    one consistent system. We can help you to run advanced data
                    analytics and business intelligence across your entire
                    organisation.
                  </p>
                </div>
              </div>

              <div className="w-full  sm:w-[45%] ">
                {/* {DataWC.map((card) => (
                  <div
                    key={card.id}
                    className="sm:w-[20%] w-[45%]  p-2 rounded-lg flex flex-col items-center justify-center "
                  >
                    <img src={card.icon} alt="" />
                    <h4 className="pt-4 font-normal text-[18px] text-center text-yellow-300">
                      {card.title}
                    </h4>
                  </div>
                ))} */}

                <div className="flex justify-around">
                  <div className=" text-center">
                    <img src={image.Finance} alt="" />
                    <p>Finance</p>
                  </div>
                  <div className=" text-center">
                    <img src={image.HR} alt="" />
                    <p>HR</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className=" text-center">
                    <img src={image.Operations} alt="" />
                    <p>Operations</p>
                  </div>
                </div>
                <div className="flex justify-around">
                  <div className=" text-center">
                    <img src={image.MS} alt="" />
                    <p>Marketing & Sales</p>
                  </div>
                  <div className=" text-center">
                    <img src={image.RD} alt="" />
                    <p>R&D</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-black mt-12 pt-5 pb-10  ">
              <div className="flex flex-col gap-y-2  px-4">
                <ul className="list-[square] pl-5">
                  <li className="marker">
                    <h4>THE BENEFITS</h4>
                  </li>
                </ul>
                <h2 className="sm:text-2xl text-Blue">
                  Process and key business benefits
                </h2>
              </div>

              <div className="w-full flex flex-col sm:gap-y-12 gap-y-6 pt-10 ">
                <div className=" flex justify-between flex-wrap gap-y-4   ">
                  {DataBC.map((card) => (
                    <div
                      key={card.id}
                      className="p-4 w-[100%] sm:w-[32%] flex flex-col gap-y-3 border-Blue border-t-[3px] bg-white"
                    >
                      <div>
                        <img src={card.icon} alt="" className={`w-[90px]`} />
                        <h4 className=" font-medium text-[18px] mt-4">
                          {card.title}
                        </h4>
                      </div>
                      <hr className="border-yellow-200  w-24" />
                      <p className="pt-1">{card.paragraph}</p>
                    </div>
                  ))}
                </div>
                {/* <div className="w-[30%] h-[250px] border">
                  <img src={image.DW} alt="" className="w-full h-full" />
                </div> */}
                <div className=" flex justify-between  flex-wrap gap-y-4   ">
                  {DataBC2.map((card, index) => (
                    <div
                      key={card.id}
                      className="p-4 w-[100%] sm:w-[32%] flex flex-col gap-y-3 border-Yellow border-t-[3px] bg-white"
                    >
                      <div>
                        <img
                          src={card.icon}
                          alt=""
                          className={`${
                            index === 1 ? "w-[105px]" : "w-[90px]"
                          }`}
                        />
                        <h4 className=" font-medium text-[18px] mt-4">
                          {card.title}
                        </h4>
                      </div>
                      <hr className="border-Blue  w-24" />
                      <p className="pt-1">{card.paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service we provided end */}

        {/* tech stack */}
        <div className="py-[50px]">
          <div className="text-center sm:w-[70%] mx-auto">
            <h3 className="sm:text-[43px] text-[25px] ">
              Our Tech Stack For Data Engineering
            </h3>
            <p>
              We leverage our skills to utilize cutting-edge data engineering
              tools and technologies to provide high-quality data engineering
              services.
            </p>
          </div>

          <div className="mt-[50px] mx-auto w-full ">
            <ul className="flex flex-wrap justify-center items-center sm:justify-normal sm:gap-x-2 sm:pl-1">
              <Marquee pauseOnHover={true}>
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
          <div className="mt-[50px] mx-auto w-full ">
            <ul className="flex flex-wrap justify-center items-center sm:justify-normal sm:gap-x-2 sm:pl-1">
              <Marquee direction="right" pauseOnHover={true}>
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
      </section>
    </section>
  );
};

export default DataEngineering;
