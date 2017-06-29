import { NEW_ORDER } from '../actions';

const INITIAL_STATE = { state: 'NC', address: '635 Marshtree Lane', city: 'Fayetteville', notes: 'Can you get some shots of the pool', access: 'The house key is under the door mat' }

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
	case NEW_ORDER:
		return action.payload;
	default:
		return state;
	}
}
