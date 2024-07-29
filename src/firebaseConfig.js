// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqiPNt2kFkTu-CckIcBecWR22evUTKt04",
  authDomain: "mytaxi-c9c8a.firebaseapp.com",
  projectId: "mytaxi-c9c8a",
  storageBucket: "mytaxi-c9c8a.appspot.com",
  messagingSenderId: "837996636412",
  appId: "1:837996636412:web:ad73c3a684f296e4774f79",
  measurementId: "G-YQSC8YTSHF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
