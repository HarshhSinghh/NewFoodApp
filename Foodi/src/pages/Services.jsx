import React from "react";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Catering",
      des: "Delight Your Guests with our Flavour and Presentation",
      image: "",
    },
    {
      id: 2,
      title: "Fast Delivery",
      des: "We Deliver Your Order Prompthly to your Door",
      image: "",
    },
    {
      id: 1,
      title: "Online Order",
      des: "Explore Menu and order with ease using our online Ordering",
      image: "",
    },
    {
      id: 1,
      title: "Gift Cards",
      des: "Give The Gift of exceptional dining with FOODI gift cards",
      image: "",
    },
  ];
  return (
    <div className="flex  flex-col  w-full sm:flex-row ">
      <div className="w-full   justify-center items-center p-10  m-auto h-auto">
        <h5 className=" text-red uppercase text-2xl ">
          Our Story and Services
        </h5>
        <h1 className=" text-4xl font-bold my-6 ">
          Our Culinary Journey And Services
        </h1>
        <p className="text-sm">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services,blending cullinary artistry with warm
          hospitality
        </p>
        <button className="bg-green  rounded-full px-4 py-2 mt-10 ">
          Explore
        </button>
      </div>
      <div className="w-full  flex justify-center items-center  ">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center text-center my-6 ml-4 pl-6 ">
          {serviceList.map((value, key) => (
            <div key={key} className="w-3/4  p-8 border-2 ">
              <img src={value.image} alt="Image" className="text-green" />
              <h5 className="text-green p-2">{value.title}</h5>
              <p className="text-sm">{value.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
