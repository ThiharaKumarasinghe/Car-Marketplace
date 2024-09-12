// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBSASE_API_Key,
  authDomain: "car-marketplace-f3919.firebaseapp.com",
  projectId: "car-marketplace-f3919",
  storageBucket: "car-marketplace-f3919.appspot.com",
  messagingSenderId: "71944279004",
  appId: "1:71944279004:web:08b7fcec6df5db16e97519",
  measurementId: "G-GX0E7EB33R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
