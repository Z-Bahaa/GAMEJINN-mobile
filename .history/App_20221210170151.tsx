import {  Text, Box, NativeBaseProvider, useTheme, } from 'native-base';
import theme from './src/theme'
import { useFonts } from 'expo-font'


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
