import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Theme } from 'theme/Theme.interface';
import { ListProps } from './types';

const List = (props: ListProps) => {
	const { color, dot, items, style } = props;
	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			listItem: {
				flexDirection: 'row',
				alignItems: 'flex-start',
				marginBottom: theme.spacing.s1,
			},
			dot: {
				...theme.text.subtitle1,
				color: theme.color[color],
				textAlign: 'right',
				marginLeft: theme.spacing.s2,
				marginRight: theme.spacing.s3,
			},
			text: {
				...theme.text.body1,
				color: theme.color.surface2,
			},
		});
		return styles;
	};
	const styles = useThemeAwareObject(createStyles);

	const renderRow = (data: string) => {
		return <Text>{`\u2022 ${data}`}</Text>;
	};

	return (
		<View style={[style]}>
			{items.map((item, index) => (
				<View style={styles.listItem} key={index}>
					<Text style={styles.dot}>{dot === 'number' ? index + 1 : dot}</Text>
					<Text style={styles.text}>{item}</Text>
				</View>
			))}
		</View>
	);
};

List.propTypes = {
	color: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.string),
	dot: PropTypes.string,
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

List.defaultProps = {
	color: 'primary',
	dot: '\u2022',
	items: [],
	style: {},
};

export default List;
