import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, Column, Icon, Ripple, Row } from 'components/ui/atoms';
import { Counter, List, Price } from 'components/ui/molecules';
import { DrawerLayout } from 'layouts';
import { ScrollView } from 'react-native-gesture-handler';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import {
	SafeAreaView,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import ProductCard from 'components/ProductCard';

const Product = (props) => {
	const { navigation, route } = props;
	const { id, barcode } = route.params;

	const [counter, setCounter] = useState<number>(0);

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				flex: 1,
				flexDirection: 'column',
				backgroundColor: theme.color.background1,
				alignItems: 'center',
				justifyContent: 'center',
				borderTopLeftRadius: theme.spacing.s9,
				borderTopRightRadius: theme.spacing.s9,
				overflow: 'hidden',
				paddingBottom: 98,
			},
			imageContainer: {
				position: 'absolute',
				top: 0,
				left: 0,
				height: 400,
				width: '100%',
				// backgroundColor: theme.color.background1,
				borderTopLeftRadius: theme.spacing.s9,
				borderTopRightRadius: theme.spacing.s9,
			},
			image: {
				width: '100%',
				height: 200,
				borderRadius: theme.spacing.s1,
			},
			scrollContainer: {
				flex: 1,
				position: 'relative',
			},
			header: {
				backgroundColor: theme.color.background2,
				marginTop: 400,
				padding: 12,
				paddingRight: 24,
				// zIndex: 5,
				// elevation: 5,
				borderTopLeftRadius: theme.spacing.s9,
				borderTopRightRadius: theme.spacing.s9,
			},
			content: {
				backgroundColor: theme.color.background2,
				padding: 12,
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
			title: {
				...theme.text.title1,
				color: theme.color.primary,
				marginLeft: theme.spacing.s2,
			},
			subtitle: {
				...theme.text.caption,
				textTransform: 'uppercase',
				color: theme.color.surface1,
				fontWeight: 'bold',
			},
			description: {
				...theme.text.body1,
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
				marginLeft: theme.spacing.s4,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	const handleCounter = (value) => {
		setCounter(value);
	};

	return (
		<SafeAreaView style={{ position: 'relative', flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image
						resizeMode="contain"
						style={[styles.image, { height: '100%', width: '100%' }]}
						source={{
							uri: 'https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png',
						}}
					/>
				</View>
				<ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
					<View style={styles.header}>
						<Row alignItems="center">
							<Column
								sm={9}
								style={{ flexDirection: 'row', alignItems: 'center' }}
							>
								<Button
									icon
									rounded
									backgroundColor="transparent"
									color="surface2"
									onPress={(event) => navigation.goBack()}
									content={({ style }) => (
										<Icon
											family="AntDesign"
											name="left"
											style={[style, { fontSize: 16 }]}
										/>
									)}
								/>
								<Text style={styles.title}>Nombre del producto</Text>
							</Column>
							<Column sm={3} style={{ alignItems: 'flex-end' }}>
								<Button
									icon
									rounded
									backgroundColor="transparent"
									color="error"
									style={styles.favoriteButton}
									content={({ styleIcon }) => (
										<Icon
											family="AntDesign"
											name="hearto"
											style={[styleIcon]}
										/>
									)}
								/>
							</Column>
						</Row>
					</View>
					<View style={styles.content}>
						<Row>
							<Column style={{ padding: 12 }}>
								<Text style={styles.subtitle}>Description</Text>
							</Column>
							<Column style={{ padding: 12 }}>
								<Text style={styles.description}>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Earum corporis.
								</Text>
								<Text style={styles.description}>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Earum corporis.
								</Text>
							</Column>
							<Column style={{ padding: 12 }}>
								<Text style={styles.subtitle}>Features</Text>
							</Column>
							<Column style={{ padding: 12 }}>
								<List
									items={[
										'List item 1',
										'List item 2',
										'List item 3 sadsadasdasdas dsadsadas asddasdas dasdasdas dasda',
										'List item 3 sadsadasdasdas dsadsadas asddasdas dasdasdas dasda',
										'List item 3 sadsadasdasdas dsadsadas asddasdas dasdasdas dasda',
									]}
								></List>
							</Column>
						</Row>
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Row alignItems="center">
						<Column
							sm={6}
							style={{ flexDirection: 'row', alignItems: 'center' }}
						>
							<Price currency="$" amount={200} />
						</Column>
						<Column sm={6} style={{ alignItems: 'flex-end' }}>
							{counter > 0 ? (
								<Counter
									value={counter}
									color="primary"
									onChange={handleCounter}
								/>
							) : (
								<Button
									rounded
									backgroundColor="primary"
									color="white"
									size="lg"
									onPress={() => handleCounter(1)}
									content={({ style }) => (
										<Text style={style}>Add to cart</Text>
									)}
								/>
							)}
						</Column>
					</Row>
				</View>
			</View>
		</SafeAreaView>
	);
};

Product.propTypes = {};

export default Product;
