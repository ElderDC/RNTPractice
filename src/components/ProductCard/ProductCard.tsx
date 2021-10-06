import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
} from 'react-native';
import { Button, Column, Icon, Row, TextField } from 'components/ui/atoms';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Theme } from 'theme/Theme.interface';
import { Counter, Price } from 'components/ui/molecules';

const noop = () => {};

const ProductCard = (props) => {
	const { simple, onPress, onPressIn, onPressOut } = props;

	const [counter, setCounter] = useState<number>(0);

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				paddingTop: 50,
			},
			card: {
				position: 'relative',
				backgroundColor: theme.color.background2,
				padding: 12,
				borderRadius: theme.spacing.s2,
				shadowColor: theme.color.surface1,
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
				elevation: 7,
			},
			image: {
				width: '100%',
				height: 200,
				borderRadius: theme.spacing.s1,
			},
			smallImage: {
				width: '100%',
				height: 90,
				borderRadius: theme.spacing.s1,
			},
			title: {
				...theme.text.title1,
				color: theme.color.primary,
				marginBottom: theme.spacing.s2,
			},
			smallTitle: {
				...theme.text.title2,
				color: theme.color.primary,
				marginBottom: theme.spacing.s2,
			},
			description: {
				...theme.text.body2,
				color: theme.color.surface2,
			},
			price: {
				...theme.text.h5,
				color: theme.color.surface2,
			},
			priceDecimal: {
				...theme.text.title2,
				color: theme.color.surface2,
			},
			favoriteButton: {
				position: 'absolute',
				top: theme.spacing.s4,
				right: theme.spacing.s4,
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
	const handleCounter = (value) => {
		setCounter(value);
	};

	if (simple) {
		return (
			<TouchableWithoutFeedback
				onPress={handlePress}
				onPressIn={handlePressIn}
				onPressOut={handlePressOut}
			>
				<View style={styles.card}>
					<Row>
						<Column sm={3} style={{ padding: 12 }}>
							<Image
								resizeMode="contain"
								style={styles.smallImage}
								source={{
									uri: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png',
								}}
							/>
						</Column>
						<Column sm={9} style={{ padding: 12 }}>
							<Text style={styles.smallTitle}>Nombre del producto</Text>
							<Text style={styles.description}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
								corporis.
							</Text>
						</Column>
					</Row>
					<Row alignItems="center">
						<Column sm={6} style={{ alignItems: 'flex-start', padding: 12 }}>
							<Price small currency="$" amount={200} />
						</Column>
						<Column sm={6} style={{ alignItems: 'flex-end', padding: 12 }}>
							{counter > 0 ? (
								<Counter
									value={counter}
									min={0}
									max={5}
									small
									onChange={handleCounter}
								/>
							) : (
								<Button
									rounded
									backgroundColor="primary"
									color="white"
									onPress={() => handleCounter(1)}
									content={({ style }) => (
										<Text style={style}>Add to cart</Text>
									)}
								/>
							)}
						</Column>
					</Row>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={handlePress}
			onPressIn={handlePressIn}
			onPressOut={handlePressOut}
		>
			<View style={styles.card}>
				<Row>
					<Column sm={12} style={{ padding: 12 }}>
						<Image
							resizeMode="contain"
							style={styles.image}
							source={{
								uri: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png',
							}}
						/>
					</Column>
					<Column sm={12} style={{ padding: 12 }}>
						<Text style={styles.title}>Nombre del producto</Text>
						<Text style={styles.description}>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
							corporis.
						</Text>
					</Column>
				</Row>
				<Row alignItems="center">
					<Column
						sm={6}
						style={{
							flexDirection: 'column',
							justifyContent: 'center',
							padding: 12,
						}}
					>
						<Price currency="$" amount={70} />
					</Column>
					<Column sm={6} style={{ alignItems: 'flex-end', padding: 12 }}>
						{counter > 0 ? (
							<Counter
								value={counter}
								min={0}
								max={5}
								onChange={handleCounter}
							/>
						) : (
							<Button
								rounded
								backgroundColor="primary"
								color="white"
								size="lg"
								onPress={() => handleCounter(1)}
								content={({ style }) => <Text style={style}>Add to cart</Text>}
							/>
						)}
					</Column>
				</Row>
				<Button
					icon
					rounded
					backgroundColor="transparent"
					color="error"
					style={styles.favoriteButton}
					content={({ styleIcon }) => (
						<Icon family="AntDesign" name="hearto" style={[styleIcon]} />
					)}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

ProductCard.defaultProps = {
	simple: false,
	onPress: noop,
	onPressIn: noop,
	onPressOut: noop,
};

ProductCard.propTypes = {
	simple: PropTypes.bool,
	onPress: PropTypes.func,
	onPressIn: PropTypes.func,
	onPressOut: PropTypes.func,
};

export default ProductCard;
