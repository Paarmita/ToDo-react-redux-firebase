import { FETCH_TODOS } from '../actions/types';


// All actions triggered from component go through all the reducers. 
// Now each reducer checks the action type and if it’s the type reducer knows, it updates the data in store.


export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
