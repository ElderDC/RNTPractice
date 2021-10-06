import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Column, Icon, Ripple, Row } from 'components/ui/atoms';
import { DrawerLayout } from 'layouts';
import ProductCard from 'components/ProductCard';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const Home = (props) => {
	const { navigation, route } = props;

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({});
		return styles;
	};
	const styles = useThemeAwareObject(createStyles);

	const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

	return (
		<DrawerLayout title="Home" withScroll {...props}>
			<Row>
				<Column sm={12}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={{ padding: 12, flexDirection: 'row' }}>
							{categories.map((e) => (
								<Button
									key={e}
									icon
									backgroundColor="background2"
									color="primary"
									size="xl"
									rounded
									style={{ margin: 4 }}
									content={({ style }) => (
										<Icon
											family="AntDesign"
											name="tago"
											style={[style, { fontSize: 28 }]}
										/>
									)}
								/>
							))}
						</View>
					</ScrollView>
				</Column>
			</Row>
			<Row style={{ padding: 4 }}>
				{/* <Column sm={12} style={{ padding: 12 }}>
					<Button
						onPress={(event) => navigation.navigate('BarcodeScanner')}
						backgroundColor='primary'
						color='white'
						content={({ style }) => (
							<>
								<Icon family='AntDesign' name='scan1' style={style} />
								<Text style={style}>Escanear código</Text>
							</>
						)}
					/>
				</Column> */}
				<Column sm={12} style={{ padding: 12 }}>
					<ProductCard
						onPress={() => navigation.navigate('Product', { barcode: 1234 })}
					></ProductCard>
				</Column>
				<Column sm={12} style={{ padding: 12 }}>
					<ProductCard
						onPress={() => navigation.navigate('Product', { barcode: 1234 })}
					></ProductCard>
				</Column>
			</Row>
		</DrawerLayout>
	);
};

Home.propTypes = {};

export default Home;
