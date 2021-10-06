import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Home, Search, Product, Cart } from 'screens';
import { Icon } from 'components/ui/atoms';

const DrawerStack = createDrawerNavigator();

const NavigationDrawerContent = (props) => {
	const { state, navigation, descriptors } = props;

	const items = [
		{
			show: true,
			name: 'Inicio',
			to: 'Home',
			icon: 'home',
		},
		{
			show: true,
			name: 'Buscar',
			to: 'Search',
			icon: 'search1',
		},
		{
			show: true,
			name: 'Escanear código',
			to: 'BarcodeScanner',
			icon: 'scan1',
		},
		{
			show: true,
			name: 'Historial',
			to: 'History',
			icon: 'clockcircleo',
		},
		{
			show: true,
			name: 'Mi cuenta',
			to: 'profile',
			icon: 'user',
		},
		{
			show: true,
			name: 'Favoritos',
			to: 'favorites',
			icon: 'hearto',
		},
		{
			show: true,
			name: 'spacer',
		},
		{
			show: true,
			name: 'Categorias',
			to: 'categories',
			icon: 'tagso',
		},
		{
			show: true,
			name: 'Tiendas',
			to: 'stores',
			icon: 'isv',
		},
		{
			show: true,
			name: 'spacer',
		},
		{
			show: true,
			name: 'Ayuda',
			to: 'help',
			icon: 'customerservice',
		},
		// {
		// 	show: true,
		// 	name: 'SignIn',
		// 	to: 'AuthStackScreen',
		// 	icon: 'login',
		// 	options: {
		// 		screen: 'SignIn',
		// 		params: { userId: 123 },
		// 	}
		// },
	];

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			drawerContainer: {
				flex: 1,
				paddingHorizontal: theme.spacing.s2,
			},
			headerContainer: {
				flexDirection: 'row',
				paddingVertical: theme.spacing.s8,
				paddingHorizontal: theme.spacing.s2,
			},
			itemsContainer: {
				padding: 0,
			},
			footerContainer: {
				paddingVertical: theme.spacing.s8,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	const getActiveRoute = (routes, index, name) => {
		return routes[index].name.toLowerCase() === name.toLowerCase();
	};
	const renderIcon = (icon, { focused, color, size }) => {
		return <Icon family="AntDesign" color="white" size={size} name={icon} />;
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.drawerContainer}>
				<View style={styles.headerContainer}>
					<View
						style={{
							width: 60,
							height: 60,
							backgroundColor: 'white',
							marginRight: 16,
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 4,
						}}
					>
						<Text style={{ color: 'blue', fontSize: 24, fontWeight: 'bold' }}>
							ED
						</Text>
					</View>
					<View style={{ justifyContent: 'center' }}>
						<Text style={{ color: 'white', fontSize: 18 }}>Elder Da Cruz</Text>
						<Text style={{ color: 'white', fontSize: 14 }}>
							Ing. informática
						</Text>
					</View>
				</View>
				<ScrollView style={styles.itemsContainer}>
					{items.map(({ show, to, name, icon, options }, index) => {
						if (name === 'spacer' && show) {
							return (
								<View
									key={index}
									style={{
										backgroundColor: '#ffffff',
										opacity: 0.2,
										height: 1,
										marginVertical: 24,
									}}
								/>
							);
						}
						if (show) {
							return (
								<DrawerItem
									key={index}
									label={name}
									onPress={() => navigation.navigate(to, options)}
									icon={(props) => renderIcon(icon, props)}
									focused={getActiveRoute(state.routes, state.index, to)}
									activeTintColor="white"
									labelStyle={{ color: 'white' }}
								/>
							);
						} else {
							return null;
						}
					})}
				</ScrollView>
				<View style={styles.footerContainer}>
					<DrawerItem
						label={'Logout'}
						onPress={() => {}}
						icon={(props) => renderIcon('logout', props)}
						activeTintColor="white"
						labelStyle={{ color: 'white' }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const NavigationDrawer = (props) => {
	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: theme.color.primary,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	return (
		<View style={styles.container}>
			<DrawerStack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
					drawerType: 'slide',
					overlayColor: 'transparent',
					drawerStyle: {
						flex: 1,
						width: '65%',
						backgroundColor: 'transparent',
					},
					sceneContainerStyle: {
						backgroundColor: 'transparent',
					},
				}}
				drawerContent={(props) => {
					return <NavigationDrawerContent {...props} />;
				}}
			>
				<DrawerStack.Screen name="Home">
					{(props) => <Home {...props} />}
				</DrawerStack.Screen>
				<DrawerStack.Screen name="Search">
					{(props) => <Search {...props} />}
				</DrawerStack.Screen>
				<DrawerStack.Screen name="Cart">
					{(props) => <Cart {...props} />}
				</DrawerStack.Screen>
			</DrawerStack.Navigator>
		</View>
	);
};

NavigationDrawer.propTypes = {};

export default NavigationDrawer;
