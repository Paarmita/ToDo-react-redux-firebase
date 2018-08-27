import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";
firebase.initializeApp(FirebaseConfig);


const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");


// attach listener on todos list of tasks and each time the list changes, 
// app will know there was a change in the data and will fetch new data from firebase