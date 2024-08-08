import React from "react";
import testiImage from "../../public/testimonials.png";
const Testimonial = () => {
  return (
    <div className="wrapper">
      <div className="flex  flex-col item-center items-center md:flex-row ">
        <div className="w-1/2  text-center">
          <img
            src={testiImage}
            alt=""
            className="ml-8 sm:ml-32 w-full  sm:w-3/5  "
          />
        </div>

        <div className="w-1/2  flex flex-col  justify-center items-center ">
          <div className="w-full ">
            <div className="w-full text-center">
              <p className="text-red p-2  min-w-full">TESTIMONIAL</p>
              <div className="py-4  w-full">
                <h1 className=" font-bold text-2xl sm:text-4xl pb-6  text-center ">
                  What Our Customers Say <br /> About Us
                </h1>
                <p className=" leading-[30px] sm:my-5">
                  "I had the Pleasure of dining at FOODI last night, i am still
                  raving <br /> about the experiece! the Attention to detail in
                  presentation <br /> and serving was impeccable"
                </p>
              </div>
            </div>
          </div>

          <div className="flex        justify-center items-center  ">
            <div className="flex  text-center flex-col  mt-4 sm:flex-row">
              <div className=" flex ">
                <img
                  src="../../public/testimonial1.png"
                  alt=""
                  className="w-16 h-16 sm:h-16 sm:w-14"
                />
                <img
                  src="../../public/testimonial2.png"
                  alt=""
                  className="w-16 h-16 sm:h-16 sm:w-14"
                />
                <img
                  src="../../public/testimonial3.png"
                  alt=""
                  className=" w-16 h-16 sm:h-16 sm:w-14"
                />
              </div>
              <div className=" ml-4 text-center font-bold">
                <h3>Customer Feedback</h3>
                <h1>Start 4.9 (18.6k Reviews)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
