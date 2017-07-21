import firebase from 'firebase';

import { NEW_ORDER, NEW_ORDER_SUBMITTED, NEW_ORDER_SUCCESS } from '.';

export const newOrder = (values) => {
	return {
		type: NEW_ORDER,
		payload: values
	}
}

export const submitOrder = (order, callback) => {
	const { uid } = firebase.auth().currentUser;

	return (dispatch) => {
		dispatch({ type: NEW_ORDER_SUBMITTED })
		firebase.database().ref('orders/' + uid).push(order)
		.then(() => {
			dispatch({ type: NEW_ORDER_SUCCESS });
			callback();
		});
	}
}
