import React, { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import login from "../../assets/images/login.svg";

import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import Register from "./Register";
import SocialSignin from "./SocialSignin";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { logInWithEmailPassword } = useContext(AuthContext);
  useTitle("Sign In");
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.state || "/";
  // login with email and password
  const handleEmailPasswordSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email && password) {
      logInWithEmailPassword(email, password)
        .then((user) => {
          const loggedUser = user.user;
          toast.success(`Welcome ${loggedUser.displayName}`);
          navigate(path);
          setError("");
        })
        .catch((error) => setError(error.message));
    }
  };
  return (
    <div className="min-h-[calc(100vh-4rem)] md:grid grid-cols-2 justify-center items-center px-[10%]  bg-gray-100">
      <div>
        <img data-aos="fade-right" src={login} alt="" />
      </div>
      {isSignIn ? (
        <div
          data-aos="fade-left"
          className="text-center  mb-10 mt-20 bg-white rounded-3xl md:w-4/5"
        >
          <h2 className="mt-8  mb-10 text-3xl text-pri">
            Sign <span className="text-sec">In</span>
          </h2>
          <form onSubmit={handleEmailPasswordSignIn} className="space-y-5">
            <input
              required
              type="text"
              name="email"
              placeholder="Enter Email"
              className="bg-[#F8F8F8] md:w-4/5 w-[90%] mx-auto py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
            />
            <div className="relative">
              <input
                required
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Enter Password"
                className=" bg-[#F8F8F8] md:w-4/5 w-[90%] mx-auto py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
              />
              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 text-lg text-gray-500 right-14"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-4 text-lg text-gray-500 right-14"
                />
              )}
            </div>

            <div className="flex w-4/5 justify-between mx-auto items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p className="cursor-pointer text-blue-600 hover:underline duration-100">
                Forget password?
              </p>
            </div>
            {error && (
              <p className="text-rose-500 font-semibold">
                {error.includes("Firebase") ? error.slice(9) : error}
              </p>
            )}
            <AwesomeButton type="primary">
              <div className="w-20">Sign In</div>
            </AwesomeButton>
          </form>
          <SocialSignin />
          <p className="text-gray-500 mb-3">
            Not a member?{" "}
            <Link
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-600 hover:underline duration-150 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      ) : (
        <Register path={path} signIn={isSignIn} setSignIn={setIsSignIn} />
      )}
    </div>
  );
};

export default SignIn;
