import { ReactChild } from 'react';

export interface LinkProps {
	children?: string | ReactChild | ReactChild[];
	color?: string;
	style?: object | object[];
	onPress: Function;
	onPressIn: Function;
	onPressOut: Function;
	onLongPress: Function;
}
