import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDa-0chhnzw7nKDeKlxMPR58LXYUrdipQ0",
    authDomain: "expresso-emporisum.firebaseapp.com",
    projectId: "expresso-emporisum",
    storageBucket: "expresso-emporisum.firebasestorage.app",
    messagingSenderId: "237027551280",
    appId: "1:237027551280:web:270193fecfeed241d0a5f5"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export default auth