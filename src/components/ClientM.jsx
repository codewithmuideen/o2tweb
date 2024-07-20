import { client } from "../constants";

const ClientM = () => {
  return (
    <div className=" flex flex-wrap justify-center sm:justify-around w-[100%]">
      <div className=" flex flex-wrap">
        {client.map((card) => (
          <div
            key={card.id}
            className=" lg:py-10  px-4 py-4 block text-center   "
          >
            <img src={card.icon} alt="" className="w-[full]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientM;
