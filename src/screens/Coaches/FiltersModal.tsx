import React, {useState, forwardRef, useImperativeHandle} from 'react'
import { HStack, Text, useTheme, Icon, Pressable, Slider, useMediaQuery, Box, VStack } from 'native-base'
import StyleSheet from 'react-native-media-query';
import { SelectList} from 'react-native-dropdown-select-list'

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import SearchIcon from '../../components/SearchIcon'



const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'flex-end',
      backgroundColor: theme.colors.brandPrimary,
      paddingTop: theme.spacing[8],
      opacity: .95,
    },
    filtersContainer: {
      width: '100%',
      height: 600,
      backgroundColor: theme.colors.brandSecondary,
      position: 'absolute',
      borderTopLeftRadius: theme.borderRadius[16],
      borderTopRightRadius: theme.borderRadius[16],
      paddingTop: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[16],
    },
    selectBox: {
      marginTop: -theme.spacing[8],
      // marginBottom: -theme.spacing[12],
      paddingBottom: 0,
      // paddingTop: 0,
      paddingStart: 0,
      paddingEnd:  0,
      borderWidth: 0,
      borderRadius: 0,
      alignItems: 'center',
      borderBottomWidth: 1,
      // backgroundColor: theme.colors.textPrimary,
    },
    selectInput: {
      marginBottom: -theme.spacing[8]/2,
      marginStart: theme.spacing[8]/2,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      height: 50,
      // backgroundColor: theme.colors.textPrimary,
    },
    selectDropdown: {      
      paddingTop: 0,
      paddingStart: 0,
      paddingBottom: 0,
      borderWidth: 0,
      borderRadius: 0,
      marginStart: theme.spacing[8],
      marginTop: 0,
      // backgroundColor: theme.colors.textPrimary,
    },
    selectDropdownItem: {
      // backgroundColor: theme.colors.grey,
      marginBottom: theme.spacing[8]/2,
      paddingTop: 0,
      paddingStart: 0,
      paddingBottom: 0,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.grey,
    },
    selectDropdownText: {
      // backgroundColor: theme.colors.textPrimary,
      marginTop: -(theme.spacing[8] - 2),
      paddingTop: 0,
      paddingStart: 0,
      paddingBottom: 0,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    rangeBox: {
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.grey,
    },
    rangeInput: {
      paddingTop: theme.spacing[8],
      marginStart: theme.spacing[8]/2,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      // backgroundColor: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const FiltersModal = ({setSelectedGame, setSelectedServiceType, gamesData, serviceTypesData}) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
  const [rangeValues, setRangeValues] = useState([])
  const [rangeVisibility, setRangeVisibility] = useState(true)
    const {ids, styles} = makeStyles();
    const {
      colors,
      spacing,
      fontSize,
      sizes,
      borderRadius,
    } = useTheme(); 

   
    const formatGamesTitles= (data: any) => data.map((g: any, i: number) => ({ 
        key: g.id || i,
        value: g.title
      }));
    


  return (
    <VStack style={styles.container} dataSet={{ media: ids.container}} >
      <Box style={styles.filtersContainer} dataSet={{ media: ids.filtersContainer}} >
        <VStack>
          <SelectList 
          setSelected={setSelectedGame}
          onSelect={() => alert('this fires directly after selection and does not take any props \n the game id has been saved to the local state under the name of selectedGame')}
          data={formatGamesTitles(gamesData)}
          save='key'
          placeholder='games'
          searchicon={(<Icon as={AntDesign} name="search1" size='20px' mr={1.5} ml={1} mb={-.5} />)}
          arrowicon={(<Icon as={MaterialIcons} name="keyboard-arrow-down" size='28px' color={colors.textPrimary} mb={-.5} mr={.5} />)}
          closeicon={(<Icon as={MaterialIcons} name="close" size='21px' color={colors.textPrimary} mr={1.5} m={3} mb={2}/>)}
          searchPlaceholder="search game"
          fontFamily='bungee'
          notFoundText="no game found"
          boxStyles={styles.selectBox}
          inputStyles={styles.selectInput}
          dropdownStyles={styles.selectDropdown}
          dropdownItemStyles={styles.selectDropdownItem}
          dropdownTextStyles={styles.selectDropdownText}
          />

          <SelectList 
          setSelected={setSelectedServiceType}
          onSelect={() => alert('this fires directly after selection and does not take any props \n the game id has been saved to the local state under the name of selectedGame')}
          data={serviceTypesData}
          save='value'
          placeholder='service type'
          // searchicon={(<Icon as={AntDesign} name="search1" size='20px' mr={1.5} ml={1} mb={-.5} />)}
          arrowicon={(<Icon as={MaterialIcons} name="keyboard-arrow-down" size='28px' color={colors.textPrimary} mb={-.5} mr={.5} />)}
          closeicon={(<Icon as={MaterialIcons} name="close" size='21px' color={colors.textPrimary} mr={1.5} m={3} mb={2}/>)}
          // searchPlaceholder="search game"
          fontFamily='bungee'
          // notFoundText="no game found"
          boxStyles={styles.selectBox}
          inputStyles={styles.selectInput}
          dropdownStyles={styles.selectDropdown}
          dropdownItemStyles={styles.selectDropdownItem}
          dropdownTextStyles={styles.selectDropdownText}
          search={false}
          />

          <HStack style={styles.rangeBox} dataSet={{ media: ids.rangeBox}}>
            <Text style={styles.rangeInput} dataSet={{ media: ids.rangeInput}}>price range</Text>
            <Pressable onPress={() => setRangeVisibility(!rangeVisibility)}>
              {rangeVisibility ? <Icon as={MaterialIcons} name="close" size='21px' color={colors.textPrimary} mr={1.5} m={3} mb={2}/> : 
              <Icon as={MaterialIcons} name="keyboard-arrow-down" size='28px' color={colors.textPrimary} mb={-.5} mr={.5} />}
            </Pressable>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  )
}


export default FiltersModal
