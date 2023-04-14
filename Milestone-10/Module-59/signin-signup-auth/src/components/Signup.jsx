import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.init";

const Signup = () => {
  const auth = getAuth(app);
  const [error, setError] = useState("");

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <h2>Register Here...</h2>
      <form onSubmit={handleEmailSignUp}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="input input-bordered input-accent w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="input input-bordered input-accent w-full max-w-xs"
        />{" "}
        <br />
        <p className="text-rose-500">{error}</p>
        <button className="btn btn-primary">Button</button>
      </form>
    </div>
  );
};

export default Signup;
