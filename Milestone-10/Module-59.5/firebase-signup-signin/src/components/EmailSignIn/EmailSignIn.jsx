import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.init";

const EmailSignIn = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);
  setError(" ");
  setSuccess(" ");
  const emailSignInHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("login success");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };
  return (
    <div className="w-4/5 mx-auto  h-[calc(100vh-60px)] grid grid-cols-2 justify-center items-center">
      <div>
        <img src="/undraw_access_account_re_8spm.svg" alt="" />
      </div>
      <form onSubmit={emailSignInHandler}>
        <h2 className="text-3xl font-semibold mb-8">Sign In</h2>
        <div className="space-y-4 flex flex-col justify-start items-start">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Type here password"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
          <button className="btn btn-outline">Login</button>
        </div>
        <p className="text-rose-500 font-semibold">{error}</p>
        <p className="text-green-500 font-semibold">{success}</p>
      </form>
    </div>
  );
};

export default EmailSignIn;
