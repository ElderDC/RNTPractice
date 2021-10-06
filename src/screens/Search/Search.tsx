import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Column, Icon, Ripple, Row } from 'components/ui/atoms';
import { DrawerLayout } from 'layouts';
import { ScrollView } from 'react-native-gesture-handler';

const Search = (props) => {
	const { navigation, route } = props;
	return (
		<DrawerLayout title="Search" withScroll {...props}>
			<Row style={{ padding: 4 }}>
				<Column sm={12} style={{ padding: 12 }}>
					<Button
						icon
						rounded
						backgroundColor="transparent"
						color="error"
						size="xs"
						content={({ style, styleIcon }) => (
							<Icon family="AntDesign" name="hearto" style={[styleIcon]} />
						)}
					/>
					<Button
						icon
						rounded
						backgroundColor="transparent"
						color="error"
						size="sm"
						content={({ style, styleIcon }) => (
							<Icon family="AntDesign" name="hearto" style={[styleIcon]} />
						)}
					/>
					<Button
						icon
						rounded
						backgroundColor="transparent"
						color="error"
						content={({ style, styleIcon }) => (
							<Icon family="AntDesign" name="hearto" style={[styleIcon]} />
						)}
					/>
					<Button
						icon
						rounded
						backgroundColor="transparent"
						color="error"
						size="lg"
						content={({ style, styleIcon }) => (
							<Icon family="AntDesign" name="hearto" style={[styleIcon]} />
						)}
					/>
					<Button
						icon
						rounded
						backgroundColor="transparent"
						color="error"
						size="xl"
						content={({ style, styleIcon }) => (
							<Icon family="AntDesign" name="hearto" style={[styleIcon]} />
						)}
					/>
				</Column>
			</Row>
		</DrawerLayout>
	);
};

Search.propTypes = {};

export default Search;
