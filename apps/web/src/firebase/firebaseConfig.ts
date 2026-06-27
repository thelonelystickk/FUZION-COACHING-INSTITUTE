import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBExHnrcKAm8Lz25ZXlQJrFpFsuaMJe4wM",
  authDomain: "fuzion-coaching-institute.firebaseapp.com",
  projectId: "fuzion-coaching-institute",
  storageBucket: "fuzion-coaching-institute.firebasestorage.app",
  messagingSenderId: "629429740936",
  appId: "1:629429740936:web:d5ccc319b4f2aca345863d",
  measurementId: "G-0M3668CMN2",
};

export const app = initializeApp(firebaseConfig);

export const analytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
