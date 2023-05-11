// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  apiKey: "AIzaSyC8BFefiUrkj21ieAVqfUTdkSIKHS9sn-Y",
  authDomain: "car-doctor-fc4b8.firebaseapp.com",
  projectId: "car-doctor-fc4b8",
  storageBucket: "car-doctor-fc4b8.appspot.com",
  messagingSenderId: "206852538992",
  appId: "1:206852538992:web:6244e58876ebfa4c466ab5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
