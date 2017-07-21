import firebase from 'firebase';

import { LOGIN_USER_SUCCESS, LOGOUT_USER, LOGIN_USER_FAIL } from '.';

export const loginUser = ({ email, password }) => {
	return (dispatch) => (
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch((error) => {
				dispatch({ type: LOGIN_USER_FAIL, payload: error.message })
			})
	)
}

export const createUser = ({ email, password, name, address, city, state, phone}) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user) => {
				firebase.database().ref('/users').child(user.uid).set({
					name,
					address,
					city,
					state,
					phone
				})
			})
			.catch((error) => {
				dispatch({ type: LOGIN_USER_FAIL, payload: error.message })
			});
	}
}

export const authStateChanged = () => {
	return (dispatch) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// User Is Logged In
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
			} else {
				// User Is Logged Out
				dispatch({ type: LOGOUT_USER })
			}
		});
	}
}
