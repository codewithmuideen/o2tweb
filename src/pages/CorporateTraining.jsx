import { image } from "../constants";
import Button from "../components/Button";

const CorporateTraining = () => {
  return (
    <section className="bg-Footer ">
      <div className=" section__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white sm:text-left  px-2 md:px-0 absolute section top-[35%] sm:top-[58%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  ">
          <div className="flex justify-between sm:flex-row flex-col gap-y-6 sm:gap-y-0">
            <div className="sm:pt-[50px] sm:w-[47%] w-[100%] sm:pl-0 pl-[10px] ">
              <h1 className="md:text-[40px] text-[25px] sm:leading-[74px]  font-bold">
                Corporate Trainings : Fueling Innovation through Learning
              </h1>
              <div className="pt-[70px] sm:block hidden">
                <Button
                  text={"CONTACT US "}
                  styles={
                    " bg-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-[150px] text-center text-white "
                  }
                />
              </div>
            </div>

            <div className="sm:block hidden">
              <img src={image.mouse2} alt="" />
            </div>

            <div className="sm:pt-[50px] sm:pl-[20px] pl-[10px] sm:w-[48%] w-[100%] ">
              <p className="text-[17px] font-semibold sm:leading-[35px] leading-[29px]">
                Corporate training programs are a strategic investment that
                empowers employees, enhances organizational capabilities, and
                contributes to long-term success.
              </p>
              <p className="pt-[24px] text-[17px] font-Lato font-semibold leading-[35px] sm:block hidden ">
                In the fast-paced world of technology, one-size-fits-all
                training doesn&apos;t work. Effective corporate training in tech
                involves a meticulous assessment of the company&apos;s goals,
                the specific tech skills required, and the latest industry
                trends.
              </p>

              <div className="sm:block hidden pt-[48px]">
                <div className="flex gap-3">
                  <img
                    src={image.webdevpic}
                    alt=""
                    className="rounded-full w-[53px]"
                  />
                  <div>
                    <p className="text-Blue">AKINROYE MUIDEEEN</p>
                    <span>Director of Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="sm:pt-[140px] pt-[50px] sm:pb-[100px] pb-[50px]">
          <div className="flex sm:flex-row flex-col gap-y-8 sm:gap-y-0">
            <div className="flex gap-3">
              <h2 className="md:text-[48px] sm:text-[40px] text-[25px] font-bold leading-[40px] sm:leading-[55px]">
                Overview of Corporate Training Programs
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
              <img src={image.endT} alt="" />
            </div>

            <div className="md:pr-[43px] sm:w-[60%] w-[100%]">
              <p className="text-[20px] leading-[35px] font-medium">
                Corporate training programs are systematic initiatives designed
                to enhance the knowledge, skills, and capabilities of employees
                within an organization. These programs are tailored to meet
                specific organizational goals and needs, promoting growth,
                productivity, and adaptability.
              </p>

              <div className="pt-[40px]">
                <p className="font-Lato text-[18px]  leading-[25px] mb-5">
                  In the technology industry, staying at the forefront of
                  innovation is essential for success. Corporate training
                  programs in tech are strategic initiatives aimed at enhancing
                  the skills and expertise of employees to keep up with rapid
                  advancements. These programs are uniquely designed to address
                  the dynamic challenges and opportunities within the tech
                  sector.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* benefits of coaching */}
        <div className="sm:pb-[100px] pb-[50px]">
          <div className="flex">
            <div className="sm:w-[58%] w-[100%]">
              <h2 className="sm:text-[35px] text-[30px] font-bold sm:leading-[43px] leading-[40px]">
                Types of Corporate Training
              </h2>
              <p className="text-[20px] font-medium leading-[35px] mt-2">
                Corporate training encompasses a wide array of areas, including:
              </p>

              <div className="pt-5 pl-8 ">
                <ul className="list-disc">
                  <li className="text-[20px] font-semibold mb-3 marker_yellow">
                    Leadership Training:{" "}
                    <span className="text-[18px] font-normal">
                      Developing leadership skills to inspire and guide teams
                      effectively.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3 marker_yellow">
                    Communication Training:{" "}
                    <span className="text-[18px] font-normal">
                      Enhancing communication skills for effective collaboration
                      and client interactions.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3 marker_yellow ">
                    Technical and Skills Training:{" "}
                    <span className="text-[18px] font-normal">
                      Providing employees with the technical skills required for
                      their roles.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold marker_yellow">
                    Compliance and Ethics Training:{" "}
                    <span className="text-[18px] font-normal">
                      Ensuring adherence to legal and ethical standards.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-[40%] pl-[40px] sm:block hidden ">
              <img src={image.consultT} alt="" />
            </div>
          </div>
        </div>

        {/* benefits of mentoring */}
        <div className="pb-[50px]">
          <div className="flex">
            <div className="w-[40%] pr-[40px] sm:block hidden ">
              <img src={image.endT} alt="" />
            </div>
            <div className="sm:w-[58%] w-[100%]">
              <h2 className="sm:text-[35px] text-[27px] font-bold sm:leading-[43px] leading-[40px]">
                Benefits of Corporate Training for Organizations
              </h2>
              <p className="text-[20px] font-medium leading-[35px] mt-2">
                Investing in corporate training offers numerous advantages to
                organizations, including:
              </p>

              <div className="pt-5 pl-8 ">
                <ul className=" list-disc">
                  <li className="text-[20px] font-semibold mb-3 marker_yellow">
                    Enhanced Employee Performance:{" "}
                    <span className="text-[18px] font-normal">
                      Training equips employees with the skills needed to excel
                      in their roles.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3 marker_yellow">
                    Improved Employee Engagement:{" "}
                    <span className="text-[18px] font-normal">
                      Training programs show employees that their development is
                      valued.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold mb-3 marker_yellow">
                    Talent Retention:{" "}
                    <span className="text-[18px] font-normal">
                      Investing in employee growth encourages them to stay with
                      the company.
                    </span>
                  </li>
                  <li className="text-[20px] font-semibold marker_yellow">
                    Increased Efficiency:{" "}
                    <span className="text-[18px] font-normal">
                      Well-trained employees work more efficiently, saving time
                      and resources.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* when to choose */}
      <div className=" bg-black py-5 text-white mb-5">
        <div className="section flex justify-between sm:flex-row flex-col sm:gap-y-0 gap-y-4">
          <div className="sm:w-[45%] w-[100%] ">
            <div>
              <h2 className="sm:text-[30px] text-[27px] font-bold sm:leading-[45px] leading-[40px]">
                Measuring the Effectiveness of Corporate Training
              </h2>
              <p className="text-[21px] font-medium leading-[35px] mt-2">
                Measuring the effectiveness of corporate training involves:
              </p>
            </div>

            <div className="pt-5 pl-5">
              <ul className="list-disc">
                <li className="text-[19px] font-semibold marker  mb-3 pl-2">
                  Assessment and Evaluation:{" "}
                  <span className="text-[17px] font-normal">
                    Conduct assessments to gauge knowledge retention and
                    evaluate skill development.
                  </span>
                </li>
                <li className="text-[19px] font-semibold marker  mb-3 pl-2">
                  Feedback Surveys:{" "}
                  <span className="text-[17px] font-normal">
                    Collect feedback from employees to understand their
                    perception of the training’s impact.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:block hidden">
            <img src={image.mouse2} alt="" />
          </div>

          {/* when to choose mentoring */}
          <div className="sm:w-[45%] w-[100%] ">
            <div>
              <h2 className="sm:text-[30px] text-[27px] font-bold sm:leading-[45px] leading-[40px]">
                Steps to Implementing a Corporate Training Program
              </h2>
              <p className="text-[21px] font-medium leading-[35px] mt-2">
                Steps to follow when implementing a corporate training program
              </p>
            </div>

            <div className="pt-5 pl-5">
              <ul className="list-disc">
                <li className="text-[19px] font-semibold marker  mb-3 pl-2">
                  Identify Training Needs:{" "}
                  <span className="text-[17px] font-normal">
                    Conduct assessments to gauge knowledge retention and
                    evaluate skill development.
                  </span>
                </li>
                <li className="text-[19px] font-semibold marker  mb-3 pl-2">
                  Feedback Surveys:{" "}
                  <span className="text-[17px] font-normal">
                    Collect feedback from employees to understand their
                    perception of the training’s impact.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How to Get Started with Coaching/Mentoring */}
      <div className="py-[50px] section">
        <div className="flex">
          <div className="sm:w-[58%] w-[100%]">
            <h2 className="sm:text-[35px] text-[27px] font-bold sm:leading-[45px] leading-[40px]">
              Successful Corporate Training Case Studies
            </h2>
            <p className="text-[20px] font-medium leading-[35px]">
              Real-life examples of organizations benefiting from corporate
              training:
            </p>

            <div className="pt-5 ">
              <ul className="">
                <li className="text-[20px] font-semibold mb-3">
                  XYZ Corporation:{" "}
                  <span className="text-[18px] font-normal">
                    Increased employee productivity by 20% after implementing
                    leadership training for mid-level managers.
                  </span>
                </li>
                <li className="text-[20px] font-semibold mb-3">
                  ABC Tech:{" "}
                  <span className="text-[18px] font-normal">
                    Reduced customer complaints by 30% by providing customer
                    service training to support teams.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-[40%] pl-[40px] sm:block hidden ">
            <img src={image.consultT} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;
