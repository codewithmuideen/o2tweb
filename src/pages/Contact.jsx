import { ContactCard } from "../constants";
import MailchimpForm from "../utils/MailchimpForm";

const Contact = () => {
  return (
    <section>
      <div className="contact__bg ">
        {/* Black color overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Your content */}
        <div className="text-white text-center  px-2 md:px-0 absolute section top-[60%] sm:top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
          <h1 className="text-3xl">Contact Us</h1>
        </div>
      </div>

      <div className="section py-5">
        <div className="pt-[40px]">
          <h2 className="text-3xl font-semibold">Contact Details</h2>

          <hr className=" h-4 w-20 mt-3 border-yellow-400" />
        </div>

        <div className="flex justify-between gap-y-5 sm:flex-row flex-col">
          {/* left item */}
          <div className="sm:w-[68%]">
            <h4 className="font-light">
              If you have any question about what we offer for consumers or for
              business, you can always email us or call us via the below
              details. We'll reply within 24 hours.
            </h4>

            <div className=" mt-3 flex flex-wrap gap-4">
              {ContactCard.map((card) => (
                <div key={card.id} className="flex gap-x-4  sm:w-[45%]">
                  <span className="text-3xl text-yellow-400">{card.icon}</span>

                  <div>
                    <p>{card.title}</p>
                    <span>{card.paragraph}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:w-[30%] pb-10">
            <MailchimpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
