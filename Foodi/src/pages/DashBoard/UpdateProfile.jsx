import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { UpdateProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigation = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    UpdateProfile(name, photoURL)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen -mt-10 ">
        <form
          action=""
          method="post"
          className="card"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="inputs flex flex-col border p-16 shadow-md rounded-lg">
            <div className="form-control">
              <label htmlFor="email" className=" text-sm">
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="p-2 border mt-3 rounded-lg"
                {...register("name")}
              />
            </div>
            <div class="form-control mt-3 text-sm">
              <label
                for="profileImage"
                class="bg-gray-200 px-4 py-2 rounded-md cursor-pointer inline-block"
              >
                Upload Image
              </label>
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                class="opacity-0 absolute"
                {...register("Photo URL")}
                required
              />
            </div>

            <div className=" text-center mt-4 w-full">
              <button type="submit" className="bg-green p-2 rounded-lg ">
                Update Profile Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
