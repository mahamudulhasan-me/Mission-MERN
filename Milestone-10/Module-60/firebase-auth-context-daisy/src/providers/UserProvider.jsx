import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   handle user singIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   check user login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  //   handle log out
  const logOut = () => {
    return signOut(auth);
  };
  const userInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
