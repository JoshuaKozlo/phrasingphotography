import firebase from 'firebase';

import { FETCH_ORDERS } from '.';

export const fetchOrders = () => {
	const uid = 'UID1qaz'

	return (dispatch) => {
		firebase.database().ref(`orders/${uid}`)
			.on('value', snapshot => {
				dispatch({ type: FETCH_ORDERS, payload: snapshot.val() });
			});
	};
};
