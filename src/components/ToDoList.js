import React from 'react';
import ToDoListItem from './ToDoListItem';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import './ToDoList.css';
import Preloader from './Preloader';
import nothing from '../img/nothing_found.png';

class ToDoList extends React.Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo, auth } = this.props;
    event.preventDefault();
    addToDo({ title: addFormValue }, auth.uid);
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state;
    if (addFormVisible) {
      return (
        <div id="todo-add-form" className="col s10 offset-s1">
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">note_add</i>
              <input
                value={addFormValue}
                onChange={this.handleInputChange}
                id="toDoNext"
                type="text"
              />
              <label htmlFor="toDoNext">What To Do Next</label>
            </div>
          </form>
        </div>
      );
    }
  };


renderToDos() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <img
          alt="Nothing was found"
          id="nothing-was-found"
          src={nothing}
        />
        <h4>You have completed all the tasks</h4>
        <p>Start by clicking add button in the bottom of the screen</p>
      </div>
    );
  }

  componentWillMount() {
    const { auth } = this.props;
    this.props.fetchToDos(auth.uid);
  }

  render() {
    const { addFormVisible } = this.state;


    if (this.props.data === "loading") {
      return (
        <div className="row center-align">
          <div className="col s4 offset-s4">
            <Preloader />
          </div>
        </div>
      );
    }


    return (
      <div className="to-do-list-container">
        <div className="row">
          {this.renderAddForm()}
          {this.renderToDos()}
        </div>
        <div className="fixed-action-btn">
        <button
            onClick={this.props.signOut}
            id="sign-out-button"
            className="btn-floating btn-large teal darken-4"
          >
            <i className="large material-icons">exit_to_app</i>
          </button>
          <button
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className="btn-floating btn-large teal darken-4"
          >
            {addFormVisible ? (
              <i className="large material-icons">close</i>
            ) : (
              <i className="large material-icons">add</i>
            )}
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ data, auth }) => {
  return {
    data,
    auth
  };
};

export default connect(mapStateToProps, actions)(ToDoList);



//mapstatetoprops alows to access data fro store