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
				placeholder="The code for the key storage box at the front door is 3542"
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
				placeholder="The fireplace mantel is beautiful! Can you get some shots focusing on it? Also the propety will not be ready for the photoshoot until August 15th"
				{...input}
			/>
		</FormField>
	);
}
