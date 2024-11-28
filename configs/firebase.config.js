import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbv8kOYRwjcd_00GinKtkMK4ms-jUugxg",
  authDomain: "rewardlabapp.firebaseapp.com",
  projectId: "rewardlabapp",
  storageBucket: "rewardlabapp.firebasestorage.app",
  messagingSenderId: "463813160255",
  appId: "1:463813160255:web:ea52678974b3f25b19378a",
  measurementId: "G-4YG083CQL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default auth;

