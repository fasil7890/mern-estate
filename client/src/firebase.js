// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { VITE_FIREBASE_API_KEY } from '../env';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-c621a.firebaseapp.com',
  projectId: 'mern-estate-c621a',
  storageBucket: 'mern-estate-c621a.appspot.com',
  messagingSenderId: '519974206933',
  appId: '1:519974206933:web:4bed116347ac2ee339515c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
