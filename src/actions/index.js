
// import {CONST} from '../constants/constants';
import { todosRef, authRef, provider } from '../config/firebase';
import { FETCH_TODOS, FETCH_USER } from './types';

export const addToDo = (newToDo, uid) => async dispatch => {
  todosRef
    .child(uid)
    .push()
    .set(newToDo);
};

export const completeToDo = (completeToDoId, uid) => async dispatch => {
  todosRef
    .child(uid)
    .child(completeToDoId)
    .remove();
};

export const fetchToDos = uid => async dispatch => {
  todosRef.child(uid).on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const fetchUser = uid => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      // User is not signed in ie signout
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {
      // The signed-in user info.
      var user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};

// All actions then call dispatch method which takes one argument which is object with type and payload. 
// Type represents action type so the reducer know if it should handle the action. 
// And payload represents actual data.