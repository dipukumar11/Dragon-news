// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBMrrMHFcPHmxqsf1hmDV3B5OH5FsmTp4",
  authDomain: "dragon-news-potal.firebaseapp.com",
  projectId: "dragon-news-potal",
  storageBucket: "dragon-news-potal.appspot.com",
  messagingSenderId: "296298093324",
  appId: "1:296298093324:web:e774991d7bf33aac250729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;