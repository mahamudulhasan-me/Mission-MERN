import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.init";

const EmailSignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const auth = getAuth(app);
  const emailSignUpHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(password);

    setError("");
    setSuccess("");
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("At lest one UpperCase character is required");
      return;
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError("At lest one special character is required");
      return;
    }
    if (!/(?=.*[0-9])/.test(password)) {
      setError("At lest one number is required");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        e.target.reset();
        setSuccess("user create successfully");
        setError(null);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  return (
    <div className="w-4/5 mx-auto  h-[calc(100vh-60px)] grid grid-cols-2 justify-center items-center">
      <div>
        <img src="/undraw_access_account_re_8spm.svg" alt="" />
      </div>
      <form onSubmit={emailSignUpHandler}>
        <h2 className="text-3xl font-semibold mb-8">Sign Up</h2>
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
          <button className="btn btn-outline">Sign UP</button>
        </div>
        <p className="text-rose-500 font-semibold">{error}</p>
        <p className="text-green-500 font-semibold">{success}</p>
      </form>
    </div>
  );
};

export default EmailSignUp;
