import React from 'react'
import { View, Text } from 'react-native'

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

const App = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default App
