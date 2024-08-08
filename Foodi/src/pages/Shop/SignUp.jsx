import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
// import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// const navigate = Navigate();
const SignUp = () => {
  const { signUpWithGoogle, user, createUser, updateUserProfile } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [allError, setAllError] = useState("");
  // const history = useHistory(); // Use useHistory hook
  const navigate = useNavigate();

  //  Handling Form

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(data.email, data.photoURL).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((response) => {
            console.log(response);
          });
        });
        alert("Account has been Created");
        // history.push("/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errors = error.message;
        setAllError(errors);
      });
  };

  // login with Google
  const handleRegister = (data) => {
    const email = data.email;
    const password = data.password;

    signUpWithGoogle(email, password).then((result) => {
      const user = result.user;
      const userInfo = {
        name: user.displayName, // Set name from result.user.displayName
        email: user.email, // Set email from result.user.email
      };
      axiosPublic.post("/users", userInfo).then((response) => {
        // console.log(response);
        alert("Sign In SuccessFull");
      });
      navigate(from, { replace: true }).catch((error) => console.log(error));
    });
  };
  return (
    <div className=" px-96 pt-10 ">
      <form
        className="card-body border-4 border-blue-300"
        onSubmit={handleSubmit(onSubmit)}
      >
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
        </div>
        <div className="form-control mt-3">
          <input
            // onClick={handleRegister}
            type="submit"
            value="Create Account Now"
            className="btn bg-green"
          />{" "}
          {allError ? (
            <p className=" text-red text-xs italic">
              Please enter a Valid Email and Password
            </p>
          ) : (
            ""
          )}
        </div>
        <p className="text-center mt-3">
          <Link to="/" className=" text-red">
            {" "}
            Login Now
          </Link>{" "}
        </p>

        <div className="social  text-center space-x-5 ">
          <button className="btn btn-circle hover:bg-green hover:text-white">
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
  );
};
// };
export default SignUp;
