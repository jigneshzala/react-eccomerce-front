import firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnV4J1B2tWsO_cAoHfh3zqXG2hoXReU-I",
  authDomain: "ecommerce-2b94d.firebaseapp.com",
  projectId: "ecommerce-2b94d",
  storageBucket: "ecommerce-2b94d.appspot.com",
  messagingSenderId: "447133649717",
  appId: "1:447133649717:web:a26927774233b84c8a1a7c",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export
export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.googleAuthProvider();
