import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import Form from 'grommet/components/Form';

import { loginUser } from '../actions/auth';
import { EmailField, PasswordField } from './Fields';

class LoginForm extends Component {

	onSubmit(values) {
		this.props.loginUser(values);
	}

	render() {
		const { handleSubmit, loginError } = this.props;

		return (
			<Box full justify="center" align="center">
				<Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field name="email" component={EmailField}/>
					<Field name="password" component={PasswordField}/>
					<Link to="/signup">No Account? Click Here to Sign Up</Link>
					<Paragraph className="loginError" margin="small">{loginError}</Paragraph>
					<Button className="login-btn" label="Log In" primary type="submit" />
				</Form>
			</Box>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.email) {
		errors.email ='This Field is Required!'
	}

	if (!values.password) {
		errors.password = 'This Field is Required!'
	}

	// If errors is empty the form is fine to submit
	return errors;
}

function mapStateToProps(state) {
	return {
		loginError: state.auth.error
	}
}

LoginForm = reduxForm({ form: 'LoginForm', validate })(LoginForm);
LoginForm = connect(mapStateToProps, { loginUser })(LoginForm);
export default LoginForm;
