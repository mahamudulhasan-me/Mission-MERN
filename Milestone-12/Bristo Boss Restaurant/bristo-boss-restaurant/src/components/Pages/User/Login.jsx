import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplateNoReload,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";
import bg from "../../../assets/others/authentication.png";
import login from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../provider/AuthProvider";
import SocialSignin from "./SocialSignin";

const Login = () => {
  const { logInWithEmailAndPassword } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");

  // verify captcha
  const handleCaptcha = (e) => {
    const captcha = e.target.value;
    console.log(captcha);
    if (validateCaptcha(captcha) == true) {
      setDisable(false);
    }
  };
  // load captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const path = location.state?.from?.pathname || "/";
  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!disable) {
      logInWithEmailAndPassword(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          toast.success(`Welcome ${user.displayName}`);
          navigate(path);
        })
        .catch((error) => setError(error.message));
    }
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-contain min-h-screen py-16 "
    >
      <div className="w-4/5  border-2 mx-auto  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex py-10 ">
        <img src={login} alt="" className="w-1/2" />
        <div className="login w-1/2 mx-auto">
          <h1 className="text-center font-cinzel font-semibold text-4xl mb-5">
            Login
          </h1>
          <form onSubmit={handleLogin} className="w-3/5 mx-auto space-y-4">
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
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div>
              <label htmlFor="" className="text-xs">
                <LoadCanvasTemplateNoReload />
              </label>
              <input
                type="text"
                onBlur={handleCaptcha}
                className="text-lg p-0 mt-3"
              />
            </div>
            <p className="text-rose-600">{error}</p>
            <button
              type="submit"
              disabled={disable}
              className={`bg-yell bg-opacity-100 rounded-sm font-cinzel py-2 font-semibold w-full text-white mt-20`}
            >
              log in
            </button>
            <p className="text-yell text-xs text-center font-semibold">
              New here?{" "}
              <Link to={"/register"} className="text-blue-600">
                Create a New Account
              </Link>
            </p>
          </form>
          <div className="flex justify-center items-center">
            <SocialSignin path={path} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
