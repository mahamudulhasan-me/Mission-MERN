import React, { useContext, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../provider/AuthProvider";
import Header from "../Shared/Header/Header";
import SignUp from "./SignUp";

const SignIn = () => {
  const [signUpPage, setSignUpPage] = useState(true);
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          uid: user.uid,
        };
        fetch(`http://localhost:5050/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("car-access-token", data.token);
            toast.success(`Welcome ${user.displayName}`);
            navigate("/");
          });
      })
      .catch((err) => console.error(err));
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
              <form className="space-y-5">
                <div>
                  <label className="text-lg font-semibold" htmlFor="email">
                    Email*
                  </label>
                  <br />
                  <input
                    className="w-full border px-3 h-12 mt-2 rounded-md outline-primary"
                    type="email"
                    name="email"
                    id="email"
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
                    id="password"
                    placeholder="Your Password"
                  />
                </div>
                <input
                  type="button"
                  value="Sign Up"
                  className="w-full myPrimary-btn"
                />
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
                  <Link
                    onClick={handleGoogleSignIn}
                    className="bg-[#f3f3f3] p-3 rounded-full "
                  >
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
