import {  Text, Box, NativeBaseProvider, } from 'native-base';
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
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      height: 'auto',
      paddingVertical: theme.spacing[12],
    },
    logo: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.textPrimary,
    },
    backIcon: {
      // size:  24,
      // color: colors.textPrimary,
      // marginBottom: theme.spacing[12]
    },
    searchInput: {
      width: '100%',
      fontSize: theme.fontSize.xs,
      borderTopRightRadius: theme.borderRadius[4],
      borderBottomRightRadius: theme.borderRadius[4],
      height: 48,
      paddingBottom: 6,
      backgroundColor: theme.colors.brandSecondary,
    },
    searchIconBox: {
      backgroundColor: theme.colors.brandSecondary,
      height: 48,
      borderTopLeftRadius: theme.borderRadius[4],
      borderBottomLeftRadius: theme.borderRadius[4],
      paddingStart: theme.spacing[8],
    },
    searchIcon: {
      // fontSize: 20,
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
