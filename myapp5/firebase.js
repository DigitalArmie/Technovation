// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVWg0uPeEjctfYmVylFTEgZEwt4J9f-0A",
  authDomain: "charity-bridge.firebaseapp.com",
  projectId: "charity-bridge",
  storageBucket: "charity-bridge.appspot.com",
  messagingSenderId: "523530274655",
  appId: "1:523530274655:web:f89859e6ff21ba02a918ea",
  measurementId: "G-SCJPKPXD2D"
};

// Initialize Firebase
let app;
if(firebase.apps.length == 0)
{
  app= firebase.initializeApp(firebaseConfig);
} else{
  app=firebase.app();
}
const auth = firebase.auth()
export { auth };

