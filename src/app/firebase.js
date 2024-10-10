import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCl6nfRawOek9F9nIyhx9Q9Rl7LEYgwdUg",
  authDomain: "next-auth-226a2.firebaseapp.com",
  projectId: "next-auth-226a2",
  storageBucket: "next-auth-226a2.appspot.com",
  messagingSenderId: "164099205193",
  appId: "1:164099205193:web:c8b8090c91f1cc182c3798",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };