import { CloudDC } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CloudDesignSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {CloudDC.map((card) => (
          <div
            key={card.id}
            className="sm:w-[22%] w-[100%] sm:mr-7 bg-Dark2 text-white1 p-5 rounded-lg h-[290px]"
          >
            <div>
              <h4 className="pt-4 font-semibold text-xl">{card.title}</h4>
            </div>
            <p className="pt-4">{card.paragraph}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CloudDesignSlider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "hsl(211, 53%, 56%)",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "hsl(211, 53%, 56%)",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}
