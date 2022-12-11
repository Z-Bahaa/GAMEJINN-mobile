import {   Box, useTheme, } from 'native-base';
import StyleSheet from 'react-native-media-query';
import theme from './theme'
import { useFonts } from 'expo-font'

import QuickSearch from './screens/QuickSearch'
// import Search from './screens/Search'
// import Coaches from './screens/Coaches'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      margin
    },
  });

  return styleSheet
}

export default function SubApp() {

  const {ids, styles} = makeStyles();

  return (
      <Box safeArea style={styles.container} dataSet={{ media: ids.container}}>
        <QuickSearch />
      </Box>
    );
}
