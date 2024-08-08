import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    querykey: ["user"],
    queryfn: async () => {
      const res = await axiosSecure.get("/users");
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`user/admin/${user._id}`).then((res) => {
      alert(`${user.name} is now admin`);
      refetch;
    });
  };

  const handleDelete = (user) => {
    axiosSecure.delete(`user/admin/${user._id}`).then((res) => {
      alert(`${user.name} has been deleted`);
      refetch;
    });
  };

  return (
    <div>
      <div className=" flex  justify-between items-center m-4">
        <h5>All Users</h5>
        <h5>Total Users : {users.length}</h5>
      </div>

      {/* table Content  */}

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[820px]">
            {/* head */}
            <thead className=" bg-green  rounded-lg text-white">
              <tr>
                <th></th>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button onClick={handleMakeAdmin(user)}>
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="text-red  text-sm"
                      onClick={handleDelete(user)}
                    >
                      {" "}
                      <FaTrashAlt />{" "}
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

export default Users;
