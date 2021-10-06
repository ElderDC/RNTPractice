import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { Loading, SignIn, SignUp, BarcodeScanner, Product } from 'screens';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import NavigationDrawer from 'navigation/NavigationDrawer';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			header: {
				flex: 1,
				backgroundColor: 'transparent',
				elevation: 0,
			},
		});
		return styles;
	};

	const styles = useThemeAwareObject(createStyles);

	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="SignIn" component={SignIn} />
			<AuthStack.Screen name="SignUp" component={SignUp} />
		</AuthStack.Navigator>
	);
};

const RootStackScreen = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [user, setUser] = React.useState(null);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(!isLoading);
			setUser({});
		}, 500);
	}, []);

	const config = {
		animation: 'spring',
	};

	return (
		<RootStack.Navigator
			screenOptions={{
				headerShown: false,
				animationEnabled: false,
				presentation: 'transparentModal',
				cardOverlayEnabled: true,
			}}
		>
			{isLoading ? (
				<RootStack.Screen name="Loading" component={Loading} />
			) : (
				<>
					<RootStack.Screen
						name="AppDrawerScreen"
						component={NavigationDrawer}
						options={{ animationEnabled: true }}
					/>
					<RootStack.Screen
						name="AuthStackScreen"
						component={AuthStackScreen}
						options={{ animationEnabled: true }}
					/>
				</>
			)}
			<RootStack.Screen
				name="BarcodeScanner"
				component={BarcodeScanner}
				options={{
					animationEnabled: true,
					...TransitionPresets.ModalTransition,
				}}
			/>
			<RootStack.Screen
				name="Product"
				component={Product}
				options={{
					animationEnabled: true,
					...TransitionPresets.ModalTransition,
				}}
			/>
		</RootStack.Navigator>
	);
};

const Navigation = (props) => {
	return (
		<NavigationContainer>
			<RootStackScreen />
		</NavigationContainer>
	);
};

export default Navigation;
