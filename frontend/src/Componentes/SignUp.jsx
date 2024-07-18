// import React from 'react'

import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";


function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="modal">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="flex flex-col mt-4 space-y-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: true })}
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col mt-4 space-y-2">
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* button */}
            <div className="flex mt-4 justify-around">
              <button className="bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                SignUp
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
