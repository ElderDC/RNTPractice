import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button, Column, Icon, Ripple, Row } from 'components/ui/atoms';
import { DrawerLayout } from 'layouts';
import ProductCard from 'components/ProductCard';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Price } from 'components/ui/molecules';

const Cart = (props) => {
	const { navigation, route } = props;
	const [products, setProducts] = useState([1, 1, 1, 1]);

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			title: {
				...theme.text.h6,
				color: theme.color.primary,
				textAlign: 'center',
				marginBottom: theme.spacing.s4,
			},
			paragraph: {
				...theme.text.body2,
				color: theme.color.surface2,
				textAlign: 'center',
			},
			imageContainer: {
				height: 300,
				width: '100%',
			},
			image: {
				height: '100%',
				width: '100%',
			},
			price: {
				...theme.text.h5,
				color: theme.color.surface2,
			},
			priceDecimal: {
				...theme.text.title2,
				color: theme.color.surface2,
			},
			footer: {
				borderTopWidth: 1,
				borderColor: theme.color.gray200,
				position: 'absolute',
				bottom: 0,
				left: 0,
				backgroundColor: theme.color.background2,
				padding: 24,
				zIndex: 5,
				elevation: 5,
			},
		});
		return styles;
	};
	const styles = useThemeAwareObject(createStyles);

	if (!products.length) {
		return (
			<DrawerLayout title="Cart" {...props}>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						padding: 48,
					}}
				>
					<Text style={styles.title}>Tu carrito esta vacio</Text>
					<Text style={styles.paragraph}>
						no tiene artículos en el carrito de compras.
					</Text>
					<Text style={styles.paragraph}>¡Cambiemos eso!</Text>
					<View style={styles.imageContainer}>
						<Image
							resizeMode="contain"
							style={styles.image}
							source={require('assets/img/emptyCart.png')}
						/>
					</View>
					<Button
						size="lg"
						style={{ marginTop: 16 }}
						block
						rounded
						onPress={(event) => navigation.navigate('Home')}
						content={({ style }) => <Text style={style}>Ir de compras</Text>}
					/>
				</View>
			</DrawerLayout>
		);
	}

	return (
		<DrawerLayout title="Cart" {...props}>
			<ScrollView style={{ marginBottom: 97 }}>
				<Row style={{ paddingVertical: 12, paddingHorizontal: 4 }}>
					{products.map((item, index) => (
						<Column key={index} sm={12} style={{ padding: 12 }}>
							<ProductCard simple></ProductCard>
						</Column>
					))}
				</Row>
			</ScrollView>
			<View style={styles.footer}>
				<Row alignItems="center">
					<Column sm={6} style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Price currency="$" amount={200} />
					</Column>
					<Column sm={6} style={{ alignItems: 'flex-end' }}>
						<Button
							rounded
							backgroundColor="primary"
							color="white"
							size="lg"
							content={({ style }) => (
								<Text style={style}>Realizar pedido</Text>
							)}
						/>
					</Column>
				</Row>
			</View>
		</DrawerLayout>
	);
};

Cart.propTypes = {};

export default Cart;
