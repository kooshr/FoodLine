import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl73oj_YTcUAP2lPPwdAPhF4ZANUqzMVY",
  authDomain: "food-delivery-250ba.firebaseapp.com",
  databaseURL: "https://food-delivery-250ba-default-rtdb.firebaseio.com",
  projectId: "food-delivery-250ba",
  storageBucket: "food-delivery-250ba.appspot.com",
  messagingSenderId: "738260764703",
  appId: "1:738260764703:web:ea6bae574df4e1da222d2a",
  measurementId: "G-ZK37CXRNGF",
};

app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = initializeAuth(app, {
//   persistence: browserSessionPersistence,
//   popupRedirectResolver: undefined,
// });
export const db = getFirestore();
