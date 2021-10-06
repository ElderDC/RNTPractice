export interface CounterProps {
	color?: string;
	max?: number;
	min?: number;
	small?: boolean;
	step?: number;
	style?: object | object[];
	value?: number | null;
	vertical?: boolean;
	onChange?: Function;
}
