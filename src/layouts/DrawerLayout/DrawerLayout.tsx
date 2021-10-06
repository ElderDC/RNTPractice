import React from 'react';
import PropTypes from 'prop-types';
import {
	ScrollView,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { Button, Icon } from 'components/ui/atoms';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const DrawerLayout = (props) => {
	const { navigation, route, title, children, withScroll } = props;
	const progress = useDrawerProgress();
	const insets = useSafeAreaInsets();
	const { width, height } = useWindowDimensions();

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: theme.color.background1,
				overflow: 'hidden',
			},
			title: {
				...theme.text.title2,
				color: theme.color.surface1,
				textTransform: 'uppercase',
			},
			header: {
				paddingTop: insets.top,
				paddingHorizontal: 12,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: theme.color.background2,
				elevation: 6,
			},
			headerContent: {
				flexDirection: 'row',
				alignItems: 'center',
			},
		});
		return styles;
	};
	const styles = useThemeAwareObject(createStyles);

	const drawerAnimation = {
		borderRadius: Animated.interpolateNode(progress, {
			inputRange: [0, 1],
			outputRange: [0, 28],
		}),
		transform: [
			{
				scale: Animated.interpolateNode(progress, {
					inputRange: [0, 1],
					outputRange: [1, 0.8],
				}),
			},
			{
				translateX: Animated.interpolateNode(progress, {
					inputRange: [0, 1],
					outputRange: [0, -36],
				}),
			},
		],
	};

	return (
		<Animated.View style={[styles.container, drawerAnimation]}>
			<View style={{ flex: 1 }}>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : null}
					style={{ flex: 1 }}
				>
					<View style={styles.header}>
						<View style={styles.headerContent}>
							<Button
								icon
								backgroundColor="transparent"
								color="primary"
								size="xl"
								onPress={(event) => navigation.openDrawer()}
								content={({ styleIcon }) => (
									<Icon
										family="MaterialIcons"
										name="menu"
										style={[styleIcon]}
									/>
								)}
								style={{ marginRight: 12 }}
							/>
							<Text style={styles.title}>{title}</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							{route.name === 'Search' ? (
								<Button
									icon
									backgroundColor="transparent"
									color="primary"
									size="lg"
									onPress={(event) => navigation.navigate('BarcodeScanner')}
									content={({ styleIcon }) => (
										<Icon family="AntDesign" name="scan1" style={[styleIcon]} />
									)}
								/>
							) : (
								<Button
									icon
									backgroundColor="transparent"
									color="primary"
									size="lg"
									onPress={(event) => navigation.navigate('Search')}
									content={({ styleIcon }) => (
										<Icon
											family="AntDesign"
											name="search1"
											style={[styleIcon]}
										/>
									)}
								/>
							)}
							<Button
								icon
								backgroundColor="transparent"
								color="primary"
								size="lg"
								onPress={(event) => navigation.navigate('Cart')}
								content={({ styleIcon }) => (
									<Icon
										family="AntDesign"
										name="shoppingcart"
										style={[styleIcon]}
									/>
								)}
							/>
						</View>
					</View>
					{withScroll ? (
						<ScrollView>{children}</ScrollView>
					) : (
						<View style={{ flex: 1 }}>{children}</View>
					)}
				</KeyboardAvoidingView>
			</View>
		</Animated.View>
	);
};

DrawerLayout.propTypes = {};

export default DrawerLayout;
