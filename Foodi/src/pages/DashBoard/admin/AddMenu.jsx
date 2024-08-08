import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddMenu = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingKey}`;
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const hostingImage = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    if (hostingImage.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: hostingImage.data.data.display_url,
      };

      const postMenuItem = axiosSecure.post("/menu", menuItem);
      if (menuItem.status == 200) {
        reset();
        alert("Item has been added");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full border-2 border-green rounded-md flex items-center h-full mt-3 justify-center flex-col">
        {/* Heading Text */}
        <div className="mt-2 sm:mt-4 md:mt-6 xl:mt-8 gap-x-4 p-4 w-full text-center">
          <h1 className="text-4xl font-bold">
            Upload A New <span className="text-green">Menu Item</span>
          </h1>
        </div>

        {/* Recipe Input */}
        <div className="flex flex-col items-start justify-start w-full  border-red-500 p-4">
          <div className="w-full flex flex-col">
            <label htmlFor="" className="w-full">
              Recipe Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Recipe Name"
              //   defaultValue="name"
              {...register("name")}
              className="border-2 w-full mt-2 rounded-md"
            />
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-center gap-4 items-center w-full">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex  justify-center items-center">
              <label htmlFor="" className="w-full">
                Category
              </label>
              <select
                name=""
                id=""
                // defaultValue="default"
                {...register("category")}
                className="w-full md:w-2/3 border-2 rounded-md mt-2"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
              </select>
            </div>

            <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center gap-4 items-center">
              <label htmlFor="" className="w-full md:w-auto">
                Price
              </label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Price"
                // defaultValue="price"
                {...register("price")}
                className="border-2 rounded-md w-full md:w-2/3 mt-2 md:mt-0"
              />
            </div>
          </div>

          {/* Text Area */}
          <div className="w-full flex flex-col mt-4">
            <label htmlFor="" className="w-full">
              Recipe Details
            </label>
            <textarea
              name=""
              id=""
              rows={5}
              className="border-2 w-full mt-2 rounded-md p-2"
              //   defaultValue="recipe"
              {...register("recipe")}
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="w-full flex flex-col mt-6">
            <input
              type="file"
              name=""
              id=""
              className="w-full"
              //   defaultValue="price"
              {...register("image")}
            />
          </div>

          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green py-2 rounded-md px-4 w-full"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddMenu;
