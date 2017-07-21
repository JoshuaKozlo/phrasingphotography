import _ from 'lodash';
import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import AddButton from '../components/AddButton';
import { fetchOrders, cancelListener } from '../actions/orders';

class Orders extends Component {
	state = {
		uid: null
	}

	componentDidMount() {
		this.setState({ uid: firebase.auth().currentUser.uid });
		this.props.fetchOrders();
	}

	componentWillUnmount() {
		this.props.cancelListener(this.state.uid);
	}

	renderOrders() {
		return _.map(this.props.orders, (order, id) => {
			const { address, scheduled, status, access, notes } = order;

			return (
				<TableRow key={id}>
					<td>{ address }</td>
					<td>{ access }</td>
					<td>{ notes }</td>
					<td>{ scheduled }</td>
					<td>{ status }</td>
				</TableRow>
			);
		});
	}

	render() {

		return (
			<div>
			<Table>
				<thead>
					<tr>
						<th>Address</th>
						<th>Property Access</th>
						<th>Notes</th>
						<th>Scheduled</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{this.renderOrders()}
				</tbody>
			</Table>
			<AddButton />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { orders: state.orders };
}

export default connect(mapStateToProps, { fetchOrders, cancelListener })(Orders);
