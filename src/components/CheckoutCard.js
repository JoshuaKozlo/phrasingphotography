import React from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const CheckoutCard = (props) => {
	return (
		<Box responsive={false} className="checkout-card" pad={{ horizontal: "medium", vertical: "small" }} margin={{ bottom: 'large'}}>
			<Box responsive={false} direction="row" alignSelf="center">
				<span className="dollar">$</span>
				<Heading className="amount">200</Heading>
			</Box>
			<List>
				<ListItem justify="center" separator="horizontal">
					<span>Photography</span>
				</ListItem>
				<ListItem justify="center" separator="none">
					<span className="secondary">Indoor</span>
				</ListItem>
				<ListItem justify="center" separator="none">
					<span className="secondary">Outdoor Ground / Aerial Drone</span>
				</ListItem>
				<ListItem justify="center">
					<span className="secondary">Floorplan</span>
				</ListItem>
				<ListItem justify="center" separator="horizontal">
					<span>Videography</span>
				</ListItem>
				<ListItem justify="center" separator="none">
					<span className="secondary">Drone</span>
				</ListItem>
				{props.children}
			</List>
		</Box>
	);
}

export default CheckoutCard;
