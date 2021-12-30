import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBINjI6wX3WKPsjS2E-TdRW9acAaN87wr4",
    authDomain: "insta-clone-react-c9e65.firebaseapp.com",
    databaseURL: "https://insta-clone-react-c9e65.firebaseio.com",
    projectId: "insta-clone-react-c9e65",
    storageBucket: "insta-clone-react-c9e65.appspot.com",
    messagingSenderId: "1007307097424",
    appId: "1:1007307097424:web:190c6af9761a2452429855",
    measurementId: "G-BR44KNDVEV"

  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};

//   export default db