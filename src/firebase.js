// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// Replace these with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeMS-TmzsLSju7lmd5UJUivCVxESoChgw",
  authDomain: "awcorporate-63368.firebaseapp.com",
  projectId: "awcorporate-63368",
  storageBucket: "awcorporate-63368.firebasestorage.app",
  messagingSenderId: "891060270766",
  appId: "1:891060270766:web:f7fa2c3f029666d9461f3f",
  measurementId: "G-3BVTJT0MNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
