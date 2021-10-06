import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
	Animated,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Icon from 'components/ui/atoms/Icon';
import { TextFieldProps } from './types';

import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const TextField = (props: TextFieldProps) => {
	const {
		autofocus,
		style,
		inputStyle,
		clearabled,
		color,
		disabled,
		id,
		keyboardType,
		loading,
		label,
		maxlength,
		min,
		max,
		multiple,
		name,
		outlined,
		pattern,
		placeholder,
		processValue,
		required,
		secureTextEntry,
		singleLine,
		solo,
		step,
		rounded,
		size,
		text,
		tile,
		type,
		value,
		clearIcon,
		clearIconFamily,
		prependIcon,
		prependIconFamily,
		appendIcon,
		appendIconFamily,
		onBlur,
		onChange,
		onChangeText,
		onClear,
		onTextInput,
		onFocus,
		onEndEditing,
		onKeyPress,
	} = props;

	const [isFocus, setIsFocus] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>(value);
	const [labelHeight, setLabelHeight] = useState<number>(0);
	const [labelWidth, setLabelWidth] = useState<number>(0);
	const onActiveAnimation = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	useEffect(() => {
		Animated.timing(onActiveAnimation, {
			toValue: isFocus || !!inputValue ? 100 : 0,
			duration: 250,
			useNativeDriver: true,
		}).start();
	}, [isFocus, inputValue]);

	const getSize = (size, theme) => {
		const sizes = {
			xs: {
				container: {
					height: theme.spacing.s10,
					marginTop: outlined || text ? 8 : 0,
				},
				input: {
					paddingTop: outlined || text || singleLine ? 12 : 12,
					paddingBottom: outlined || text || singleLine ? 12 : 6,
					paddingLeft: prependIcon ? 50 : 12,
					paddingRight:
						appendIcon || clearabled
							? appendIcon && clearabled
								? 72
								: 42
							: 12,
					fontSize: 12,
					lineHeight: 14,
					letterSpacing: 0.45,
				},
				prependIcon: {
					fontSize: 20,
					left: 16,
					transform: [{ translateY: -10 }],
				},
				appendIcon: {
					fontSize: 20,
					right: 16,
					transform: [{ translateY: -10 }],
				},
				clearIcon: {
					right: appendIcon ? 44 : 12,
					transform: [{ translateY: -10 }],
				},
				contentClearIcon: {
					fontSize: 20,
				},
				labelContainer: {
					left: prependIcon ? 50 : 12,
					transform: [
						{
							translateX: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									0,
									singleLine
										? 0
										: (outlined || text) && prependIcon
										? -34 - labelWidth / 8
										: -1 * (labelWidth / 8),
								],
							}),
						},
						{
							translateY: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									-(labelHeight / 2),
									singleLine
										? -(labelHeight / 2)
										: outlined || text
										? -18 - labelHeight / 2
										: -10 - labelHeight / 2,
								],
							}),
						},
						{
							scale: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [1, singleLine ? 1 : 0.75],
							}),
						},
					],
				},
				label: {
					fontSize: 12,
					lineHeight: 12,
					letterSpacing: 0.45,
				},
			},
			sm: {
				container: {
					height: theme.spacing.s12,
					marginTop: outlined || text ? 8 : 0,
				},
				input: {
					paddingTop: outlined || text || singleLine ? 14 : 18,
					paddingBottom: outlined || text || singleLine ? 14 : 8,
					paddingLeft: prependIcon ? 54 : 14,
					paddingRight:
						appendIcon || clearabled
							? appendIcon && clearabled
								? 76
								: 46
							: 14,
					fontSize: 14,
					lineHeight: 16,
					letterSpacing: 0.45,
				},
				prependIcon: {
					fontSize: 22,
					left: 16,
					transform: [{ translateY: -12 }],
				},
				appendIcon: {
					fontSize: 22,
					right: 16,
					transform: [{ translateY: -12 }],
				},
				clearIcon: {
					right: appendIcon ? 46 : 14,
					transform: [{ translateY: -12 }],
				},
				contentClearIcon: {
					fontSize: 22,
				},
				labelContainer: {
					left: prependIcon ? 54 : 14,
					transform: [
						{
							translateX: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									0,
									singleLine
										? 0
										: (outlined || text) && prependIcon
										? -38 - labelWidth / 8
										: -1 * (labelWidth / 8),
								],
							}),
						},
						{
							translateY: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									-(labelHeight / 2),
									singleLine
										? -(labelHeight / 2)
										: outlined || text
										? -23 - labelHeight / 2
										: -12 - labelHeight / 2,
								],
							}),
						},
						{
							scale: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [1, singleLine ? 1 : 0.75],
							}),
						},
					],
				},
				label: {
					fontSize: 16,
					lineHeight: 16 + 2,
					letterSpacing: 0.45,
				},
			},
			md: {
				container: {
					height: theme.spacing.s14,
					marginTop: outlined || text ? 8 : 0,
				},
				input: {
					paddingTop: outlined || text || singleLine ? 16 : 20,
					paddingBottom: outlined || text || singleLine ? 16 : 8,
					paddingLeft: prependIcon ? 56 : 16,
					paddingRight:
						appendIcon || clearabled
							? appendIcon && clearabled
								? 80
								: 50
							: 16,
					fontSize: 16,
					lineHeight: 18,
					letterSpacing: 0.45,
				},
				prependIcon: {
					fontSize: 24,
					left: 16,
					transform: [{ translateY: -12 }],
				},
				appendIcon: {
					fontSize: 24,
					right: 16,
					transform: [{ translateY: -12 }],
				},
				clearIcon: {
					right: appendIcon ? 48 : 16,
					transform: [{ translateY: -12 }],
				},
				contentClearIcon: {
					fontSize: 24,
				},
				labelContainer: {
					left: prependIcon ? 56 : 16,
					transform: [
						{
							translateX: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									0,
									singleLine
										? 0
										: (outlined || text) && prependIcon
										? -40 - labelWidth / 8
										: -1 * (labelWidth / 8),
								],
							}),
						},
						{
							translateY: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									-(labelHeight / 2),
									singleLine
										? -(labelHeight / 2)
										: outlined || text
										? -27 - labelHeight / 2
										: -14 - labelHeight / 2,
								],
							}),
						},
						{
							scale: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [1, singleLine ? 1 : 0.75],
							}),
						},
					],
				},
				label: {
					fontSize: 16,
					lineHeight: 18,
					letterSpacing: 0.45,
				},
			},
			lg: {
				container: {
					height: theme.spacing.s16,
					marginTop: outlined || text ? 12 : 0,
				},
				input: {
					paddingTop: outlined || text || singleLine ? 18 : 22,
					paddingBottom: outlined || text || singleLine ? 18 : 10,
					paddingLeft: prependIcon ? 62 : 18,
					paddingRight:
						appendIcon || clearabled
							? appendIcon && clearabled
								? 94
								: 60
							: 18,
					fontSize: 18,
					lineHeight: 20,
					letterSpacing: 0.45,
				},
				prependIcon: {
					fontSize: 28,
					left: 18,
					transform: [{ translateY: -14 }],
				},
				appendIcon: {
					fontSize: 28,
					right: 18,
					transform: [{ translateY: -14 }],
				},
				clearIcon: {
					right: appendIcon ? 56 : 18,
					transform: [{ translateY: -14 }],
				},
				contentClearIcon: {
					fontSize: 28,
				},
				labelContainer: {
					left: prependIcon ? 62 : 18,
					transform: [
						{
							translateX: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									0,
									singleLine
										? 0
										: (outlined || text) && prependIcon
										? -44 - labelWidth / 8
										: -1 * (labelWidth / 8),
								],
							}),
						},
						{
							translateY: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									-(labelHeight / 2),
									singleLine
										? -(labelHeight / 2)
										: outlined || text
										? -31 - labelHeight / 2
										: -18 - labelHeight / 2,
								],
							}),
						},
						{
							scale: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [1, singleLine ? 1 : 0.75],
							}),
						},
					],
				},
				label: {
					fontSize: 16,
					lineHeight: 16 + 2,
					letterSpacing: 0.45,
				},
			},
			xl: {
				container: {
					height: theme.spacing.s18,
					marginTop: outlined || text ? 16 : 0,
				},
				input: {
					paddingTop: outlined || text || singleLine ? 20 : 28,
					paddingBottom: outlined || text || singleLine ? 20 : 16,
					paddingLeft: prependIcon ? 70 : 20,
					paddingRight:
						appendIcon || clearabled
							? appendIcon && clearabled
								? 102
								: 66
							: 20,
					fontSize: 20,
					lineHeight: 22,
					letterSpacing: 0.45,
				},
				prependIcon: {
					fontSize: 30,
					left: 20,
					transform: [{ translateY: -15 }],
				},
				appendIcon: {
					fontSize: 30,
					right: 20,
					transform: [{ translateY: -15 }],
				},
				clearIcon: {
					right: appendIcon ? 62 : 20,
					transform: [{ translateY: -15 }],
				},
				contentClearIcon: {
					fontSize: 30,
				},
				labelContainer: {
					left: prependIcon ? 70 : 20,
					transform: [
						{
							translateX: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									0,
									singleLine
										? 0
										: (outlined || text) && prependIcon
										? -50 - labelWidth / 8
										: -1 * (labelWidth / 8),
								],
							}),
						},
						{
							translateY: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [
									-(labelHeight / 2),
									singleLine
										? -(labelHeight / 2)
										: outlined || text
										? -34 - labelHeight / 2
										: -18 - labelHeight / 2,
								],
							}),
						},
						{
							scale: onActiveAnimation.interpolate({
								inputRange: [0, 100],
								outputRange: [1, singleLine ? 1 : 0.75],
							}),
						},
					],
				},
				label: {
					fontSize: 20,
					lineHeight: 20,
					letterSpacing: 0.45,
				},
			},
		};
		return sizes[size];
	};

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				position: 'relative',
				backgroundColor:
					outlined || text
						? 'transparent'
						: isFocus
						? 'rgba(128,128,128,.3)'
						: 'rgba(128,128,128,.2)',
				color: isFocus ? theme.color[color] : theme.color.surface2,
				borderWidth: outlined && !solo ? 2 : 0,
				borderBottomWidth: solo ? 0 : 2,
				borderColor: isFocus ? theme.color[color] : theme.color.surface2,
				borderStyle: 'solid',
				borderRadius: rounded ? theme.spacing.s20 : tile ? 0 : theme.spacing.s1,
				width: '100%',
				alignItems: 'center',
				...getSize(size, theme).container,
			},
			labelContainer: {
				position: 'absolute',
				top: '50%',
				paddingHorizontal: outlined ? 2 : 0,
				backgroundColor: outlined ? theme.color.background1 : 'transparent',
				...getSize(size, theme).labelContainer,
			},
			label: {
				color: isFocus ? theme.color[color] : theme.color.surface2,
				...getSize(size, theme).label,
			},
			input: {
				width: '100%',
				height: '100%',
				borderWidth: 0,
				color: theme.color.surface1,
				...getSize(size, theme).input,
			},
			prependIcon: {
				position: 'absolute',
				top: '50%',
				color: isFocus ? theme.color[color] : theme.color.surface2,
				...getSize(size, theme).prependIcon,
			},
			appendIcon: {
				position: 'absolute',
				top: '50%',
				color: isFocus ? theme.color[color] : theme.color.surface2,
				...getSize(size, theme).appendIcon,
			},
			clearIcon: {
				position: 'absolute',
				top: '50%',
				...getSize(size, theme).clearIcon,
			},
			contentClearIcon: {
				color: theme.color.surface2,
				...getSize(size, theme).contentClearIcon,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	const handleBlur = (event) => {
		setIsFocus(false);
		onBlur(event);
	};
	const handleChange = (event: any) => {
		onChange(event);
	};
	const handleChangeText = (text) => {
		if (!!Number(text) && (min || min === 0) && parseFloat(text) <= min) {
			text = `${min}`;
		}
		if (!!Number(text) && (max || max === 0) && parseFloat(text) >= max) {
			text = `${max}`;
		}
		setInputValue(processValue(text));
		onChangeText(processValue(text));
	};
	const handleClear = (event) => {
		setInputValue('');
		handleChangeText('');
		onClear(event);
	};
	const handleTextInput = (event: any) => {
		onTextInput(event);
	};
	const handleFocus = (event) => {
		setIsFocus(true);
		onFocus(event);
	};
	const handleEndEditing = (event: any) => {
		onEndEditing(event);
	};
	const handleKeyPress = (event) => {
		onKeyPress(event);
	};
	const handleLabelLayout = (event) => {
		let { width, height } = event.nativeEvent.layout;
		setLabelHeight(height);
		setLabelWidth(width);
	};

	const showLabel = label
		? singleLine && (isFocus || !!inputValue)
			? false
			: true
		: false;

	return (
		<View style={[styles.container, style]}>
			{showLabel && (
				<Animated.View
					style={styles.labelContainer}
					onLayout={handleLabelLayout}
				>
					<Text style={styles.label}>{label}</Text>
				</Animated.View>
			)}
			<TextInput
				style={[styles.input, inputStyle]}
				value={inputValue}
				placeholder={placeholder}
				onBlur={(e) => handleBlur(e)}
				onChange={(e) => handleChange(e)}
				onChangeText={(e) => handleChangeText(e)}
				onEndEditing={handleEndEditing}
				onFocus={(e) => handleFocus(e)}
				onKeyPress={(e) => handleKeyPress(e)}
				onTextInput={(e) => handleTextInput(e)}
				editable={!disabled}
				textContentType={type}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
			/>
			{prependIcon && (
				<Icon
					family={prependIconFamily}
					name={prependIcon}
					style={styles.prependIcon}
				/>
			)}
			{appendIcon && (
				<Icon
					family={appendIconFamily}
					name={appendIcon}
					style={styles.appendIcon}
				/>
			)}
			{!!inputValue && clearabled && (
				<TouchableOpacity onPress={handleClear} style={styles.clearIcon}>
					<Icon
						family={clearIconFamily}
						name={clearIcon}
						style={styles.contentClearIcon}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

const noop = () => {};

TextField.defaultProps = {
	autofocus: false,
	clearabled: false,
	color: 'primary',
	disabled: false,
	inputStyle: {},
	loading: false,
	processValue: (value) => value,
	outlined: false,
	rounded: false,
	secureTextEntry: false,
	singleLine: false,
	size: 'md',
	solo: false,
	style: {},
	text: false,
	tile: false,
	type: 'none',
	clearIcon: 'clear',
	clearIconFamily: 'MaterialIcons',
	prependIcon: null,
	prependIconFamily: 'MaterialIcons',
	appendIcon: null,
	appendIconFamily: 'MaterialIcons',
	value: '',
	onBlur: noop,
	onChange: noop,
	onChangeText: noop,
	onClear: noop,
	onTextInput: noop,
	onFocus: noop,
	onEndEditing: noop,
	onKeyPress: noop,
};

TextField.propTypes = {
	autofocus: PropTypes.bool,
	clearabled: PropTypes.bool,
	color: PropTypes.string,
	disabled: PropTypes.bool,
	inputStyle: PropTypes.object,
	keyboardType: PropTypes.oneOf([
		'default',
		'number-pad',
		'decimal-pad',
		'numeric',
		'email-address',
		'phone-pad',
		'visible-password',
	]),
	label: PropTypes.string,
	loading: PropTypes.bool,
	outlined: PropTypes.bool,
	rounded: PropTypes.bool,
	maxlength: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	multiple: PropTypes.bool,
	pattern: PropTypes.string,
	placeholder: PropTypes.string,
	processValue: PropTypes.func,
	required: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	singleLine: PropTypes.bool,
	size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
	solo: PropTypes.bool,
	step: PropTypes.number,
	style: PropTypes.object,
	text: PropTypes.bool,
	tile: PropTypes.bool,
	type: PropTypes.oneOf([
		'none',
		'URL',
		'addressCity',
		'addressCityAndState',
		'addressState',
		'countryName',
		'creditCardNumber',
		'emailAddress',
		'familyName',
		'fullStreetAddress',
		'givenName',
		'jobTitle',
		'location',
		'middleName',
		'name',
		'namePrefix',
		'nameSuffix',
		'nickname',
		'organizationName',
		'postalCode',
		'streetAddressLine1',
		'streetAddressLine2',
		'sublocality',
		'telephoneNumber',
		'username',
		'password',
		'newPassword',
		'oneTimeCode',
	]),
	value: PropTypes.string,
	clearIcon: PropTypes.string,
	prependIcon: PropTypes.string,
	appendIcon: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onChangeText: PropTypes.func,
	onClear: PropTypes.func,
	onTextInput: PropTypes.func,
	onFocus: PropTypes.func,
	onEndEditing: PropTypes.func,
	onKeyPress: PropTypes.func,
};

export default TextField;
