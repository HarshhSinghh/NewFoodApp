import React from "react";

const categoryItems = [
  {
    id: 1,
    name: " Beef Roast",
    type: "Meat",
    image: "/public/BurgerRmove.png",
  },
  {
    id: 2,
    name: "Brown Gravy Mix",
    type: "Baking",
    image: "public/juiceRemove.png",
  },
  {
    id: 3,
    name: "Italian Salad",
    type: "Condiments",
    image: "public/iceCreameRemove.png",
  },
  {
    id: 4,
    name: "Dry Ranch ",
    type: "Condiments",
    image: "public/SandWichRemove.png",
  },
];
const Banner = () => {
  return (
   
    <div className=" mt-6 md:mt-8 lg:mt-10">
      <hr className="mx-10 mb-4 lg:hidden "  />
      {/* <---------------Text Section-------------> */}
      <div className="text-center font-bold">
        <h3 className=" text-red uppercase  tracking-wide font-semibold">
          Customer Favorite
        </h3>
        <h1 className="text-4xl p-2">Popular Categories</h1>
      </div>

      {/* <-------------------------Card Section------------------------> */}
      <div className="flex flex-wrap gap-8 container  justify-between p-16 ml-6 ">
        {categoryItems.map((value, key) => (
          <div
            className="flex flex-col   items-center justify-center w-60 h-72  shadow-2xl p-4  rounded-2xl  group transition-transform transform hover:-translate-y-2 "
            key={key}
          >
            <div className="relative ">
              <div className=" w-24 h-24 bg-[#c1f1c1] rounded-full flex  items-center justify-center"></div>
              <img
                src={value.image}
                alt=""
                className="absolute inset-0 w-14 h-14 m-auto   rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold mt-5">{value.name}</h1>
              <p className="text-sm text-center">{value.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
