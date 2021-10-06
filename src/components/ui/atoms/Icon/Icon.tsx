import React from 'react';
import PropTypes from 'prop-types';
import {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
} from '@expo/vector-icons';
import { IconProps } from './types';

const noop = () => {};

const Icon = (props: IconProps) => {
	const { color, family, name, size, style } = props;

	if (family === 'AntDesign') {
		return <AntDesign style={style} name={name} size={size} color={color} />;
	}
	if (family === 'Entypo') {
		return <Entypo style={style} name={name} size={size} color={color} />;
	}
	if (family === 'EvilIcons') {
		return <EvilIcons style={style} name={name} size={size} color={color} />;
	}
	if (family === 'Feather') {
		return <Feather style={style} name={name} size={size} color={color} />;
	}
	if (family === 'FontAwesome') {
		return <FontAwesome style={style} name={name} size={size} color={color} />;
	}
	if (family === 'FontAwesome5') {
		return <FontAwesome5 style={style} name={name} size={size} color={color} />;
	}
	if (family === 'Fontisto') {
		return <Fontisto style={style} name={name} size={size} color={color} />;
	}
	if (family === 'Foundation') {
		return <Foundation style={style} name={name} size={size} color={color} />;
	}
	if (family === 'Ionicons') {
		return <Ionicons style={style} name={name} size={size} color={color} />;
	}
	if (family === 'MaterialIcons') {
		return (
			<MaterialIcons style={style} name={name} size={size} color={color} />
		);
	}
	if (family === 'MaterialCommunityIcons') {
		return (
			<MaterialCommunityIcons
				style={style}
				name={name}
				size={size}
				color={color}
			/>
		);
	}
	if (family === 'Octicons') {
		return <Octicons style={style} name={name} size={size} color={color} />;
	}
	if (family === 'SimpleLineIcons') {
		return (
			<SimpleLineIcons style={style} name={name} size={size} color={color} />
		);
	}
	if (family === 'Zocial') {
		return <Zocial style={style} name={name} size={size} color={color} />;
	}
};

Icon.defaultProps = {
	family: 'AntDesign',
	name: 'home',
	style: {},
};

Icon.propTypes = {
	backgroundColor: PropTypes.string,
	color: PropTypes.string,
	family: PropTypes.string,
	name: PropTypes.string,
	size: PropTypes.number,
	style: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object),
	]),
};

export default Icon;
