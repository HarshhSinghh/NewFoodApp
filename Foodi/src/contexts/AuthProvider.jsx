import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config.js";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateUserProfile = ({ name, phototUrl }) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      phototURL: phototUrl,
    });
  };

  // Check Signed In user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axios.post("http://localhost:5173/jwt", userInfo).then((response) => {
          localStorage.setItem("access-token", response.data.token);
        });

        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    createUser,
    signUpWithGoogle,
    login,
    logout,
    updateUserProfile,
    loading, // Uncomment and implement this function if needed
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
