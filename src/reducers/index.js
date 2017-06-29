import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import auth from './auth';
import orders from './orders';
import newOrder from './new_order';

const rootReducer = combineReducers({
	auth,
	orders,
	newOrder,
	form
});

export default rootReducer;
