import React, {useState, forwardRef, useImperativeHandle} from 'react'
import { HStack, Text, useTheme, Icon, Input, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons';

import SearchIcon from './SearchIcon'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      height: 'auto',
      paddingVertical: theme.spacing[12],
      // paddingStart: theme.spacing[16],
      // paddingEnd: theme.spacing[12],
      // '@media (min-width: 800px)': {
      //   paddingHorizontal: 100,
      // },
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

const SearchHeader = () => {
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
    <HStack  style={styles.container} dataSet={{ media: ids.container}} >
      {!isSmallScreen ? (<>
        <Text style={styles.logo} dataSet={{ media: ids.logo}}>gamejinn</Text>
        <Icon as={MaterialIcons} name="arrow-back-ios" size='28px' color={colors.textPrimary}  ml={spacing[12]} mr={spacing[8]} m={2} />
        </>) : "" }
      <Input 
          style={styles.searchInput} dataSet={{ media: ids.searchInput}}
          placeholder={'search by the coach or the game'}
          variant='unstyled'
          flex={1}
          InputLeftElement={
            <Center style={styles.searchIconBox}  dataSet={{ media: ids.searchIconBox}}>
              <SearchIcon/>
            </Center>
          }
          value={searchValue}
          onChangeText={(value: any) => setSearchValue(value)}
        />
        
    </HStack>
  )
}


export default SearchHeader
