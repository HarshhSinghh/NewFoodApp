import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import Model from "./Model";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import SignUp from "../pages/Shop/SignUp";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSticky, setIsSticky] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  console.log(`this is ${user}`);

  const toggleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  const toggleDropDown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    console.log(isDropdownOpen1);
  };

  const handleSeachClick = () => {
    setIsSearch(!isSearch);
    console.log(isSearch);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    console.log(`"Selected":${item}`);
  };

  return (
    <header className="w-full mx-auto  md:bg-transparent fixed top-0 left-0 right-0 z-50 ">
      <nav
        className={`flex justify-between items-center pt-2  bg-white${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        {/* --------------------------------------- Logo Image   --  This part has been updated will checkit later-------------------------------------- */}

        <div className="   ">
          <Link to={"/"} className="flex  justify-center  items-center ">
            <img src={logo} alt="" className=" w-1/2 h-30" />
          </Link>
        </div>

        {/* ------------------> middle Menu <------------------------- */}

        <div className="sm:hidden  md:hidden hidden lg:flex  relative ">
          <div className="flex gap-8     absolute -left-10 -top-6">
            {/* Without DropDownMenu */}
            <div className="flex gap-8">
              <a href="/">Home</a>
              <a href="">Offers</a>
            </div>
            {/* WithDropDownMenu */}

            <div className="">
              <div className="relative inline-block text-left">
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    id="category-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    className="rounded"
                    onClick={toggleDropDown}
                  >
                    Menu
                    <svg
                      className="-mr-1 ml-2 h-5 w-5 inline-block text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {isDropdownOpen && (
                <div className="absolute  p-6 origin-top-right bg-white devide-y devide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 ">
                  <div
                    className="py-1 flex  flex-col justify-center items-center"
                    role="none"
                  >
                    <a
                      href="/menu"
                      className=" hover:bg-gray-100 px-2 rounded-md"
                    >
                      All
                    </a>
                    <a href="" className=" hover:bg-gray-100 px-2 rounded-md">
                      Salad
                    </a>
                    <a href="" className=" hover:bg-gray-100 px-2 rounded-md">
                      Pizza
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="relative inline-block text-left">
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    id="category-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    className="rounded"
                    onClick={toggleDropDown1}
                  >
                    Serices
                    <svg
                      className="-mr-1 ml-2 h-5 w-5 inline-block text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {isDropdownOpen1 && (
                <div
                  className={`absolute  p-6 origin-top-right bg-white devide-y devide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 dropdown-menu ${
                    isDropdownOpen1 ? "show" : ""
                  }`}
                >
                  <div className="py-1 flex  flex-col ">
                    <a href="" className=" hover:bg-gray-100 px-2 rounded-md">
                      Online Order
                    </a>
                    <a href="" className=" hover:bg-gray-100 px-2 rounded-md">
                      Table Booking
                    </a>
                    <a href="" className=" hover:bg-gray-100 px-2 rounded-md">
                      Order Tracking
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* last part of Menu */}
        <div className=" w-1/3  justify-end  flex items-center    ">
          <div className=" items-center justify-end gap-5 mr-10 sm:hidden  md:flex hidden lg:flex">
            <div className=" justify-center  items-center gap-5 sm:hidden  md:flex hidden lg:flex">
              <div onClick={handleSeachClick}>
                <CiSearch className="text-2xl " />
              </div>
              <Link to={user ? "/cartpage" : "/signup"}>
                <IoCartOutline className="text-2xl" />
              </Link>
            </div>

            <div>
              {user ? (
                <Profile user={user} />
              ) : (
                <button
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                  className="flex items-center justify-center px-4 py-2   border-transparent font-medium rounded-full text-black bg-green hover:bg-blue-700 focus:outline-none focus:ring-2 hover:bg-primaryBG focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FaUser className="mr-2" />
                  Login
                </button>
              )}

              <Model />
            </div>
          </div>

          <FaBarsStaggered
            className=" sm:flex md:hidden  lg:hidden mr-4 "
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
