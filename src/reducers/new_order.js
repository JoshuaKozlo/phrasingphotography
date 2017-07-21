import { NEW_ORDER, NEW_ORDER_SUBMITTED, NEW_ORDER_SUCCESS } from '../actions';

const INITIAL_STATE = { state: 'NC' }

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case NEW_ORDER:
		return action.payload;
	case NEW_ORDER_SUBMITTED:
		return { ...state, loading: true }
	case NEW_ORDER_SUCCESS:
		return INITIAL_STATE;
	default:
		return state;
	}
}
