import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native';

const Loading = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Loading</Text>
		</SafeAreaView>
	);
};

Loading.propTypes = {};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Loading;
