export type IconFamily =
	| 'AntDesign'
	| 'Entypo'
	| 'EvilIcons'
	| 'Feather'
	| 'FontAwesome'
	| 'FontAwesome5'
	| 'Fontisto'
	| 'Foundation'
	| 'Ionicons'
	| 'MaterialIcons'
	| 'MaterialCommunityIcons'
	| 'Octicons'
	| 'SimpleLineIcons'
	| 'Zocial';

export interface IconProps {
	color?: string;
	family: IconFamily;
	name?: any;
	size?: number;
	style?: object | object[];
}
