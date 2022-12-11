import {  Text, Box, NativeBaseProvider, useTheme, } from 'native-base';
import StyleSheet from 'react-native-media-query';
import theme from './src/theme'
import { useFonts } from 'expo-font'

import QuickSearch from './src/screens/QuickSearch'
// import Search from './src/screens/Search'
// import Coaches from './src/screens/Coaches'


export default function App() {
  const [fontsLoaded] = useFonts({
    "bungee": require('./assets/fonts/Bungee-Regular.ttf'),
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme} >
      <App/>
    </NativeBaseProvider>
    );
}
