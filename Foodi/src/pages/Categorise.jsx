import React from "react";
import girl from "..//../public/burgerGirl.png";
import noodles from "../../public/Soupp.png";
const Categorise = () => {
  return (
    <div className=" max-w-screen-4xl mx-auto bg-primaryBG p-14     ">
      <div className="  flex  justify-center items-center lg:flex-row flex-col  border-box w-full  ">
        <div className=" sm:w-full lg:w-1/2 space-y-5 pb-10 lg:pt-24  pt-8 text-center ">
          <h1 className="lg:text-5xl md:lg:text-4xl  text-3xl sm:font-semibold font-semibold ">
            Dive Into Delights Of <br />
            Delectable <span className="text-green">Food</span>
          </h1>

          <p className="mt-10 md:text-l justify-center sm:text-sm ">
            Where Each plate Weaves the Story of Culinary mastery and Passinate
            CreaftmanShip
          </p>
          <button className="bg-green px-8 py-3 rounded-full text-white p-2 hover:bg-red ">
            Order Now
          </button>
        </div>

        {/* ---------------right Part using image --------------------------------- */}

        <div className="flex   relative  justify-center items-center p-2  w-1/2 ">
          <div className="relative">
            {/* Green rounded div */}
            <div className="w-48 h-48 rounded-full bg-green sm:w-96 sm:h-96"></div>

            {/* Absolute positioned image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={girl}
                alt=""
                className="w-48 h-48 object-cover sm:w-96 sm:h-96"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 lg:left-15  flex gap-10 justify-center items-center">
            <div className="flex space-x-10 justify-between  ">
              <div className="flex justify-center items-center bg-white px-5  sm:gap-4 rounded-lg hover:shadow-lg ">
                <img
                  src={noodles}
                  alt=""
                  className=" w-10 h-10 sm:w-20 sm:h-10"
                />
                <div className="flex flex-col sm:text-sm">
                  <p className="text-sm">Spicy Noodle</p>
                  {/* <p className="text-sm">5-Stars</p> */}
                  <p className="text-sm text-red">$18.00</p>
                </div>
              </div>

              <div className="flex justify-center items-center bg-white px-5  sm:gap-4 rounded-lg hover:shadow-lg ">
                <img
                  src={noodles}
                  alt=""
                  className=" w-10 h-10 sm:w-20 sm:h-10"
                />
                <div className="flex flex-col sm:text-sm">
                  <p className="text-sm">Spicy Noodle</p>
                  {/* <p className="text-sm">5-Stars</p> */}
                  <p className="text-sm text-red">$18.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorise;

//
