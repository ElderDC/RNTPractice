import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, _Text } from 'react-native';
import { Camera } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button, Icon } from 'components/ui/atoms';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

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
		},
		row: {
			flex: 1,
			justifyContent: 'center',
			padding: theme.spacing.s6,
		},
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
		barcodeContainer: {
			alignItems: 'center',
			justifyContent: 'center',
			height: 300,
			width: 300,
		},
		barcodeBox: {
			backgroundColor: theme.color.black,
			alignItems: 'center',
			justifyContent: 'center',
			height: 280,
			width: 280,
			overflow: 'hidden',
			borderRadius: theme.spacing.s8,
		},
		edge: {
			position: 'absolute',
			height: 60,
			width: 60,
			borderColor: theme.color.secondary,
		},
		topLeftEdge: {
			top: -6,
			left: -6,
			borderLeftWidth: theme.spacing.s2,
			borderTopWidth: theme.spacing.s2,
			borderTopLeftRadius: theme.spacing.s12,
		},
		bottomLeftEdge: {
			bottom: -6,
			left: -6,
			borderLeftWidth: theme.spacing.s2,
			borderBottomWidth: theme.spacing.s2,
			borderBottomLeftRadius: theme.spacing.s12,
		},
		topRightEdge: {
			top: -6,
			right: -6,
			borderRightWidth: theme.spacing.s2,
			borderTopWidth: theme.spacing.s2,
			borderTopRightRadius: theme.spacing.s12,
		},
		bottomRightEdge: {
			bottom: -6,
			right: -6,
			borderRightWidth: theme.spacing.s2,
			borderBottomWidth: theme.spacing.s2,
			borderBottomRightRadius: theme.spacing.s12,
		},
		scanline: {
			width: '100%',
			height: 1,
			position: 'absolute',
			top: '50%',
			backgroundColor: theme.color.secondary,
		},
	});
	return styles;
};

const BarcodeScanner = ({ navigation, route, props }) => {
	const styles = useThemeAwareObject(createStyles);
	const [hasPermission, setHasPermission] = useState(null);
	const [isLoad, setIsLoad] = useState(false);
	const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);

	const turnFlashMode = () => {
		setFlashMode(
			flashMode === Camera.Constants.FlashMode.off
				? Camera.Constants.FlashMode.torch
				: Camera.Constants.FlashMode.off,
		);
	};

	const askForCameraPermission = () => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	};

	const layoutIsLoad = () => {
		(async () => {
			setTimeout(() => setIsLoad(true), 500);
		})();
	};

	// Request Camera Permission
	useEffect(() => {
		askForCameraPermission();
		layoutIsLoad();
	}, []);

	// What happens when we scan the bar code
	const handleBarCodeScanned = ({ type, data }) => {
		navigation.navigate('Product', { barcode: data });
	};

	// Check permissions and return the screens
	if (hasPermission === null) {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text>Requesting for camera permission</Text>
				</View>
			</SafeAreaView>
		);
	}
	if (hasPermission === false) {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={{ margin: 10 }}>No access to camera</Text>
					<Button
						onPress={() => askForCameraPermission()}
						backgroundColor="primary"
						color="white"
						size="lg"
						content={({ style }) => <Text style={style}>Permitir camara</Text>}
					/>
				</View>
			</SafeAreaView>
		);
	}

	// Return the View
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.title}>Escanear producto</Text>
					<Text style={styles.paragraph}>
						Coloque el código de barras dentro del marco para escanear. Mantenga
						su dispositivo estable al escanear para garantizar resultados
						precisos.
					</Text>
				</View>
				<View style={styles.barcodeContainer}>
					<View style={styles.barcodeBox}>
						{isLoad && (
							<Camera
								onBarCodeScanned={handleBarCodeScanned}
								flashMode={flashMode}
								style={{ height: 400, width: 300 }}
							/>
						)}
						<View style={styles.scanline} />
					</View>
					<View style={[styles.edge, styles.topLeftEdge]}></View>
					<View style={[styles.edge, styles.bottomLeftEdge]}></View>
					<View style={[styles.edge, styles.topRightEdge]}></View>
					<View style={[styles.edge, styles.bottomRightEdge]}></View>
				</View>
				<View style={styles.row}>
					<Button
						rounded
						icon
						onPress={() => turnFlashMode()}
						backgroundColor="transparent"
						color="surface2"
						size="xl"
						content={({ styleIcon }) => (
							<Icon
								family="Ionicons"
								name={
									flashMode === Camera.Constants.FlashMode.off
										? 'flash-outline'
										: 'flash-off-outline'
								}
								style={[styleIcon]}
							/>
						)}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

BarcodeScanner.propTypes = {};

export default BarcodeScanner;
