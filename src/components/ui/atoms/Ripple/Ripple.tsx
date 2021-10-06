import React, { useState, useLayoutEffect } from 'react';
import {
	View,
	StyleSheet,
	Animated,
	TouchableWithoutFeedback,
	I18nManager,
	Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { IRipple, RippleProps } from './types';

import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const noop = () => {};

const useDebouncedRippleCleanUp = (
	rippleCount: number,
	duration: number,
	cleanUpFunction: Function,
) => {
	useLayoutEffect(() => {
		let bounce: any = null;
		if (rippleCount > 0) {
			clearTimeout(bounce);
			bounce = setTimeout(() => {
				cleanUpFunction();
				clearTimeout(bounce);
			}, duration * 2);
		}

		return () => clearTimeout(bounce);
	}, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = (props: RippleProps) => {
	// Props
	const {
		children,
		color,
		disabled,
		duration,
		rippleCentered,
		onPress,
		onPressIn,
		onPressOut,
		onLongPress,
		style,
	} = props;
	// State
	const [ripples, setRipples] = useState<IRipple[]>([]);
	const [height, setHeight] = useState<number>(0);
	const [width, setWidth] = useState<number>(0);
	// Animated
	const radius = 10;

	useDebouncedRippleCleanUp(ripples.length, duration, () => {
		setRipples([]);
	});

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				overflow: 'hidden',
			},
			ripple: {
				position: 'absolute',
				width: radius * 2,
				height: radius * 2,
				borderRadius: radius,
				backgroundColor: theme.color[color],
				overflow: 'hidden',
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	const handlePress = (event: any) => {
		onPress(event);
	};
	const handlePressIn = (event: any) => {
		addRipple(event);
		onPressIn(event);
	};
	const handlePressOut = (event: any) => {
		onPressOut(event);
	};
	const handleLongPress = (event: any) => {
		onLongPress(event);
	};
	const addRipple = (event: any) => {
		let w2 = 0.5 * width;
		let h2 = 0.5 * height;

		let { locationX, locationY } = rippleCentered
			? { locationX: w2, locationY: h2 }
			: event.nativeEvent;

		let offsetX = Math.abs(w2 - locationX);
		let offsetY = Math.abs(h2 - locationY);

		let R = Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

		const ripple: IRipple = {
			locationX,
			locationY,
			duration,
			progress: new Animated.Value(0),
			R,
		};

		const animation = Animated.timing(ripple.progress, {
			toValue: 100,
			duration: ripple.duration,
			useNativeDriver: true,
		}).start();

		setRipples((prevState: IRipple[]) => [...prevState, ripple]);
	};
	const handleLayout = (event) => {
		let { width, height } = event.nativeEvent.layout;
		setHeight(height);
		setWidth(width);
	};
	const renderRipple = (ripple: IRipple, index: number) => {
		const rippleStyles = {
			top: ripple.locationY - radius,
			[I18nManager.isRTL ? 'right' : 'left']: ripple.locationX - radius,
			transform: [
				{
					scale: ripple.progress.interpolate({
						inputRange: [0, 100],
						outputRange: [0, ripple.R / radius],
					}),
				},
			],
			opacity: ripple.progress.interpolate({
				inputRange: [0, 100],
				outputRange: [0.5, 0],
			}),
		};

		return (
			<Animated.View
				pointerEvents="none"
				key={'ripple_' + index}
				style={[styles.ripple, rippleStyles]}
			/>
		);
	};

	return (
		<TouchableWithoutFeedback
			disabled={disabled}
			onPress={(e) => handlePress(e)}
			onPressIn={(e) => handlePressIn(e)}
			onPressOut={(e) => handlePressOut(e)}
			onLongPress={(e) => handleLongPress(e)}
			onLayout={(e) => handleLayout(e)}
		>
			<View style={[styles.container, style]}>
				{children}
				{ripples.length > 0 &&
					ripples.map((ripple, index) => renderRipple(ripple, index))}
			</View>
		</TouchableWithoutFeedback>
	);
};

Ripple.defaultProps = {
	color: 'black',
	disabled: false,
	duration: 350,
	rippleCentered: false,
	style: {},
	onPress: noop,
	onPressIn: noop,
	onPressOut: noop,
	onLongPress: noop,
};

Ripple.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	color: PropTypes.string,
	disabled: PropTypes.bool,
	duration: PropTypes.number,
	rippleCentered: PropTypes.bool,
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
	onPress: PropTypes.func,
	onPressIn: PropTypes.func,
	onPressOut: PropTypes.func,
	onLongPress: PropTypes.func,
};

export default Ripple;
