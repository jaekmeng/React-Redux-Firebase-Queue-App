import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDSlzx-fTFJsPSNB2g_8rr0ykiX_v25sQw",
    authDomain: "accenture-qskip.firebaseapp.com",
    databaseURL: "https://accenture-qskip.firebaseio.com",
    projectId: "accenture-qskip",
    storageBucket: "",
    messagingSenderId: "340889420456",
    appId: "1:340889420456:web:3972aa451af70e77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;