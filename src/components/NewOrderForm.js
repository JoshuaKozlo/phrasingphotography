import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';

import { AddressField, CityField, StateField, PropertyAccessField, NotesField } from './Fields'
import { newOrder } from '../actions/new_order';

class NewOrderForm extends Component {

	onSubmit(values) {
		this.props.newOrder(values);
		this.props.history.push('/orders/new/checkout');
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<Box align="center">
				<Heading>Property Info</Heading>
				<Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="address" component={AddressField}/>
					<Field name="city" component={CityField} />
					<Field name="state" component={StateField} />
					<Field name="access" component={PropertyAccessField} />
					<Field name="notes" component={NotesField} />
					<div className="buttonHolder">
						<Button className="checkout-btn" label="Proceed To Checkout" type="submit" primary/>
						<Link to="/orders">
							<Button className="return-btn" label="Cancel" type="submit" secondary/>
						</Link>
					</div>
				</Form>
			</Box>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.address) {
		errors.address ='This Field is Required!'
	}

	if (!values.city) {
		errors.city = 'This Field is Required!'
	}

	if (!values.state) {
		errors.state = 'This Field is Required!'
	}

	if (!values.access) {
		errors.access = 'This Field is Required!'
	}

	// If errors is empty the form is fine to submit
	return errors;
}

function mapStateToProps(state) {
	return {
		initialValues: state.newOrder
	}
}

NewOrderForm = reduxForm({ form: 'NewOrderForm', validate })(NewOrderForm);
NewOrderForm = connect(mapStateToProps, { newOrder })(NewOrderForm);

export default NewOrderForm;
