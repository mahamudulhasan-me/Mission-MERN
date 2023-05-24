import { updateProfile } from "@firebase/auth";
import React, { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../provider/AuthProvider";
import SocialSignin from "./SocialSignin";

const Register = ({ signIn, setSignIn, path }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(true);
  useTitle("Register");
  const { registerNewUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const getPassword = (e) => {
    setPassError("");
    const password = e.target.value;
    if (!/(?=.*?[A-Z])/.test(password)) {
      setPassError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(password)) {
      setPassError("At least one lower case");
    } else if (!/(?=.*?[0-9])/.test(password)) {
      setPassError("At least one digit");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setPassError("At least one special character");
    } else if (password.length < 6) {
      setPassError("Minimum password length is 6 characters");
    }
    setPassword(password);
  };

  const handleRegisterNewUser = (e) => {
    e.preventDefault();

    if (!passError) {
      const form = e.target;
      const email = form.email.value;
      const name = form.name.value;
      const photo = form.photo.value;
      registerNewUser(email, password)
        .then((userCredential) => {
          const loggedUser = userCredential.user;
          updateProfile(loggedUser, {
            displayName: name,
            photoURL: photo,
          })
            .then(toast.success("Registration Successful"))
            .catch((err) => toast(err.message));
          navigate(path);
        })
        .catch((error) => setPassError(error.message));
    }
  };
  return (
    <div
      data-aos="fade-left"
      className="text-center  mb-10 mt-20 bg-white rounded-3xl"
    >
      <h2 className="mt-8 mb-10 text-3xl text-pri">
        Sign <span className="text-sec">Up</span>
      </h2>
      <form onSubmit={handleRegisterNewUser} className="space-y-5 ">
        <div className="md:grid grid-cols-2 gap-5 px-5 md:space-y-0 space-y-4">
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-[#F8F8F8] w-full py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
            className="bg-[#F8F8F8] w-full py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <input
            required
            type="text"
            placeholder="Email"
            name="email"
            className="bg-[#F8F8F8] py-3 w-full rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
          />
          <div className="relative">
            <input
              required
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              onChange={getPassword}
              placeholder="Enter Password"
              className=" bg-[#F8F8F8] w-full py-3 rounded-t-md focus:border-sec duration-200 border-b-4 rounded-b-xl outline-none px-4"
            />
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 text-lg text-gray-500 right-4"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 text-lg text-gray-500 right-4"
              />
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 ml-5 text-gray-500">
          <input
            type="checkbox"
            className="w-4 h-4"
            onClick={() => setAcceptTerms(!acceptTerms)}
          />
          <p>
            I agree with{" "}
            <Link className="font-semibold text-blue-600 underline">
              privacy and policy
            </Link>
          </p>
        </div>
        <p className="font-semibold text-rose-600">{passError}</p>

        <AwesomeButton disabled={acceptTerms} type="primary">
          <div className="w-24  ">Sign Up</div>
        </AwesomeButton>
      </form>
      <SocialSignin />
      <p className="text-gray-500 mb-3">
        Already have an account?{" "}
        <Link
          onClick={() => setSignIn(!signIn)}
          className="text-blue-600 hover:underline duration-150 font-semibold"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
