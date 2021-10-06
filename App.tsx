import React, { useState } from 'react';
import { DEFAULT_LIGHT_THEME } from 'theme/DefaultLight.theme';
import { DEFAULT_DARK_THEME } from 'theme/DefaultDark.theme';
import { ThemeProvider } from 'theme/Theme.context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'navigation';
import { Appearance } from 'react-native';

const App = () => {
	const colorScheme = Appearance.getColorScheme();
	const [darkMode, setDarkMode] = useState(colorScheme === 'dark');

	return (
		<SafeAreaProvider>
			<ThemeProvider
				initial={darkMode ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME}
			>
				<Navigation />
			</ThemeProvider>
		</SafeAreaProvider>
	);
};

export default App;
