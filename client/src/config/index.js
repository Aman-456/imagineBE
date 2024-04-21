import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
const clientCredentials = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

let auth, db, storage;

// Check if the code is running in a client-side context
// Initialize Firebase only if there are no apps
if (!getApps().length) {
  initializeApp(clientCredentials);
  auth = getAuth();
  db = getFirestore();
  storage = getStorage();
  // Check if Firebase Analytics is supported
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics();
    }
  });
}

export { auth, db, storage };
