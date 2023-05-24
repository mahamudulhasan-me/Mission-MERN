import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //   signIn with google
  const logInWithGoogle = () => {
    setLoader(false);
    return signInWithPopup(auth, googleProvider);
  };

  //   logout
  const logOut = () => {
    return signOut(auth);
  };
  //   check user is login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      const userId = {
        userId: currentUser?.uid,
      };
      if (currentUser) {
        fetch(`http://localhost:4040/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userId),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data?.token) {
              localStorage.setItem("jobHunter-token", data.token);
            }
          });
      } else {
        localStorage.removeItem("jobHunter-token");
      }
      return () => unsubscribe();
    });
  }, []);

  const authInfo = { user, logInWithGoogle, logOut, loader };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
