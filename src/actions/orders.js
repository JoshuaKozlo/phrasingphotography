import firebase from 'firebase';

import { FETCH_ORDERS } from '.';

export const fetchOrders = () => {
	const uid = firebase.auth().currentUser.uid;

	return (dispatch) => {
		firebase.database().ref(`orders/${uid}`)
			.on('child_added', snapshot => {
				dispatch({ type: FETCH_ORDERS, payload: snapshot.val(), key: snapshot.key });
			});

		firebase.database().ref(`orders/${uid}`)
			.on('child_changed', snapshot => {
				console.log(snapshot.val());
				dispatch({ type: FETCH_ORDERS, payload: snapshot.val(), key: snapshot.key });
			});
	};
};

export const cancelListener = (uid) => {
	return () => {
		firebase.database().ref(`orders/${uid}`).off();
	}
}
