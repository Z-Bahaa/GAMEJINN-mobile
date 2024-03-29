import React, {useState,} from 'react'
import { Pressable, HStack, Text, useTheme, Icon, Input, Center, useMediaQuery } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import makeStyles from './SearchHeaderStyles'


import { AntDesign } from '@expo/vector-icons';

const SearchHeader = ({navigation}) => {
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
    <Pressable onPress={() => navigation.navigate('Search')}>
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
            pt={2}
            isDisabled={true}
            InputLeftElement={
              <Center style={styles.searchIconBox}  dataSet={{ media: ids.searchIconBox}}>
                <Icon as={AntDesign} name="search1" size='20px' style={styles.searchIcon} dataSet={{ media: ids.searchIcon}}/>
              </Center>
            }
            value={searchValue}
            onChangeText={(value: any) => setSearchValue(value)}
          />
          
      </HStack>
    </Pressable>
  )
}


export default SearchHeader
