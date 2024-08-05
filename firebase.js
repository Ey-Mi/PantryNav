import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbjtDayE823i1eqjLub8mmxWrsN5830hU",
  authDomain: "myinventory-cd3a9.firebaseapp.com",
  projectId: "myinventory-cd3a9",
  storageBucket: "myinventory-cd3a9.appspot.com",
  messagingSenderId: "983962034569",
  appId: "1:983962034569:web:6186fc68e98e47d95a4158",
  measurementId: "G-9MW703DXES"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};