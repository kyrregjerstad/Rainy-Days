import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzSCUvhdSi826ofA2Rhmeg7v73CGTkYW8",
  authDomain: "rainy-days-99bde.firebaseapp.com",
  projectId: "rainy-days-99bde",
  storageBucket: "rainy-days-99bde.appspot.com",
  messagingSenderId: "633147208794",
  appId: "1:633147208794:web:8d29423d466538c1061463",
  measurementId: "G-BVZMH3JL3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
