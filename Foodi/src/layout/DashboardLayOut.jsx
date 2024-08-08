import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineManageSearch } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { BsMenuAppFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import logo from "../../public/logo.png";
import Model from "..//components/Model";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const DashboardLayOut = () => {
  const { loading } = useAuth();
  // [isAdmin, isAdminLoading] = useAdmin();
  return (
    <div>
      {true? (
        <div className="drawer lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-start">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdOutlineSpaceDashboard />
            </label>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col  gap-1 ">
              <li>
                <Link to={"/admin"} className="">
                  {" "}
                  <img src={logo} alt="" />{" "}
                  <span className="badge badge-primary">Admin</span>
                </Link>
              </li>
              {/* Sidebar content here */}
              <li>
                <Link to={"/dashboard"}>
                  {" "}
                  <MdDashboard />
                  DashBoard
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/managebooking"}>
                  {" "}
                  <FaBook />
                  Manage Bookings
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/addmenu"}>
                  <MdMenuBook />
                  Add Menu
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/managemenu"}>
                  {" "}
                  <MdOutlineManageSearch />
                  Manage Menu
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/users"}>
                  <FaUser />
                  User
                </Link>
              </li>
              <hr className=" my-4" />
              <li>
                <Link to={"/"}>
                  {" "}
                  <FaHome />
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/menu"}>
                  <BsMenuAppFill />
                  Menu
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/ordertracking"}>
                  {" "}
                  <CiCoffeeCup />
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/support"}>
                  <RiCustomerService2Fill />
                  Cutomer Support
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/email"}>
                  <MdEmail />
                  Email?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Model />
      )}
    </div>
  );
};

export default DashboardLayOut;
