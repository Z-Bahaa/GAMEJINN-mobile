import React, {useState, forwardRef, useImperativeHandle} from 'react'
import { HStack, Text, useTheme, Icon, Box, Center, useMediaQuery } from 'native-base'
import {  TextInput } from 'react-native';
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      flexGrow: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.brandPrimary,
      paddingVertical: theme.spacing[12],
    },
    text: {
      color: theme.colors.textGrey,
    },
  });

  return styleSheet
}

const NotFound = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
  const [searchValue, setSearchValue] = useState('') 
    const {ids, styles} = makeStyles();
    const {
      colors,
      spacing,
      fontSize,
      sizes,
      borderRadius,
    } = useTheme(); 

   



  return (
    <Box  style={styles.container} dataSet={{ media: ids.container}} >
      <Text style={styles.text} dataSet={{ media: ids.text}} >no results found.</Text>
    </Box>
  )
}


export default NotFound
