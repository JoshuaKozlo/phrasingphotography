import React from 'react';
import { Link } from 'react-router-dom';

import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';


const ThankYou = (props) => {

	return (
		<Box size="full" alignContent="center" align="center" pad="large" margin="large">
			<Heading align="center">Thank You for Your Business</Heading>
			{props.user ? <Paragraph align="center">We will schedule a date for the photoshoot and send a invoice to {props.user.email} within the next 48 hours</Paragraph> : <span/>}
			<Link to="/orders">Back To My Orders</Link>
		</Box>
	);
}

export default ThankYou;
