import { end, image } from "../constants";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const End = () => {
  return (
    <section className="py-[40px]">
      <div>
        <div className="flex md:flex-row flex-col gap-5 justify-between">
          <div className="md:w-[55%] w-[100%] md:pr-[36px] pr-5">
            <div className="flex  justify-between items-end w-[100%]  ">
              <h2 className="lg:text-[60px] text-[35px] lg:leading-[75px] leading-[40px] font-bold ">
                End-to-End Product Development
              </h2>

              <hr className="  border-black  md:w-[35%] w-[50%] " />
            </div>
            <div className="md:pt-[80px] pt-[50px]">
              <strong className="text-[16px] font-Lato leading-6 text-Dark4">
                Full development team taking your project all the way from
                discovery to deployment.
              </strong>
              <p className="text-[16px] font-Lato leading-[26px] mt-[20px]">
                STX Next will assemble a dedicated team for you with all the
                necessary skills: backend developers, frontend developers, test
                automation engineers, product owners, UI/UX designers, and
                DevOps engineers.
              </p>
              <p className="text-[16px] font-Lato leading-[26px] mt-[20px]">
                You retain complete control over the project, while we support
                you with strategic guidance. Our people will plan, design,
                build, deploy, and run your product without you worrying about a
                thing. This is your own team that only physically sits at our
                offices—and we handle all the formalities. While your product is
                being built, you can stay focused on the core of your business.
              </p>
            </div>
          </div>

          <div className="md:w-[43%] w-[100%] sm:block hidden">
            <img src={image.endT} alt="" />
          </div>
        </div>

        <div className="pt-[40px]">
          <h3 className="text-[22] font-bold leading-[31px]">
            We can help with:
          </h3>
        </div>

        <div className="">
          <ul className="flex flex-wrap">
            {end.map((card) => (
              <li key={card.id} className="p-[12px] w-[100%] sm:w-fit">
                <Link
                  to={card.url}
                  className=" hover:scale-105 hover:shadow-lg flex items-center justify-between px-4 border rounded-md border-Ash sm:w-[250px] w-[100%] h-[80px]"
                >
                  <div className="flex items-center">
                    <img src={card.icon} alt="" className="mr-3 w-[50px]" />
                    <p className="text-[14px] font-Lato leading-[21px] font-semibold">
                      {card.title}
                    </p>
                  </div>
                  <BsArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default End;
