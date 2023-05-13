import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";

const SignUp = ({ signUpPage, setSignUpPage }) => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    console.log(e);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        updateProfile(user, { displayName: name })
          .then((user) => {
            toast.success("User Create Successfully");
            navigate(path);
          })
          .catch((error) => setError(error));
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="space-y-5">
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
        <p className="font-semibold text-rose-600">{error}</p>
        <input type="submit" value="Sign Up" className="w-full myPrimary-btn" />
      </form>
      <SocialSignIn signUpPage={signUpPage} setSignUpPage={setSignUpPage} />
    </div>
  );
};

export default SignUp;
