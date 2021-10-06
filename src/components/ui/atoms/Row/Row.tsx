import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Theme } from 'theme/Theme.interface';
import { RowProps } from './types';

const Row = (props: RowProps) => {
	const { children, flexWrap, alignItems, justifyContent, style } = props;

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			Row: {
				width: '100%',
				flexDirection: 'row',
				flexWrap,
				alignItems,
				justifyContent,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	return <View style={[style, styles.Row]}>{children}</View>;
};

Row.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	alignItems: PropTypes.oneOf([
		'baseline',
		'center',
		'flex-end',
		'flex-start',
		'stretch',
	]),
	justifyContent: PropTypes.oneOf([
		'center',
		'flex-end',
		'flex-start',
		'space-around',
		'space-between',
		'space-evenly',
	]),
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

Row.defaultProps = {
	flexWrap: 'wrap',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
};

export default Row;
