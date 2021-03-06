import {
	BreackPointTheme,
	ColorTheme,
	SpacingTheme,
	TextTheme,
	Theme,
} from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
	primary: '#234daf',
	secondary: '#fca311',
	info: '#3B82F6',
	success: '#22C55E',
	danger: '#F59E0B',
	error: '#EF4444',
	background1: '#F3F4F6',
	background2: '#FFFFFF',
	surface1: '#18181B',
	surface2: '#6B7280',
	black: '#000000',
	white: '#FFFFFF',
	gray50: '#F9FAFB',
	gray100: '#F3F4F6',
	gray200: '#E5E7EB',
	gray300: '#D1D5DB',
	gray400: '#9CA3AF',
	gray500: '#6B7280',
	gray600: '#4B5563',
	gray700: '#374151',
	gray800: '#1F2937',
	gray900: '#111827',
};
const DEFAULT_LIGHT_BREACKPOINT_THEME: BreackPointTheme = {
	sm: 480,
	md: 720,
	lg: 1080,
};
const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
	s0: 0,
	s1: 4,
	s2: 8,
	s3: 12,
	s4: 16,
	s5: 20,
	s6: 24,
	s7: 28,
	s8: 32,
	s9: 36,
	s10: 40,
	s11: 44,
	s12: 48,
	s14: 56,
	s16: 64,
	s18: 72,
	s20: 80,
};
const DEFAULT_LIGHT_TEXt_THEME: TextTheme = {
	h1: { fontSize: 48, fontWeight: '700' },
	h2: { fontSize: 44, fontWeight: '700' },
	h3: { fontSize: 40, fontWeight: '700' },
	h4: { fontSize: 36, fontWeight: '700' },
	h5: { fontSize: 32, fontWeight: '700' },
	h6: { fontSize: 28, fontWeight: '700' },
	title1: { fontSize: 22, fontWeight: '700' },
	title2: { fontSize: 20, fontWeight: '700' },
	subtitle1: { fontSize: 16, fontWeight: '700' },
	subtitle2: { fontSize: 14, fontWeight: '700' },
	body1: { fontSize: 16, fontWeight: '400' },
	body2: { fontSize: 14, fontWeight: '400' },
	buttton: { fontSize: 14, fontWeight: '500' },
	caption: { fontSize: 12, fontWeight: '400' },
};
export const DEFAULT_LIGHT_THEME_ID = 'default-light';
export const DEFAULT_LIGHT_THEME: Theme = {
	id: DEFAULT_LIGHT_THEME_ID,
	color: DEFAULT_LIGHT_COLOR_THEME,
	breackpoint: DEFAULT_LIGHT_BREACKPOINT_THEME,
	spacing: DEFAULT_LIGHT_SPACING_THEME,
	text: DEFAULT_LIGHT_TEXt_THEME,
};
