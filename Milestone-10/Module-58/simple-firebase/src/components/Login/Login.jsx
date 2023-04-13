import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  console.log(user);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleGoogleLogin}>Login</button>
      )}

      {user && (
        <div>
          <img src={user?.photoURL} alt="" />
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
