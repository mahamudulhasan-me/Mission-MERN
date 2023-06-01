import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import bg from "../../../assets/others/authentication.png";
import login from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../provider/AuthProvider";
import SocialSignin from "./SocialSignin";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const [solidPassword, setSolidPassword] = useState("");
  const passwordHandle = (e) => {
    setPassError("");
    const password = e.target.value;
    if (!/(?=.*[a-z])/.test(password)) {
      setPassError("At least one  letter is required");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPassError("At lest one capital letter is required");
    } else if (!/(?=.*[0-9])/.test(password)) {
      setPassError("At least one digit is required");
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPassError("At least one special character is required");
    } else if (!/(?=.{6,})/.test(password)) {
      setPassError("Password must be 6 characters long");
    } else {
      setSolidPassword(password);
    }
  };
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;

    if (!passError) {
      setPassError("");
      createNewUser(email, solidPassword)
        .then((result) => {
          const user = result.user;
          updateProfile(user, { displayName: name, photoURL: photo })
            .then(() => {
              fetch(`http://localhost:5000/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ name, email, userUid: user?.uid }),
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.insertedId) {
                    navigate("/");
                    toast.success("User created successfully");
                  }
                });
            })
            .catch((err) => setPassError(err.message));
        })
        .catch((error) => setPassError(error.message));
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-contain min-h-screen py-16 "
    >
      <div className="w-4/5  border-2 mx-auto  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex py-10 flex-row-reverse">
        <img src={login} alt="" className="w-1/2" />
        <div className="login w-1/2 mx-auto">
          <h1 className="text-center font-cinzel font-semibold text-4xl mb-5">
            Sign up
          </h1>
          <form onSubmit={handleCreateUser} className="w-3/5 mx-auto space-y-4">
            <div>
              <label htmlFor="name">Name</label> <br />
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="photo">Photo Url</label> <br />
              <input
                required
                type="url"
                name="photo"
                id="photo"
                placeholder="Enter PhotoURL"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label> <br />
              <input
                onChange={passwordHandle}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <p className="text-rose-500">{passError}</p>
            <button
              type="submit"
              className="bg-yell rounded-sm font-cinzel py-2 font-semibold w-full text-white mt-20"
            >
              log in
            </button>
            <p className="text-yell text-xs text-center font-semibold">
              Already have account?{" "}
              <Link to={"/login"} className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </form>
          <div className="flex justify-center items-center">
            <SocialSignin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
