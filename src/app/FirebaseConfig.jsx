// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTzWO7TPzj-WCVf9BMktpj0UwGgKLuchg",
  authDomain: "blogweb-24de4.firebaseapp.com",
  projectId: "blogweb-24de4",
  storageBucket: "blogweb-24de4.appspot.com",
  messagingSenderId: "213554889456",
  appId: "1:213554889456:web:b8b8764269f6ed319d3835",
  measurementId: "G-GJ762D2W1S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);