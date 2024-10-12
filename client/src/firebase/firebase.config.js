import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvyLGaaXgAGerEK94BTiIb8QBMEqDtBNI",
  authDomain: "solosphere2-6bf6a.firebaseapp.com",
  projectId: "solosphere2-6bf6a",
  storageBucket: "solosphere2-6bf6a.appspot.com",
  messagingSenderId: "128602249286",
  appId: "1:128602249286:web:24769449f091b530ff1247"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;