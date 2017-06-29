import React from 'react';

import Button from 'grommet/components/Button';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import EditIcon from 'grommet/components/icons/base/Edit';

const Cart = (props) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Address</th>
					<th>City</th>
					<th>State</th>
					<th>Property Access</th>
					<th>Notes</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<TableRow>
					<td>{ props.order.address }</td>
					<td>{ props.order.city }</td>
					<td>{ props.order.state }</td>
					<td>{ props.order.access }</td>
					<td>{ props.order.notes }</td>
					<td><Button icon={<EditIcon />} onClick={props.handleEdit}/></td>
				</TableRow>
			</tbody>
		</Table>
	);
}

export default Cart;
