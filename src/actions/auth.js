import firebase from 'firebase';

import { SIGN_IN, SIGN_OUT } from '.';

export const signInUser = ({ email, password }) => {
	firebase.auth().signInWithEmailAndPassword(email, password)
}

export const authStateChanged = () => {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// User Is Logged In
				dispatch({ type: SIGN_IN, payload: user })
			} else {
				// User Is Logged Out
				dispatch({ type: SIGN_OUT })
			}
		});
	}
}