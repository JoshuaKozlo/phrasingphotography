import React, { Component } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Spinning from 'grommet/components/icons/Spinning';

import Cart from '../components/Cart';
import CheckoutCard from '../components/CheckoutCard';

import { submitOrder } from '../actions/new_order';


class Checkout extends Component {
	componentDidMount() {
		const { address, city, state } = this.props.order;
		if (!address || !city || !state) {
			this.props.history.push('/')
		}
	}

	renderButton() {
		const { order, history, submitOrder } = this.props;

		if (order.loading) {
			return <Spinning />
		}
		return <Button label="Submit Order" primary onClick={() => submitOrder(order, () => history.push('/orders/new/thankyou'))} />
	}

	render() {
		const { order, history } = this.props;

		return (
			<div>
				<Cart order={order} handleEdit={() => history.push('/orders/new')} />
				<Box align="center">
					<CheckoutCard>
						<Box align="center" margin="small">
							{this.renderButton()}
						</Box>
					</CheckoutCard>
				</Box>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		order: state.newOrder
	}
}

Checkout = connect(mapStateToProps, { submitOrder })(Checkout);
export default Checkout;
