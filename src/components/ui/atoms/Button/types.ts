export interface ButtonProps {
	backgroundColor?: string;
	block?: boolean;
	border?: number;
	content?: Function;
	color?: string;
	disabled?: boolean;
	icon?: boolean;
	id?: string;
	loading?: boolean;
	rounded?: boolean;
	shadow?: true | 'none' | 'sm' | 'md' | 'lg' | 'xl';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	style?: object | object[];
	onPress: Function;
	onPressIn: Function;
	onPressOut: Function;
	onLongPress: Function;
}
