import { NEW_ORDER } from '.';

export const newOrder = (values) => {
	return {
		type: NEW_ORDER,
		payload: values
	}
}
