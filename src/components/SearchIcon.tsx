import React from 'react'
import { Center, useTheme, Icon } from 'native-base'

import { AntDesign } from '@expo/vector-icons';
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
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

const SearchIcon = () => {

  const {ids, styles} = makeStyles();
  
  return (
    <Icon as={AntDesign} name="search1" size='20px' style={styles.searchIcon} dataSet={{ media: ids.searchIcon}}/>
  )
}

export default SearchIcon
