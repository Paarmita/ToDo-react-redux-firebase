import { todosRef } from '../config/firebase';
// import {CONST} from '../constants/constants';
import { FETCH_TODOS } from "./types";

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};



// All actions then call dispatch method which takes one argument which is object with type and payload. 
// Type represents action type so the reducer know if it should handle the action. 
// And payload represents actual data.