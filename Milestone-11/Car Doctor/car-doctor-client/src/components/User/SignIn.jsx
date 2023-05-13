import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../provider/AuthProvider";
import Header from "../Shared/Header/Header";
import SocialSignIn from "../Shared/SocialSignIn/SocialSignIn";
import SignUp from "./SignUp";

const SignIn = () => {
  const [signUpPage, setSignUpPage] = useState(true);
  const [error, setError] = useState("");
  const { loginWithEmailAndPassword } = useContext(AuthContext);
  
  const location = useLocation();
  const path = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ password, email });

    loginWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigate(path);
        toast.success(`Welcome ${user?.displayName}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 my-16 min-h-[calc(100vh-9rem)] items-center">
        <div>
          <img src={loginImg} alt="" className="w-4/5" />
        </div>
        <div className="border ml-16 p-12 rounded-md">
          {signUpPage ? (
            <>
              <h1 className="text-center text-4xl font-bold">Login</h1>
              <form onSubmit={handleSignIn} className="space-y-5">
                <div>
                  <label className="text-lg font-semibold" htmlFor="email">
                    Email*
                  </label>
                  <br />
                  <input
                    className="w-full border px-3 h-12 mt-2 rounded-md outline-primary"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold" htmlFor="password">
                    Confirm Password*
                  </label>
                  <br />
                  <input
                    className="w-full border px-3 h-12 mt-2 rounded-md outline-primary"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                  />
                </div>
                <p className="font-semibold text-rose-600">{error}</p>
                <input
                  type="submit"
                  value="Sign Up"
                  className="w-full myPrimary-btn"
                />
              </form>
              <SocialSignIn
                signUpPage={signUpPage}
                setSignUpPage={setSignUpPage}
              />
            </>
          ) : (
            <SignUp signUpPage={signUpPage} setSignUpPage={setSignUpPage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
