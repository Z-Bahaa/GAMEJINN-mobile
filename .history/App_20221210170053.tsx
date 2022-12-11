import {  Text, Box, NativeBaseProvider, useTheme, } from 'native-base';
import StyleSheet from 'react-native-media-query';
import theme from './src/theme'
import { useFonts } from 'expo-font'

import QuickSearch from './src/screens/QuickSearch'
// import Search from './src/screens/Search'
// import Coaches from './src/screens/Coaches'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
    },
  });

  return styleSheet
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "bungee": require('./assets/fonts/Bungee-Regular.ttf'),
  })
  if (!fontsLoaded) {
    return null
  }

  const {ids, styles} = makeStyles();

  return (
    <NativeBaseProvider theme={theme} >
      <App></App>
    </NativeBaseProvider>
    );
}
