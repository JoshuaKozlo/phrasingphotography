import React, { Component } from 'react';
import Pulse from 'grommet/components/icons/Pulse';
import { Link } from 'react-router-dom';

class AddButton extends Component {
	render() {
		return (
			<Link to="/orders/new">
				<Pulse className="add" />
			</Link>
		);
	}
}

export default AddButton;
