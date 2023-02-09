import {   Box, useTheme, ScrollView,useMediaQuery } from 'native-base';
import StyleSheet from 'react-native-media-query';
import theme from './theme'
import { useFonts } from 'expo-font'

import MainStack from './navigation/mainStack'
import Search from './screens/Search'


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({

    container: {
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
    },
  });

  return styleSheet
}

export default function SubApp() {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });

  const {ids, styles} = makeStyles();

  return (
      <Box safeArea style={styles.container} dataSet={{ media: ids.container}}>
          <MainStack />
      </Box>
    );
}
