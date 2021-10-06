import { ReactChild } from 'react';

export interface RippleProps {
	children?: ReactChild | ReactChild[];
	color?: string;
	disabled?: boolean;
	duration?: number;
	rippleCentered?: boolean;
	style?: object | object[];
	onPress: Function;
	onPressIn: Function;
	onPressOut: Function;
	onLongPress: Function;
}

export interface IRipple {
	locationX?: number;
	locationY?: number;
	duration?: number;
	progress?: any;
	R?: number;
}
