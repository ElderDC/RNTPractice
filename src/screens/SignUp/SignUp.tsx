import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthLayout } from 'layouts';
import { Button, Column, Link, Row, TextField } from 'components/ui/atoms';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';

const createStyles = (theme: Theme) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: 'column',
			// backgroundColor: theme.color.background1,
			// padding: theme.spacing.s4
		},
		imageContainer: {
			height: 150,
			width: '100%',
			// backgroundColor: theme.color.background1,
			borderTopLeftRadius: theme.spacing.s9,
			borderTopRightRadius: theme.spacing.s9,
		},
		image: {
			width: '100%',
			borderRadius: theme.spacing.s1,
		},
		title: {
			...theme.text.h5,
			textAlign: 'center',
			color: theme.color.primary,
			marginLeft: theme.spacing.s2,
		},
		subtitle: {
			...theme.text.body2,
			textTransform: 'uppercase',
			textAlign: 'center',
			color: theme.color.surface1,
		},
	});
	return styles;
};

const SignUp = (props) => {
	// Props
	const { navigation } = props;
	// State
	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	// Styles
	const styles = useThemeAwareObject(createStyles);

	return (
		<AuthLayout {...props}>
			<Row style={{ padding: 12 }}>
				<Column style={{ padding: 8 }}>
					<View style={styles.imageContainer}>
						<Image
							resizeMode="contain"
							style={[styles.image, { height: '100%', width: '100%' }]}
							source={{
								uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
							}}
						/>
					</View>
				</Column>
				<Column style={{ padding: 8 }}>
					<Text style={styles.title}>Lets sign you up</Text>
				</Column>
				<Column style={{ padding: 8 }}>
					<TextField
						type="name"
						keyboardType="default"
						label="Username"
						prependIcon="user"
						prependIconFamily="AntDesign"
						clearabled
						solo
						value={userName}
						onChangeText={(text) => setUserName(text)}
					/>
				</Column>
				<Column style={{ padding: 8 }}>
					<TextField
						type="telephoneNumber"
						keyboardType="phone-pad"
						label="Phone"
						prependIcon="phone"
						prependIconFamily="AntDesign"
						clearabled
						solo
						value={phone}
						onChangeText={(text) => setPhone(text)}
					/>
				</Column>
				<Column style={{ padding: 8 }}>
					<TextField
						type="emailAddress"
						keyboardType="email-address"
						label="Email"
						prependIcon="mail"
						prependIconFamily="AntDesign"
						clearabled
						solo
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</Column>
				<Column style={{ padding: 8 }}>
					<TextField
						type="password"
						label="Password"
						prependIcon="lock"
						prependIconFamily="AntDesign"
						clearabled
						solo
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</Column>
				<Column style={{ padding: 8 }}>
					<TextField
						type="password"
						label="Confirm password"
						prependIcon="lock"
						prependIconFamily="AntDesign"
						clearabled
						solo
						secureTextEntry
						value={confirmPassword}
						onChangeText={(text) => setConfirmPassword(text)}
					/>
				</Column>
				{/* <Column sm={12} style={{ padding: 8 }}>
					<Link color='surface2' style={{ textAlign: 'right', fontWeight: 'bold' }}>
						Forgot password?
					</Link>
				</Column> */}
				<Column style={{ padding: 8 }}>
					<Button
						backgroundColor="primary"
						color="white"
						size="xl"
						// onPress={() => handleCounter(1)}
						content={({ style }) => <Text style={style}>Signup</Text>}
					/>
				</Column>
				<Column sm={12} style={{ padding: 8 }}>
					<Button
						backgroundColor="transparent"
						color="primary"
						size="xl"
						onPress={(event) =>
							navigation.navigate('AuthStackScreen', {
								screen: 'SignIn',
							})
						}
						content={({ style }) => <Text style={style}>Signin</Text>}
					/>
				</Column>
			</Row>
		</AuthLayout>
	);
};

SignUp.propTypes = {};

export default SignUp;
