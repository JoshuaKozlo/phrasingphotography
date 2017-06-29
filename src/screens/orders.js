import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import AddButton from '../components/AddButton';
import { fetchOrders } from '../actions/orders';

class Orders extends Component {
	componentDidMount() {
		this.props.fetchOrders();
	}

	renderOrders() {
		return _.map(this.props.orders, (order, id) => {
			const { address, city, state, due, scheduled, status, notes } = order;

			return (
				<TableRow key={id}>
					<td>{ address }</td>
					<td>{ city }</td>
					<td>{ state }</td>
					<td>{ due }</td>
					<td>{ scheduled }</td>
					<td>{ status }</td>
					<td>{ notes }</td>
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
						<th>City</th>
						<th>State</th>
						<th>Due</th>
						<th>Scheduled</th>
						<th>Status</th>
						<th>Notes</th>
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

export default connect(mapStateToProps, { fetchOrders })(Orders);
