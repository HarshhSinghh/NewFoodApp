import React from "react";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();

  const handleIncrease = (item) => {
    console.log(item._id);
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cartItems/${item.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="section-container container ">
      <div className="  pt-16  font-extrabold flex  flex-col items-center justify-center text-center gap-5 tracking-widest text-[64px] space-y-8  md:text-5xl text-4xl  md:leading-snug leading-snug">
        <h2>
          {" "}
          Items Added to the <span className="text-green">Cart</span>
        </h2>{" "}
      </div>

      {/* Cart Information */}
      <div className="ml-10 mt-8 items-center">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" bg-green text-white">
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((item, index) => {
                <tr key={index}>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                      {index}
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          {item.quantity}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-3 justify-center items-center -ml-16">
                      <button
                        className=" bg-gray-300  rounded-full text-sm px-3 py-2"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className=" bg-gray-300 px-3 py-2 rounded-full text-sm"
                        onClick={() => hadnleDecrease(item)}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td>
                    <p>
                      <span>{item.price}</span>
                    </p>
                  </td>

                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
