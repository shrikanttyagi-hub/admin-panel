"use client";

import { useForm } from "react-hook-form";
import Button from '../ui/atoms/button/button'
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";


type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("Login Data:", data);
    // TODO: Call API for login
  };

  return (
    <div className="flex h-full">
      <div className="left-box flex-1/2 flex flex-col justify-center gap-[30px] h-[100vh] p-[70px]">
        <div className="header flex flex-col gap-[30px]">
          <h1 className="text-3xl text-[#143b5f] font-bold">Let's get you signed in</h1>

          <div className="flex gap-7">
            {/* <button  className="outline-1 outline-black/40 flex gap-2 items-center p-2 px-7 rounded-[5px] font-bold shadow-lg cursor-pointer"> <FaFacebook /> Sign in with Facebook </button>
            <button  className="outline-1 outline-black/40 flex gap-2 items-center p-2 px-7 rounded-[5px] font-bold shadow-lg curso"> <AiFillGoogleCircle /> Sign in with Google</button> */}

            <Button text="Sign in with google" className="sign-in-button" />
          </div>

          <div className="flex items-center gap-2 opacity-75">
            <span className="bg-gray-400 w-full h-[1px]"></span>
            <div className="min-w-fit">Or sign in with email</div>
            <span className="bg-gray-400 w-full h-[1px]"></span>
          </div>
        </div>

        <div className="">

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-[30px]">
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-1 p-2 border rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="w-full mt-1 p-2 border rounded-lg"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#143b5f] text-white py-2 rounded-lg hover:bg-[#184f81]"
            >
              Sign in
            </button>
          </form>

          <p className="mt-4 text-sm opacity-75">
            Don’t have an account yet? <a href="/signup" className="text-[#184f81] hover:underline">Sign Up Now</a>
          </p>
        </div>
      </div>

      <div className="vertical-line bg-black w-[0.5px] h-[100vh] opacity-20"></div>

      <div className="right-box flex-1/2"></div>
    </div>
  );
}
