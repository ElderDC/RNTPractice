import { IconFamily } from 'components/ui/atoms/Icon/types';

export interface TextFieldProps {
	autofocus?: boolean;
	style?: object;
	inputStyle?: object;
	keyboardType?:
		| 'default'
		| 'number-pad'
		| 'decimal-pad'
		| 'numeric'
		| 'email-address'
		| 'phone-pad'
		| 'visible-password';
	clearabled?: boolean;
	color?: string;
	disabled?: boolean;
	id?: string;
	label?: string;
	loading?: boolean;
	outlined?: boolean;
	rounded?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	maxlength?: number;
	min?: number | Date;
	max?: number | Date;
	multiple?: boolean;
	name?: string;
	pattern?: string;
	placeholder?: string;
	processValue: Function;
	required?: boolean;
	secureTextEntry?: boolean;
	singleLine?: boolean;
	solo?: boolean;
	step?: number;
	text?: boolean;
	tile?: boolean;
	type?:
		| 'none'
		| 'URL'
		| 'addressCity'
		| 'addressCityAndState'
		| 'addressState'
		| 'countryName'
		| 'creditCardNumber'
		| 'emailAddress'
		| 'familyName'
		| 'fullStreetAddress'
		| 'givenName'
		| 'jobTitle'
		| 'location'
		| 'middleName'
		| 'name'
		| 'namePrefix'
		| 'nameSuffix'
		| 'nickname'
		| 'organizationName'
		| 'postalCode'
		| 'streetAddressLine1'
		| 'streetAddressLine2'
		| 'sublocality'
		| 'telephoneNumber'
		| 'username'
		| 'password'
		| 'newPassword'
		| 'oneTimeCode';
	value?: string | null;
	clearIcon?: string;
	clearIconFamily?: IconFamily;
	prependIcon?: string;
	prependIconFamily?: IconFamily;
	appendIcon?: string;
	appendIconFamily?: IconFamily;
	onBlur: Function;
	onChange: Function;
	onChangeText: Function;
	onClear: Function;
	onTextInput: Function;
	onFocus: Function;
	onEndEditing: Function;
	onKeyPress: Function;
}
