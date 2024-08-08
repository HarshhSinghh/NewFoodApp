import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Cards = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Byuing Products ?",
        text: "Please Login or Sign In First",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now !!!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/sign-up", { state: { from: location } });
        }
      });
    }
  };

  const handleHeartFilled = () => {
    setIsHeartFilled(!isHeartFilled);
    console.log(isHeartFilled);
  };

  return (
    <div className="card bg-base-100 shadow-xl relative  m-2 sm:m-4 md:flex flex-col max-h-110">
      <div
        className={`rating gap-1  bg-green  p-2 m-2 absolute right-2 top-2 heartStar rounded-full ${isHeartFilled ? "text-rose-500": "text-white"
        } `}
        onClick={handleHeartFilled}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>

      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={image} // Make sure `image` is correctly passed and contains the URL
            alt={name} // Use a meaningful `alt` text
            className="sm:hover:scale-105 hover:scale-75 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-center items-center">
          <p className="text-red font-semibold"> $ {price}</p>
          <button
            className="btn bg-green text-white"
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
