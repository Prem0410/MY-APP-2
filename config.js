import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyDlryE2y4sUldkXSiN2EAJvvCmVhh4p774",
  authDomain: "my-second-app-a3012.firebaseapp.com",
  databaseURL: "https://my-second-app-a3012-default-rtdb.firebaseio.com",
  projectId: "my-second-app-a3012",
  storageBucket: "my-second-app-a3012.appspot.com",
  messagingSenderId: "934146542394",
  appId: "1:934146542394:web:8b60b452d779bf74925e03"
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
