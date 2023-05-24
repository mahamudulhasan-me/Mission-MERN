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
  const [isLoading, setIsLoading] = useState(true);

  //   firebase operation
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //   create new user with email and password
  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in with google
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // sign in with email password
  const logInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   check user is login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      return () => unsubscribe;
    });
  }, []);

  //   logOut
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    isLoading,
    logInWithGoogle,
    logInWithEmailPassword,
    registerNewUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
