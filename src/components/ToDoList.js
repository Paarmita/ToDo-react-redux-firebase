import React from 'react';
import ToDoListItem from './ToDoListItem';
import { connect } from "react-redux";
import * as actions from "../actions";
import './ToDoList.css';


class ToDoList extends React.Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  renderAddForm = () => {
    if (this.state.addFormVisible) {
      return (
        <div className="col-sm-12">
          <form onSubmit={this.handleFormSubmit}>

            <div className="input-field">
              <i className="material-icons prefix">note_add</i>
              <input
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
              <label for="toDoNext">What To Do Next</label>
            </div>

          </form>
        </div>
      );
    }
  };

render() {
  const { addFormVisible } = this.state;


    return (
      <div className="container">
        <div className="row">
          {this.renderAddForm()}
          <ToDoListItem />
        </div>
        <div className="container">
          <button
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className="btn btn-default">
            {addFormVisible ? (<i className="large material-icons">close</i>) : (<i className="large material-icons">add</i>)}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default ToDoList;