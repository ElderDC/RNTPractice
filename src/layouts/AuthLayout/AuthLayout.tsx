import React from 'react';
import PropTypes from 'prop-types';
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from 'theme/Theme.interface';
import { useThemeAwareObject } from 'hooks/useThemeHook';
import { Button, Icon } from 'components/ui/atoms';

const AuthLayout = (props) => {
	const { navigation, route, title, children } = props;
	const insets = useSafeAreaInsets();
	const { width, height } = useWindowDimensions();

	const createStyles = (theme: Theme) => {
		const styles = StyleSheet.create({
			container: {
				flex: 1,
				paddingTop: insets.top,
				backgroundColor: theme.color.background1,
				overflow: 'hidden',
			},
			title: {
				...theme.text.title2,
				color: theme.color.surface1,
				textTransform: 'uppercase',
			},
			header: {
				padding: theme.spacing.s3,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'transparent',
			},
			headerContent: {
				flexDirection: 'row',
				alignItems: 'center',
			},
		});
		return styles;
	};
	const styles = useThemeAwareObject(createStyles);
	return (
		<View style={styles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : null}
				style={{ flex: 1 }}
			>
				<ScrollView>
					<View style={styles.header}>
						<View style={styles.headerContent}>
							<Button
								icon
								backgroundColor="transparent"
								color="surface2"
								onPress={(event) => navigation.goBack()}
								content={({ styleIcon }) => (
									<Icon family="AntDesign" name="left" style={[styleIcon]} />
								)}
								style={{ marginRight: 12 }}
							/>
							<Text style={styles.title}>{title}</Text>
						</View>
					</View>
					{children}
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	);
};

AuthLayout.propTypes = {};

export default AuthLayout;
