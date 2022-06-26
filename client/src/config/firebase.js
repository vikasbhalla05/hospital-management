import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyCrd26R8b76fz9rHYG7v4xC8AGX04DJ2wM",
  authDomain: "h2archives-a6762.firebaseapp.com",
  projectId: "h2archives-a6762",
  storageBucket: "h2archives-a6762.appspot.com",
  messagingSenderId: "1030679120209",
  appId: "1:1030679120209:web:2907537bbe58ddafabeb70",
  measurementId: "G-F6H13FCG9B"
});



export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

// const app = initializeApp({
//     apiKey: "AIzaSyC2qDAGvDeBUkZyVkJr28e98r0UXXteW6I",
//     authDomain: "ledger-94c67.firebaseapp.com",
//     projectId: "ledger-94c67",
//     storageBucket: "ledger-94c67.appspot.com",
//     messagingSenderId: "342030470753",
//     appId: "1:342030470753:web:4a939f47d4eff715f46420",
//     measurementId: "G-41E8E8R1ZC"
// });