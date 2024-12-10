import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { successAlert } from "../components/SuccessAlert";
import auth from "./../firebaseInit/firebase.init";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titles, setTitle] = useState("Coffee Maker");
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  document.title = titles + " | Coffee Maker";
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInViaGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        successAlert("out");
        // setUser(null)
      })
      .catch((error) => console.log(error));
  };

  const userDelete = async (email) => {
    let result = null;
    await fetch("http://localhost:3000/delete-firebase-user", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => (result = data));
    console.log(result);
    return result;
  };
  const userInfo = {
    createUser,
    user,
    setUser,
    logInViaGoogle,
    signIn,
    loading,
    setLoading,
    setTitle,
    signOutUser,
    userDelete,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
