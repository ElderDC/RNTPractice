import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const Link = (props) => {
	const {
		children,
		color,
		onPress,
		onPressIn,
		onPressOut,
		onLongPress,
		style,
	} = props;

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			text: {
				color: theme.color[color],
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
		<TouchableWithoutFeedback
			onPress={(e) => handlePress(e)}
			onPressIn={(e) => handlePressIn(e)}
			onPressOut={(e) => handlePressOut(e)}
			onLongPress={(e) => handleLongPress(e)}
		>
			<Text style={[styles.text, style]}>{children}</Text>
		</TouchableWithoutFeedback>
	);
};

const noop = () => {};

Link.defaultProps = {
	color: 'primary',
	style: {},
	onPress: noop,
	onPressIn: noop,
	onPressOut: noop,
	onLongPress: noop,
};

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	color: PropTypes.string,
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
	onPress: PropTypes.func,
	onPressIn: PropTypes.func,
	onPressOut: PropTypes.func,
	onLongPress: PropTypes.func,
};

export default Link;
