// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// .env.local file
/* 
VITE_apiKey=AIzaSyDQi3Yr9imUkv0_u_w5inrSIXUqMKBCjrw
VITE_authDomain=b11a10-client-side-ashahab007.firebaseapp.com
VITE_projectId=b11a10-client-side-ashahab007
VITE_storageBucket=b11a10-client-side-ashahab007.firebasestorage.app
VITE_messagingSenderId=850718892573
VITE_appId=1:850718892573:web:c6d040214506e96157dcf4 
*/
