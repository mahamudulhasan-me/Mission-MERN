import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        const errMessage = err.message;
        console.log(errMessage);
      });
  };
  return (
    <div>
      <h2>Please Login...</h2>
      <button onClick={handleGoogleSignIn}>Login by google</button>
    </div>
  );
};

export default Login;
