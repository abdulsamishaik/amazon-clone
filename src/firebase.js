// import  Firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDgqgRbQ7GtQAkDKtR90IplVDQs0vdMevo",
//     authDomain: "clone-sami.firebaseapp.com",
//     projectId: "clone-sami",
//     storageBucket: "clone-sami.appspot.com",
//     messagingSenderId: "1040891952640",
//     appId: "1:1040891952640:web:4057aa6615e45f9cf362e5",
//     measurementId: "G-5CQFS2XDR7"
//   };
  

//   const firebaseApp = Firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = Firebase.auth();
  
// export { db , auth } ;

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3P-qr7Mrlg74BQymT7bykV2HYwbU8Gk8",
  authDomain: "amz-clone-medium.firebaseapp.com",
  databaseURL: "https://amz-clone-medium.firebaseio.com",
  projectId: "amz-clone-medium",
  storageBucket: "amz-clone-medium.appspot.com",
  messagingSenderId: "769450879220",
  appId: "1:769450879220:web:cbff61e0ee041531e456a1",
  measurementId: "G-CZDBWXMWF7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 

