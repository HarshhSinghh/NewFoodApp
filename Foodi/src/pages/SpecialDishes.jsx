import React, { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      Next
    </div>
  );
};

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
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
  nextArrow: <simpleNextArrow />,
  prevArrow: <simplePrevArrow />,
};

const SpecialDishes = () => {
  const [recepie, setRecepie] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        const specials = data.filter((item) => item.category === "popular");
        setRecepie(specials);
        console.log(recepie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const nextSlider = () => slider.current.slickNext();
  const prevSlider = () => slider.current.slickPrev();

  return (
    <div className="">
      <div className="flex    ">
        {/* ---------------------------------------Text Area ------------------------------------- */}
        <div className=" flex  w-full px-16  flex-col md:flex-row ">
          <div className=" flex flex-col w-full sm:w-1/2  md:items-start md:justify-start  text-center md:text-left lg:text-left  px-4">
            <p className="uppercase  text-red text-sm tracking-wide font-semibold m-4">
              Special Dishes
            </p>
            <h1 className=" font-bold text-4xl m-2">
              StandOut Dishes <br /> From Our Menu
            </h1>
          </div>

          {/* ------------------------------------- Next and Previous Button ------------------------------ */}

          <div className="   sm:w-1/2 text-right  w-full  flex  md:items-end md:justify-end  justify-center items-center  px-4  ">
            <div className="mt-12 pb-4  p-4  ">
              <button
                onClick={prevSlider}
                className="btn-2 p-3 rounded-full ml-5"
              >
                <FaAngleLeft className="w-8 h-8 p-1" />
              </button>
              <button
                onClick={nextSlider}
                className="btn-2 rounded-full ml-5 p-3 bg-green "
              >
                <FaAngleRight className="w-8 h-8 p-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------Slider and Images------------------------------------------- */}

      <div className="m-16  slider-container ">
        <Slider ref={slider} {...settings}>
          {recepie.map((item) => (
            <Cards item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialDishes;
