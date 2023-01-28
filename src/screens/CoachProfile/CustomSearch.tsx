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
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 'auto',
      marginVertical: theme.spacing[12],
      backgroundColor: theme.colors.brandSecondary,
      paddingStart: theme.spacing[12],
      borderRadius: theme.borderRadius[4],
    },
    logo: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.textPrimary,
    },
    backIcon: {
      // size:  24,
      // color: colors.textPrimary,
      // // marginBottom: theme.spacing[12]
      // padding: theme.spacing[8]
    },
    searchInput: {
      width: '100%',
      fontSize: theme.fontSize.xs,
      height: 48,
      paddingBottom: 6,
      backgroundColor: theme.colors.brandSecondary,
    },
    searchIconBox: {
      backgroundColor: theme.colors.brandSecondary,
      height: 48,
      paddingStart: theme.spacing[8],
      borderLeftColor: theme.colors.yellow,
      borderLeftWidth: 1,
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
        </>) : "" }
      <Icon as={MaterialIcons} name="arrow-back-ios" size='26px' color={colors.textPrimary}  />
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
