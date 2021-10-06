import { ReactChild } from 'react';

export interface RowProps {
	children?: ReactChild | ReactChild[];
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
	justifyContent?:
		| 'center'
		| 'flex-end'
		| 'flex-start'
		| 'space-around'
		| 'space-between'
		| 'space-evenly';
	style?: object | object[];
}
