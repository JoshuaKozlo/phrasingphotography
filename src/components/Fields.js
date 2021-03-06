import React from 'react';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';


// New Order Fields
export const AddressField = ({ input, meta }) => {
	return (
		<FormField label="Address" error={meta.touched ? meta.error : ''}>
			<TextInput name="address" id="address" placeHolder="635 Marshtree Lane Apt 305" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}

export const CityField = ({ input, meta }) => {
	return (
		<FormField label="City" error={meta.touched ? meta.error : ''}>
			<TextInput name="city" id="city" placeHolder="Fayetteville" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}

export const StateField = ({ input, meta }) => {
	return (
		<FormField label="State (Only Serving the Carolinas)" error={meta.touched ? meta.error : ''}>
			<Select options={['NC', 'SC']} value={input.value} onChange={(event) => input.onChange(event.value)} />
		</FormField>
	);
}

export const PropertyAccessField = ({ input, meta }) => {
	return (
		<FormField label="Property Access" error={meta.touched ? meta.error : ''}>
			<textarea 
				className="text-area" 
				placeholder="The house key is under the door mat!"
				{...input}
			/>
		</FormField>
	);
}

export const NotesField = ({ input, meta }) => {
	return (
		<FormField label="Notes">
			<textarea
				className="text-area"
				{...input}
			/>
		</FormField>
	);
}

export const EmailField = ({ input, meta }) => {
	return (
		<FormField label="Email" error={meta.touched ? meta.error : ''}>
			<TextInput type="email" name="email" id="email" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}

export const PasswordField = ({ input, meta }) => {
	return (
		<FormField label="Password" error={meta.touched ? meta.error : ''}>
			<TextInput type="password" name="password" id="password" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}

export const PasswordConfirmField = ({ input, meta }) => {
	return (
		<FormField label="Confirm Password" error={meta.touched ? meta.error : ''}>
			<TextInput type="password" name="password-confirm" id="password-confirm" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}

export const NameField = ({ input, meta }) => {
	return (
		<FormField label="Full Name or Agency" error={meta.touched ? meta.error : ''}>
			<TextInput name="name" id="name" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}

export const PhoneField = ({ input, meta }) => {
	return (
		<FormField label="Phone" error={meta.touched ? meta.error : ''}>
			<TextInput name="phone" id="phone" placeHolder="910-111-1111" onDOMChange={input.onChange} {...input} />
		</FormField>
	);
}
