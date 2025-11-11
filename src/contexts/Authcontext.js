import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    console.log('AuthContext: Setting up auth listener');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('AuthContext: Auth state changed', user);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout,
    isAdmin: !!currentUser // Any logged-in user is considered an admin for CMS access
  };

  console.log('AuthContext: Current state', {
    currentUser: currentUser?.email,
    isAdmin: value.isAdmin,
    loading
  });

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
