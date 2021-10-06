import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Icon, TextField } from 'components/ui/atoms';
import { CounterProps } from './types';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const Counter = (props: CounterProps) => {
	const { color, max, min, small, step, style, value, vertical, onChange } =
		props;

	const [inputValue, setInputValue] = useState<string>(value + '');
	const [intervalValue, setIntervalValue] = useState<any>(null);

	const isMinValue = min || min === 0 ? Number(inputValue) <= min : false;
	const isMaxValue = max || max === 0 ? Number(inputValue) >= max : false;

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			leftButton: {
				width: small ? 40 : 48,
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				paddingLeft: 2,
			},
			rightButton: {
				width: small ? 40 : 48,
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
				paddingRight: 2,
			},
			topButton: {
				height: small ? 40 : 48,
				borderBottomRightRadius: 0,
				borderBottomLeftRadius: 0,
				paddingTop: 2,
			},
			bottomButton: {
				height: small ? 40 : 48,
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0,
				paddingTop: 2,
			},
			input: { width: small ? 40 : 48 },
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	useEffect(() => {
		setInputValue(value + '');
	}, [value]);

	useEffect(() => {
		(isMinValue || isMaxValue) && clearInterval(intervalValue);
	}, [inputValue]);

	useEffect(() => {
		clearInterval(intervalValue);
	}, []);

	const handleAdd = () => {
		setInputValue((prev) => (Number(prev) || 0) + step + '');
	};
	const handleRemove = () => {
		setInputValue((prev) => (Number(prev) || 0) - step + '');
	};
	const startInterval = (type = 'add') => {
		if (isMinValue || isMaxValue) {
			return;
		}
		if (type === 'add') {
			setIntervalValue(
				setInterval(
					() => setInputValue((prev) => (Number(prev) || 0) + step + ''),
					150,
				),
			);
		} else {
			setIntervalValue(
				setInterval(
					() => setInputValue((prev) => (Number(prev) || 0) - step + ''),
					150,
				),
			);
		}
	};
	const stopInterval = () => {
		clearInterval(intervalValue);
		setIntervalValue(null);
		onChange(Number(inputValue) || 0);
	};
	const handleBlur = (event) => {
		onChange(Number(inputValue) || 0);
	};
	const handleChangeValue = (text) => {
		setInputValue(text);
	};
	return (
		<View
			style={[{ flexDirection: vertical ? 'column-reverse' : 'row' }, style]}
		>
			<Button
				disabled={isMinValue}
				rounded
				icon
				backgroundColor={color}
				color="white"
				size={small ? 'md' : 'lg'}
				style={vertical ? styles.bottomButton : styles.leftButton}
				content={({ styleIcon }) => (
					<Icon
						family="FontAwesome5"
						name="minus"
						style={[styleIcon, { fontSize: 12 }]}
					/>
				)}
				onPressIn={handleRemove}
				onPressOut={() => stopInterval()}
				onLongPress={() => startInterval('remove')}
			/>
			<TextField
				value={inputValue}
				processValue={(value) => value.replace(/[^0-9]/g, '')}
				min={min}
				max={max}
				solo
				singleLine
				tile
				size={small ? 'xs' : 'sm'}
				style={styles.input}
				keyboardType="number-pad"
				inputStyle={{ textAlign: 'center' }}
				onBlur={handleBlur}
				onChangeText={handleChangeValue}
			></TextField>
			<Button
				disabled={isMaxValue}
				rounded
				icon
				backgroundColor={color}
				color="white"
				size={small ? 'md' : 'lg'}
				style={vertical ? styles.topButton : styles.rightButton}
				content={({ styleIcon }) => (
					<Icon
						family="FontAwesome5"
						name="plus"
						style={[styleIcon, { fontSize: 12 }]}
					/>
				)}
				onPressIn={handleAdd}
				onPressOut={() => stopInterval()}
				onLongPress={() => startInterval('add')}
			/>
		</View>
	);
};

const noop = () => {};

Counter.defaultProps = {
	color: 'primary',
	small: false,
	step: 1,
	style: {},
	value: 0,
	vertical: false,
	onChange: noop,
};

Counter.propTypes = {
	color: PropTypes.string,
	max: PropTypes.number,
	min: PropTypes.number,
	small: PropTypes.bool,
	step: PropTypes.number,
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
	value: PropTypes.number,
	vertical: PropTypes.bool,
	onChange: PropTypes.func,
};

export default Counter;
