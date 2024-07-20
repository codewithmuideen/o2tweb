import { hiring, image } from "../constants";

const Hiring = () => {
  return (
    <section className="pt-[50px] bg-white2 ">
      <div className="section">
        <div className=" w-[100%] ">
          <h2 className="lg:text-[40px] text-[35px] lg:leading-[75px] leading-[40px] font-bold text-center">
            Why Choose Us
          </h2>
        </div>

        {/* left item */}
        <div className="w-[100%] flex flex-wrap gap-y-3 lg:gap-y-3">
          {hiring.map((card) => (
            <div
              className="lg:w-[25%] w-[100%]  lg:pt-[48px] pt-[25px] px-[30px] flex gap-y-4 flex-col items-center text-center  h-max "
              key={card.id}
            >
              <div>
                <img src={card.icon} alt="" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold leading-6">
                  {card.title}
                </h2>
              </div>
              <div>
                <p className="text-[16px] leading-[25px] text-Ash font-Lato">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hiring;
