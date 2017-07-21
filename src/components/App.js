import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import App from 'grommet/components/App';
import 'grommet/scss/vanilla/index.scss';
import '../styles/main.scss';

import Routes from '../routes';
import { authStateChanged } from '../actions/auth';


class BasicApp extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBAg4GexW7fw5huz-uouZ9GDGYzPjZSYMo",
      authDomain: "pie-in-the-sky-9db36.firebaseapp.com",
      databaseURL: "https://pie-in-the-sky-9db36.firebaseio.com",
      projectId: "pie-in-the-sky-9db36",
      storageBucket: "pie-in-the-sky-9db36.appspot.com",
      messagingSenderId: "53818267115"
    });
  }

  componentDidMount() {
    this.props.authStateChanged()
  }

 render() {
    return (
      <App>
        <Routes user={this.props.user} />
      </App>
    );
  }
}

function mapStateToProps({ auth }) {
  return { 
    user: auth.user
  }
}

export default connect(mapStateToProps, { authStateChanged })(BasicApp);
