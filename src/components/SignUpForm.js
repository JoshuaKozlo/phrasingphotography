import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import Form from 'grommet/components/Form';

import { createUser } from '../actions/auth';
import { EmailField, PasswordField, PasswordConfirmField, NameField, StateField, AddressField, CityField, PhoneField } from './Fields';

class SignUpForm extends Component {

	onSubmit(values) {
		this.props.createUser(values);
	}

	render() {
		const { handleSubmit, loginError } = this.props;

		return (
			<Box full="width" justify="center" align="center">
				<Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="name" component={NameField}/>
					<Field name="phone" component={PhoneField}/>
					<Field name="address" component={AddressField}/>
					<Field name="city" component={CityField}/>
					<Field name="state" component={StateField}/>
					<Field name="email" component={EmailField}/>
					<Field name="password" component={PasswordField}/>
					<Field name="confirm" component={PasswordConfirmField}/>
					<Paragraph className="loginError" margin="small">{loginError}</Paragraph>
					<Button className="login-btn" label="Sign Up" primary type="submit" />
				</Form>
			</Box>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.name) {
		errors.name ='This Field is Required!'
	}

	if (!values.phone) {
		errors.phone = 'This Field is Required!'
	}

	if (!values.address) {
		errors.address = 'This Field is Required!'
	}

	if (!values.city) {
		errors.city = 'This Field is Required!'
	}

	if (!values.state) {
		errors.state = 'This Field is Required!'
	}

	if (!values.email) {
		errors.email = 'This Field is Required!'
	}

	if (!values.password) {
		errors.password = 'This Field is Required!'
	}

	if (values.password !== values.confirm) {
		errors.confirm = 'Passwords must match'
	}

	// If errors is empty the form is fine to submit
	return errors;
}

function mapStateToProps(state) {
	return {
		loginError: state.auth.error
	}
}

SignUpForm = reduxForm({ form: 'SignUpForm', validate })(SignUpForm);
SignUpForm = connect(mapStateToProps, { createUser })(SignUpForm);
export default SignUpForm;
