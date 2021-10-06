export interface ColorTheme {
	primary: string;
	secondary: string;
	info: string;
	success: string;
	danger: string;
	error: string;
	background1: string;
	background2: string;
	surface1: string;
	surface2: string;
	black: string;
	white: string;
	gray50: string;
	gray100: string;
	gray200: string;
	gray300: string;
	gray400: string;
	gray500: string;
	gray600: string;
	gray700: string;
	gray800: string;
	gray900: string;
}
export interface BreackPointTheme {
	sm: number;
	md: number;
	lg: number;
}
export interface SpacingTheme {
	s0: number;
	s1: number;
	s2: number;
	s3: number;
	s4: number;
	s5: number;
	s6: number;
	s7: number;
	s8: number;
	s9: number;
	s10: number;
	s11: number;
	s12: number;
	s14: number;
	s16: number;
	s18: number;
	s20: number;
}
export interface TextVariant {
	fontSize: number;
	fontWeight:
		| 'normal'
		| 'bold'
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900';
}
export interface TextTheme {
	h1: TextVariant;
	h2: TextVariant;
	h3: TextVariant;
	h4: TextVariant;
	h5: TextVariant;
	h6: TextVariant;
	title1: TextVariant;
	title2: TextVariant;
	subtitle1: TextVariant;
	subtitle2: TextVariant;
	body1: TextVariant;
	body2: TextVariant;
	buttton: TextVariant;
	caption: TextVariant;
}
export interface Theme {
	id: string;
	color: ColorTheme;
	spacing: SpacingTheme;
	breackpoint: BreackPointTheme;
	text: TextTheme;
}
