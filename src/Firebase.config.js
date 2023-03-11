import { initializeApp } from "firebase/app";

  const firebaseConfig = {

    apiKey: "AIzaSyCMmQW-EReT9hypUUuVCdyFzY-8Q4tTsgg",

    authDomain: "artistic-communication.firebaseapp.com",

    databaseURL: "https://artistic-communication-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "artistic-communication",

    storageBucket: "artistic-communication.appspot.com",

    messagingSenderId: "108634737900",

    appId: "1:108634737900:web:86380c050a7233a20629c9"

  };

  const app = initializeApp(firebaseConfig);

  export default app;