import React, { Component } from 'react';
import { connect } from 'react-redux';

import Columns from 'grommet/components/Columns';

import Cart from '../components/Cart';


class Checkout extends Component {

	render() {
		return (
			<Cart order={this.props.order} handleEdit={() => this.props.history.push('/orders/new')} />
		);
	}
}

function mapStateToProps(state) {
	return {
		order: state.newOrder
	}
}

Checkout = connect(mapStateToProps, null)(Checkout);
export default Checkout;
