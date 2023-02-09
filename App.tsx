import 'react-native-gesture-handler';
import { NativeBaseProvider, } from 'native-base';
import theme from './src/theme'
import { useFonts } from 'expo-font'

import SubApp from './src/index'


export default function App() {
  const [fontsLoaded] = useFonts({
    "bungee": require('./assets/fonts/Bungee-Regular.ttf'),
  })
  if (!fontsLoaded) {
    return null
  }

  return (
        <NativeBaseProvider theme={theme} >
            <SubApp/>
        </NativeBaseProvider>
    );
}
