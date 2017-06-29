import { SIGN_IN, SIGN_OUT } from '../actions';

export default function(state = null, action) {
	switch(action.type) {
	case SIGN_IN:
		return action.payload
	case SIGN_OUT:
		return null
	default:
		return state;
	}
}