import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //logout
  const logOut = () => {
    return signOut(auth);
  };

  // check user sigin or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userInfo = {
        uid: currentUser.uid,
      };
      if (user && currentUser?.uid) {
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
          });
      } else {
        localStorage.removeItem("car-access-token");
      }
      setLoader(false);
      return () => unsubscribe;
    });
  }, []);
  const authInfo = {
    user,
    loader,
    signInWithGoogle,
    createUser,
    loginWithEmailAndPassword,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
