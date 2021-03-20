import * as firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyAs5NrEqzy8sckIxkGfxnq4ijEXrsan248",
    authDomain: "hindustansports-9903f.firebaseapp.com",
    databaseURL: "https://hindustansports-9903f-default-rtdb.firebaseio.com",
    projectId: "hindustansports-9903f",
    storageBucket: "hindustansports-9903f.appspot.com",
    messagingSenderId: "991174501570",
    appId: "1:991174501570:web:80b1f5f8f0749229a5475b",
    measurementId: "G-859E6HSVTH"
  };
  // Initialize Firebase
 var fireDb= firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default fireDb.database().ref();