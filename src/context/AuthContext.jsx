import React, { createContext, useContext, useEffect, useState } from 'react';
import
  {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword
  } from "firebase/auth";
import auth from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>
{
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => { return createUserWithEmailAndPassword(auth, email, password) };
  const logout = () => { return signOut(auth) };
  const login = (email, password) => { return signInWithEmailAndPassword(auth, email, password) };
  const resetPassword = (email) => { return sendPasswordResetEmail(auth, email) };
  const updateUserEmail = (email) => { return updateEmail(auth.currentUser, email) };
  const updateUserPassword = (password) => { return updatePassword(auth.currentUser, password) };

  useEffect(() =>
  {
    const unsubscribe = onAuthStateChanged(auth, user =>
    {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        logout,
        login,
        resetPassword,
        updateUserEmail,
        updateUserPassword
      }}>
      {!loading && children} {/* loadding must be false to show children */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
