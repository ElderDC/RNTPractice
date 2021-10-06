import { ReactChild } from 'react';

export type ColumnNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps {
	children?: ReactChild | ReactChild[];
	sm?: ColumnNumbers;
	md?: ColumnNumbers;
	lg?: ColumnNumbers;
	style?: object | object[];
}
