import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import Orders from './screens/orders';
import NewOrderForm from './components/NewOrderForm';
import CheckOut from './screens/checkout';
import ThankYou from './screens/thankyou';
import Home from './screens/home';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

class Routes extends Component {

	render() {
		const { user } = this.props;
		
		return (
			<BrowserRouter>
				<div>
					<Route path="/" render={props => <Navigation {...props} user={user} />} />
					<Switch>
						<Route path="/orders/new/thankyou" render={() => <ThankYou user={user} />} />
						<Route path="/orders/new/checkout" component={CheckOut} />
						<Route path="/orders/new" render={(props) => (
							user ?
								<NewOrderForm {...props} />:
								<Redirect to="/login" />
						)} />
						<Route path="/orders" render={(props) => (
							user ?
								<Orders />:
								<Redirect to="/login" />
						)}/>
						<Route path="/login" render={() => (
							user ?
								<Redirect to="/orders" />:
								<LoginForm />
						)}/>
						<Route path="/signup" render={() => (
							user ?
								<Redirect to="/orders" />:
								<SignUpForm />
						)}/>
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default Routes;
