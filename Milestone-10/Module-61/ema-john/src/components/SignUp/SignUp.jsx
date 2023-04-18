import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { signUp } = useContext(AuthProviderContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    // get value form input field
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // set error null for default
    setError(null);
    // check some password validation
    if (password !== confirmPassword) {
      setError("Password not matching");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("At least a capital letter must be");
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("At lest one special character must be");
      return;
    } else {
      alert("Account Create Successfully");
    }
    signUp(email, password)
      .then((userCredentials) => {
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero  mx-auto px-[20%] h-[calc(100vh-60px)]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-rose-500">{error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">
              Already have an Account?{" "}
              <Link to={"/login"} className="text-orange-500 underline">
                Log in
              </Link>
            </p>
            <div className="flex justify-center items-center gap-3">
              <div className="w-full h-0.5 bg-slate-400"></div>
              <p>or</p>
              <div className="w-full h-0.5 bg-slate-400"></div>
            </div>
            <Link className="border border-slate-400 rounded-md p-3 text-center">
              <p>Continue With Google</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
