import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme, View, Text } from 'react-native';
import {COLORS} from './constants/theme';
import MainScreens from './navigations/MainScreens';
import { useFonts } from 'expo-font';

const App = () =>  {

  const scheme = useColorScheme();

  const [loaded] = useFonts({
    'Lato-Thin': {
      uri: require('./assets/fonts/Lato-Thin.ttf'),
    },
    'Lato-Light': {
      uri: require('./assets/fonts/Lato-Light.ttf'),
    },
    'Lato-Regular': {
      uri: require('./assets/fonts/Lato-Regular.ttf'),
    },
    'Lato-Bold': {
      uri: require('./assets/fonts/Lato-Bold.ttf'),
    },
    'Lato-Black': {
      uri: require('./assets/fonts/Lato-Black.ttf'),
    }
  })

  const MyThemeLight = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.backgroundLight,
    },
  };

  const MyThemeDark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
        background: COLORS.backgroundDark,
    }
  }

  return (
    loaded
      ? <NavigationContainer theme={scheme == 'dark' ? MyThemeDark : MyThemeLight}>
          <MainScreens />
        </NavigationContainer>
      : <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Ładowanie...</Text>
        </View>
    
      
  );
}

export default App;