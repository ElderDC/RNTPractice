import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Theme } from 'theme/Theme.interface';
import { PriceProps } from './types';

const Price = (props: PriceProps): JSX.Element | null => {
	const { currency, amount, small } = props;

	const proccessAmount = (amount: number) => {
		const [integer, decimal] = amount.toFixed(2).split('.');
		return {
			integer,
			decimal: decimal ? `.${decimal}` : '.00',
		};
	};

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			price: {
				...theme.text[small ? 'title2' : 'h5'],
				color: theme.color.surface2,
			},
			priceDecimal: {
				...theme.text.title2,
				color: theme.color.surface2,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	return (
		<View>
			<Text style={styles.price}>
				{currency}
				{proccessAmount(amount || 0).integer}
				<Text style={styles.priceDecimal}>
					{proccessAmount(amount || 0).decimal}
				</Text>
			</Text>
		</View>
	);
};

Price.defaultProps = {
	currency: '$',
	amount: 0,
	small: false,
};

Price.propTypes = {
	currency: PropTypes.string,
	amount: PropTypes.number,
	small: PropTypes.bool,
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

export default Price;
