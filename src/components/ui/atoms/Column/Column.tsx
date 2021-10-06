import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Theme } from 'theme/Theme.interface';
import { ColumnProps } from './types';

const Column = (props: ColumnProps) => {
	const { children, sm, md, lg, style } = props;

	const { width } = useWindowDimensions();

	const getSize = (theme) => {
		if (sm && width <= theme.breackpoint.sm) {
			return `${(sm / 12) * 100}%`;
		}
		if (md && width <= theme.breackpoint.md) {
			return `${(md / 12) * 100}%`;
		}
		if (lg && width <= theme.breackpoint.lg) {
			return `${(lg / 12) * 100}%`;
		}
	};

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			column: {
				width: getSize(theme),
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	return <View style={[style, styles.column]}>{children}</View>;
};

Column.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
	]),
	sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

Column.defaultProps = {
	sm: 12,
};

export default Column;
