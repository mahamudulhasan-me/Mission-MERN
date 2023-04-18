import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthProviderContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //set redirect location
  const location = useLocation();
  console.log(location);
  const redirectTo = location.state ? location.state : "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredentials) => {
        e.target.reset();
        navigate(redirectTo);
      })
      .catch((err) => setError(err.message));
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
          <form onSubmit={handleSignIn} className="card-body">
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
                type={show ? "text" : "password"}
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label" onClick={() => setShow(!show)}>
                <p className="label-text-alt link link-hover">
                  {/* {show ? <span>Hide</span> : <span>Show</span>} */}
                  {show ? "Hide" : "Show"}
                </p>
              </label>
            </div>
            <p className="text-rose-500">{error.slice(10)}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">
              New to ema-john?{" "}
              <Link to={"/sign-up"} className="text-orange-500 underline">
                Create new account
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

export default Login;
