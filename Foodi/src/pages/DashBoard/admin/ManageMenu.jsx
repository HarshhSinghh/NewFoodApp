import React from "react";
import useMenu from "../../../hooks/useMenu";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageMenu = () => {
  const [menu, refetch] = useMenu();

  const handleDeleteMenu = (item) => {
    prompt("Are You Sure").then(async (result) => {
      if (result.confirmed) {
        const res = await useAxiosSecure.delete(`/menu/${item._id}`);
        refetch();
      }
    });
  };

  // const handleEditButton = () => {};

  return (
    <div className="relative w-full h-full  mt-4  border-2 border-green">
      <div className="    border-2 border-fuchsia-800 p-4">
        <h1 className="text-4xl">
          Manage All <span className=" text-green">Menu Items</span>
        </h1>
      </div>
      <div className="">
        <div class="table-responsive-lg">
          <table class="table table-striped table-hover table-borderless table-primary align-middle">
            <thead class="table-light">
              <caption>Table Name</caption>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr class="table-primary">
                <td>Item</td>
                <td>Item</td>
                <td>Item</td>
                <td>
                  {/* Add id below link----------------------------',' Here */}
                  <Link to={`/dashboard/update-menu/`}>
                    <button className=" bg-green rounded-lg p-2 text-white">
                      {" "}
                      Edit
                    </button>
                  </Link>{" "}
                </td>
                <td className="">
                  <button
                    className=" bg-green rounded-lg p-2 text-white"
                    onClick={() => {
                      handleDeleteMenu(item);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="table-primary"></tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMenu;
