import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);


const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

export const authRef = firebase.auth();// listen if user sign in or sign out
export const provider = new firebase.auth.GoogleAuthProvider();// to sign in

// attach listener on todos list of tasks and each time the list changes, 
// app will know there was a change in the data and will fetch new data from firebase