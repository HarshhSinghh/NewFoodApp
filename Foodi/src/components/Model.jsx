import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import useAuth from "../hooks/useAuth";
import { RxCross2 } from "react-icons/rx";

import useAxiosPublic from "../hooks/useAxiosPublic";

const Model = () => {
  const [isModelOpen, setIsModelOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // redirecting to home page or specific page

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { signUpWithGoogle, login, user } = useAuth();
  const axiosPublic = useAxiosPublic();

  // const onSubmit = (data) => console.log(data);

  console.log("isModelOpen:", isModelOpen); // Debugging statement

  const handleSignIn = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        alert(`Login SuccessFull for ${user}`);
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email,password)
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Signed In SuccessFully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Please correct The Email Id and Messagae");
      });
  };

  return (
    isModelOpen && (
      <dialog
        id="my_modal_5"
        className={`modal modal-middle sm:modal-middle 
      ${isModelOpen ? "" : "hide"}
    `}
      >
        <div className="modal-box">
          <div className="modal-action">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              {/* <h3 className=" font-bold text-lg text-center">Please Login </h3> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })} // Explicitly pass necessary properties
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {errorMessage ? (
                <p className=" text-red  text-sm">{errorMessage}</p>
              ) : (
                ""
              )}

              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-green"
                  // onSubmit={onSubmit}
                />{" "}
              </div>
              <p className="text-center mt-3">
                Don't Have An Account{" "}
                <Link to="/signup" className=" text-red" onClick={toggleModel}>
                  {" "}
                  Sign Up
                </Link>{" "}
                Now
              </p>

              <button
                htmlFor="my_modal_5"
                className="btn btn-sm  btn-circle btn-ghost  absolute  right-2 top-2"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                <RxCross2 />
              </button>

              <div className="social  text-center space-x-5 ">
                <button
                  className="btn btn-circle hover:bg-green hover:text-white"
                  onClick={handleSignIn}
                >
                  <FaGoogle />
                </button>
                <button className="btn btn-circle  hover:bg-green hover:text-white">
                  <FaFacebook />
                </button>
                <button className="btn btn-circle  hover:bg-green hover:text-white">
                  <FaInstagram />
                </button>
                <button className="btn btn-circle  hover:bg-green hover:text-white">
                  <FaGithub />
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    )
  );
};

export default Model;
