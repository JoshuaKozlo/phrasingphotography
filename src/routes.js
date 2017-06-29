import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import Orders from './screens/orders';
import NewOrderForm from './components/NewOrderForm';
import CheckOut from './screens/checkout';

class Routes extends Component {

	render() {
		const { auth } = this.props;

		return (
			<BrowserRouter>
				<div>
					<Route path="/" render={props => <Navigation {...props} auth={auth} />} />
					<Switch>
						<Route path="/orders/new/checkout" component={CheckOut} />
						<Route path="/orders/new" component={NewOrderForm} />
						<Route path="/orders" component={Orders} />
						<Route path="/" render={() => <h1>HOME</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Routes;
