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
      backgroundColor: themecolors.brandPrimary,
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
  return (
    <NativeBaseProvider theme={theme} >
      <Box safeArea style={styles.container} >
        <QuickSearch />
      </Box>
    </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#1e0d2a",
  },
});
