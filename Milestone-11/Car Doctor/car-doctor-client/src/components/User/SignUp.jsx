import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = ({ signUpPage, setSignUpPage }) => {
  return (
    <div>
      {" "}
      <h1 className="text-center text-4xl font-bold">Sign Up</h1>
      <form className="space-y-5">
        <div>
          <label className="text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="w-full border  px-3 h-12 mt-2 rounded-md outline-primary"
            type="name"
            name="name"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="w-full border  px-3 h-12 mt-2 rounded-md outline-primary"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="text-lg font-semibold" htmlFor="password">
            Confirm Password
          </label>
          <br />
          <input
            className="w-full border  px-3 h-12 mt-2 rounded-md outline-primary"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
        </div>
        <input type="button" value="Sign Up" className="w-full myPrimary-btn" />
      </form>
      <div className="text-center font-semibold mt-8">
        <p>Or Sign In with</p>
        <div className="flex justify-center space-x-3 text-xl mt-3 mb-5 ">
          <Link className="bg-[#f3f3f3] p-3 rounded-full text-[#4267B2]">
            <FaFacebookF />
          </Link>
          <Link className="bg-[#f3f3f3] p-3 rounded-full text-[#0A66C2]">
            <FaLinkedinIn />
          </Link>
          <Link className="bg-[#f3f3f3] p-3 rounded-full ">
            <FcGoogle />
          </Link>
        </div>
        <p>
          Haven&apos;t account?{" "}
          <Link
            onClick={() => setSignUpPage(!signUpPage)}
            className="text-primary font-bold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
