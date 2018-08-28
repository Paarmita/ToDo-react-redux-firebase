import React from 'react';

import { connect } from 'react-redux';
import { completeToDo } from '../actions';

class ToDoListItem extends React.Component {


  handleCompleteClick = completeToDoId => {
    const { completeToDo, auth } = this.props;
    completeToDo(completeToDoId, auth.uid);
  };

render() {
	
    const { todoId, todo } = this.props;
    return(
    	<div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4>
          {todo.title}{" "}
          <span
            onClick={() => this.handleCompleteClick(todoId)}
            className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
          >
            <i className="large material-icons">done</i>
          </span>
        </h4>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};
 export default connect(mapStateToProps, { completeToDo })(ToDoListItem);

 
//to connect action to components use connect