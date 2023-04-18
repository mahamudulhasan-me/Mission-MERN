import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthProviderContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const auth = getAuth(app);

  //   handel user sign up
  const signUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   handle user login
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // handle user logout
  const logOut = () => {
    return signOut(auth);
  };

  //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubscribe;
  }, []);

  const authInfo = {
    user,
    signUp,
    signIn,
    logOut,
    loader,
  };
  return (
    <AuthProviderContext.Provider value={authInfo}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;
