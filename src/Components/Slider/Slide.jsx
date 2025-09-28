
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import car from "../../assets/car.png"
import oil from "../../assets/oil.png"
import pipe from "../../assets/pipe.png"
import boat from "../../assets/boat.png"


const Slide = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, 

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};



  return (
     <div className="slider-container">
      <Slider {...settings} className="mx-[-8px]">
        <div className="px-2">
          <img src={car} alt="" />
        </div>
        <div className="px-2">
          <img src={oil} alt="" />
        </div>
        <div className="px-2">
          <img src={pipe} alt="" />
        </div>
        <div className="px-2">
          <img src={boat} alt="" />
        </div>
        <div className="px-2">
          <img src={car} alt="" />
        </div>
        <div className="px-2">
          <img src={oil} alt="" />
        </div>
        <div className="px-2">
          <img src={pipe} alt="" />
        </div>
        <div className="px-2">
          <img src={boat} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
