import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import Ripple from 'components/ui/atoms/Ripple';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
	const {
		backgroundColor,
		block,
		border,
		content,
		disabled,
		icon,
		loading,
		rounded,
		shadow,
		size,
		color,
		onPress,
		onPressIn,
		onPressOut,
		onLongPress,
		style,
	} = props;

	const getSize = (size, theme) => {
		const sizes = {
			xs: {
				button: {
					height: theme.spacing.s6,
					width: theme.spacing.s6,
					paddingHorizontal: icon ? 0 : theme.spacing.s2,
				},
				content: {
					fontSize: theme.spacing.s2,
				},
				contentIcon: {
					fontSize: theme.spacing.s3,
				},
			},
			sm: {
				button: {
					height: theme.spacing.s8,
					width: theme.spacing.s8,
					paddingHorizontal: icon ? 0 : theme.spacing.s23,
				},
				content: {
					fontSize: theme.spacing.s2,
				},
				contentIcon: {
					fontSize: theme.spacing.s4,
				},
			},
			md: {
				button: {
					height: theme.spacing.s10,
					width: theme.spacing.s10,
					paddingHorizontal: icon ? 0 : theme.spacing.s4,
				},
				content: {
					fontSize: theme.spacing.s3,
				},
				contentIcon: {
					fontSize: theme.spacing.s5,
				},
			},
			lg: {
				button: {
					height: theme.spacing.s12,
					width: theme.spacing.s12,
					paddingHorizontal: icon ? 0 : theme.spacing.s5,
				},
				content: {
					fontSize: theme.spacing.s3,
				},
				contentIcon: {
					fontSize: theme.spacing.s6,
				},
			},
			xl: {
				button: {
					height: theme.spacing.s14,
					width: theme.spacing.s14,
					paddingHorizontal: icon ? 0 : theme.spacing.s6,
				},
				content: {
					fontSize: theme.spacing.s3,
				},
				contentIcon: {
					fontSize: theme.spacing.s8,
				},
			},
		};
		return sizes[size];
	};

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			button: {
				backgroundColor:
					disabled && backgroundColor.toLowerCase() !== 'transparent'
						? 'rgba(125,125,125,.2)'
						: theme.color[backgroundColor],
				borderRadius: rounded ? theme.spacing.s7 : theme.spacing.s1,
				borderWidth: border,
				borderColor: disabled ? theme.color.surface2 : theme.color[color],
				flexDirection: 'row',
				position: 'relative',
				alignItems: 'center',
				justifyContent: 'center',
				...getSize(size, theme).button,
				width: block
					? '100%'
					: icon
					? getSize(size, theme).button.width
					: 'auto',
				...style,
			},
			content: {
				position: 'relative',
				textAlign: 'center',
				textAlignVertical: 'center',
				color: disabled ? theme.color.surface2 : theme.color[color],
				fontWeight: 'bold',
				textTransform: 'uppercase',
				letterSpacing: 1,
				...getSize(size, theme).content,
			},
			contentIcon: {
				position: 'relative',
				textAlign: 'center',
				textAlignVertical: 'center',
				color: disabled ? theme.color.surface2 : theme.color[color],
				fontWeight: 'bold',
				textTransform: 'uppercase',
				letterSpacing: 1,
				...getSize(size, theme).contentIcon,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	const handlePress = (event: any) => {
		onPress(event);
	};
	const handlePressIn = (event: any) => {
		onPressIn(event);
	};
	const handlePressOut = (event: any) => {
		onPressOut(event);
	};
	const handleLongPress = (event: any) => {
		onLongPress(event);
	};

	return (
		<Ripple
			color={color}
			style={styles.button}
			disabled={disabled}
			onPress={(e) => handlePress(e)}
			onPressIn={(e) => handlePressIn(e)}
			onPressOut={(e) => handlePressOut(e)}
			onLongPress={(e) => handleLongPress(e)}
		>
			{content({ style: styles.content, styleIcon: styles.contentIcon })}
		</Ripple>
	);
};

const noop = () => {};

Button.defaultProps = {
	backgroundColor: 'primary',
	block: false,
	border: 0,
	color: 'white',
	content: noop,
	disabled: false,
	icon: false,
	loading: false,
	rounded: false,
	shadow: 'none',
	size: 'md',
	style: {},
	onPress: noop,
	onPressIn: noop,
	onPressOut: noop,
	onLongPress: noop,
};

Button.propTypes = {
	backgroundColor: PropTypes.string,
	block: PropTypes.bool,
	border: PropTypes.number,
	content: PropTypes.func,
	disabled: PropTypes.bool,
	icon: PropTypes.bool,
	loading: PropTypes.bool,
	rounded: PropTypes.bool,
	shadow: PropTypes.oneOf(['none', 'sm', true, 'md', 'lg', 'xl']),
	size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
	color: PropTypes.string,
	onPress: PropTypes.func,
	onPressIn: PropTypes.func,
	onPressOut: PropTypes.func,
	onLongPress: PropTypes.func,
};

export default Button;
