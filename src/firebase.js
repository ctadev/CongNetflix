import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASoq89wuSQ-ysoL3OevdArH6uPirzZIFo",
  authDomain: "netflix-af896.firebaseapp.com",
  projectId: "netflix-af896",
  storageBucket: "netflix-af896.appspot.com",
  messagingSenderId: "20054474738",
  appId: "1:20054474738:web:862a7c616ee79ebabf356b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
