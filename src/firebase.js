import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzeAPlGFY3SBK8vJDRsOC92Rth4DeFSSM",
  authDomain: "react-login-app-84940.firebaseapp.com",
  projectId: "react-login-app-84940",
  storageBucket: "react-login-app-84940.firebasestorage.app",
  messagingSenderId: "218590994001",
  appId: "1:218590994001:web:592ba18d36516ad7d0a270",
  measurementId: "G-Q1PTYDNLYV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();