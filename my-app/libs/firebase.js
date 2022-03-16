import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

if (!firebase.apps.length) {
    const firebaseConfig = {

        apiKey: "AIzaSyAE0hdZr-AwJ_XVltOP4qn81H7ePUBocl4",
      
        authDomain: "proj10-67a25.firebaseapp.com",
      
        projectId: "proj10-67a25",
      
        storageBucket: "proj10-67a25.appspot.com",
      
        messagingSenderId: "976093516866",
      
        appId: "1:976093516866:web:a851584dc2995ee62b89db",
      
        measurementId: "G-DYM5Y06XQV"
      
    };
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();