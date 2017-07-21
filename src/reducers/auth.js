import { LOGIN_USER_SUCCESS, LOGOUT_USER, LOGIN_USER_FAIL } from '../actions';

const INITIAL_STATE = { user: null }

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case LOGIN_USER_SUCCESS:
		return { user: action.payload } 
	case LOGOUT_USER:
		return INITIAL_STATE
	case LOGIN_USER_FAIL:
		return { ...state, error: action.payload }
	default:
		return state;
	}
}