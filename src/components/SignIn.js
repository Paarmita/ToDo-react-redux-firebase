
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignIn.css';
import { signIn } from '../actions';
import PropTypes from 'prop-types';
import welcome from '../img/tenor.gif';

class Signin extends Component {

  static contextTypes = {
    router: PropTypes.object
  };
  

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/app");
    }
  }

  render() {
    return (
     <div className="row social-signin-container">
        <div className="col s10 offset-s1 center-align">
          <img alt="Sign in" id="sign-in" src={welcome} />
          <h5 id="sign-in-header">Sign In to start</h5>
          <a href="#" className="social-signin" onClick={this.props.signIn}>
            <i className="fa fa-google social-signin-icon" />
            Sign In With Google
          </a>
        </div>
      </div>
    );
  }
}


function mapStateToProps({ auth }) {
  return { auth };
}
 export default connect(mapStateToProps, { signIn })(Signin);