import React, {useState,} from 'react'
import { HStack, Text, useTheme, FlatList, Pressable, Center, useMediaQuery, Box, VStack, Button, Image, Icon } from 'native-base'

import makeStyles from './styles'

import SearchHeader from '../../components/SearchHeader';
import SvgFadersHorizontal from './SvgFadersHorizontal'
import { SelectList} from 'react-native-dropdown-select-list'

import { AntDesign, MaterialIcons} from '@expo/vector-icons'


import { coachesList, filterGames, filterServiceTypes, priceRanges} from '../../dummyData/Coaches'


const Coaches = ({navigation}: any) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
  const {ids, styles} = makeStyles();
  const {
    colors,
    spacing,
    fontSize,
    sizes,
    borderRadius,
  } = useTheme(); 

  const [filtersVisibility, setFiltersVisibility] = useState(true);
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState(true);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(true);


  const CoachesHeading = ({primaryText, buttonOnPress}: any) => (<HStack  style={styles.coachesHeadingContainer} dataSet={{ media: ids.coachesHeadingContainer}} >
      <Text style={styles.coachesHeadingPrimaryText} dataSet={{ media: ids.coachesHeadingPrimaryText}} >{primaryText}</Text>
      <Button variant="unstyled" p={0} style={styles.coachesHeadingButton} dataSet={{ media: ids.coachesHeadingButton}} onPress={buttonOnPress}>
        <HStack>
          <Text style={styles.coachesHeadingButtonText} dataSet={{ media: ids.coachesHeadingButtonText}} mt={isSmallScreen ? 1 : 0}>filters</Text>
          <SvgFadersHorizontal size='21px' color={colors.textSecondary}  />
        </HStack>
      </Button>
    </HStack>
  )
  
  const CoachesGrid = ({data, itemOnPress}: any) => (<Box style={styles.coachesGridContainer} dataSet={{ media: ids.coachesGridContainer}}>
    <Box style={styles.coachesGridGridContainer} dataSet={{ media: ids.coachesGridGridContainer}}>
      <FlatList 
        // scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (<Text style={styles.coachesGridDescription} dataSet={{ media: ids.coachesGridDescription}} >
          Choose from players besting you at your favorite game and then hire them to teach you everything they know.
          </Text>)}
        data={data.slice(0,25)}
        numColumns={isSmallScreen ? 2 : 4}
        renderItem={({ item }: {item: any}) => (
          <Pressable onPress={itemOnPress}  style={styles.coachesGridItemContainer} dataSet={{ media: ids.coachesGridItemContainer}}>
            <VStack style={styles.coachesGridItem} dataSet={{ media: ids.coachesGridItem}}>
              <Box style={styles.coachesGridImageContainer} dataSet={{ media: ids.coachesGridImageContainer}}>
                <Image alt='hi' source={{uri: item.imageUrl}} style={styles.coachesGridImage} dataSet={{ media: ids.coachesGridImage}}/>
                <Center style={styles.coachesGridFloatingTextBox} dataSet={{ media: ids.coachesGridFloatingTextBox}}>
                  <Text style={styles.coachesGridFloatingText} dataSet={{ media: ids.coachesGridFloatingText}}>{'starting at ' + item.startingAt + ' EGP'} </Text>
                </Center>
              </Box>
              <Text style={styles.coachesGridName} dataSet={{ media: ids.coachesGridName}}>{item.name} </Text>
              {item.games?.slice(0,1).map((g: any, i: number) => (<Text style={styles.coachesGridGameText} dataSet={{ media: ids.coachesGridGameText}} key={i}>{g.title + ' coach'} </Text>))}
            </VStack>
          </Pressable>
        )}
      />
    </Box>
  </Box>
  )

  const formatGamesTitles= (data: any) => data.map((g: any, i: number) => ({ 
    key: g.id || i,
    value: g.title
  }));

  const FiltersModal = ({setSelectedGame, setSelectedServiceType, gamesData, serviceTypesData, setSelectedPriceFilter, buttonOnPress}: any) => {
    return (
      <VStack style={styles.filtersModalContainer} dataSet={{ media: ids.filtersModalContainer }}>
        <Box style={styles.filtersModalFiltersContainer} dataSet={{ media: ids.filtersModalFiltersContainer }}>
          <VStack>
            <SelectList
              setSelected={setSelectedGame}
              onSelect={() => alert('this fires directly after selection and does not take any props \n the game id has been saved to the local state under the name of selectedGame')}
              data={formatGamesTitles(gamesData)}
              save='key'
              placeholder='games'
              searchicon={(<Icon as={AntDesign} name="search1" size='20px' mr={1.5} ml={1} mb={-.5} />)}
              // arrowicon={(<Icon as={MaterialIcons} name="keyboard-arrow-down" size='28px' color={colors.textPrimary} mb={-.5} mr={.5} />)}
              closeicon={(<Icon as={MaterialIcons} name="close" size='21px' color={colors.textPrimary} mr={1.5} m={3} mb={2} />)}
              searchPlaceholder="search game"
              fontFamily='bungee'
              notFoundText="no game found"
              boxStyles={styles.filtersModalSelectBox}
              inputStyles={styles.filtersModalSelectInput}
              dropdownStyles={styles.filtersModalSelectDropdown}
              dropdownItemStyles={styles.filtersModalSelectDropdownItem}
              dropdownTextStyles={styles.filtersModalSelectDropdownText} />

            <SelectList
              setSelected={setSelectedServiceType}
              onSelect={() => alert('this fires directly after selection and does not take any props \n the game id has been saved to the local state under the name of selectedGame')}
              data={serviceTypesData}
              save='value'
              placeholder='service type'
              // searchicon={(<Icon as={AntDesign} name="search1" size='20px' mr={1.5} ml={1} mb={-.5} />)}
              // arrowicon={(<Icon as={MaterialIcons} name="circle" size='21px' color={colors.textPrimary} mb={-.5} mr={1.5} />)}
              closeicon={(<Icon as={MaterialIcons} name="close" size='21px' color={colors.textPrimary} mr={1.5} m={3} mb={2} />)}
              // searchPlaceholder="search game"
              fontFamily='bungee'
              // notFoundText="no game found"
              boxStyles={styles.filtersModalSelectBox}
              inputStyles={styles.filtersModalSelectInput}
              dropdownStyles={styles.filtersModalSelectDropdown}
              dropdownItemStyles={styles.filtersModalSelectDropdownItem}
              dropdownTextStyles={styles.filtersModalSelectDropdownText}
              search={false} />

            <SelectList
              setSelected={setSelectedPriceFilter}
              onSelect={() => alert('this fires directly after selection and does not take any props \n the game id has been saved to the local state under the name of selectedGame')}
              data={['low to high', 'high tol low']}
              save='value'
              placeholder='price'
              // searchicon={(<Icon as={AntDesign} name="search1" size='20px' mr={1.5} ml={1} mb={-.5} />)}
              // arrowicon={(<Icon as={MaterialIcons} name="circle" size='21px' color={colors.textPrimary} mb={-.5} mr={1.5} />)}
              closeicon={(<Icon as={MaterialIcons} name="close" size='21px' color={colors.textPrimary} mr={1.5} m={3} mb={2} />)}
              // searchPlaceholder="search game"
              fontFamily='bungee'
              // notFoundText="no game found"
              boxStyles={styles.filtersModalSelectBox}
              inputStyles={styles.filtersModalSelectInput}
              dropdownStyles={styles.filtersModalSelectDropdown}
              dropdownItemStyles={styles.filtersModalSelectDropdownItem}
              dropdownTextStyles={styles.filtersModalSelectDropdownText}
              search={false} />


          </VStack>

          <Button style={styles.filtersModalNextButton} dataSet={{ media: ids.filtersModalNextButton }} onPress={buttonOnPress}>
            <Text style={styles.filtersModalNextButtonText} dataSet={{ media: ids.filtersModalNextButtonText }}>submit</Text>
          </Button>
        </Box>
      </VStack>
    );
  }



  return (
    <VStack style={styles.container} dataSet={{ media: ids.container}} >
      <Box style={styles.searchContainer} dataSet={{ media: ids.searchContainer}} >
        <SearchHeader navigation={navigation} />
      </Box>
      <CoachesHeading primaryText='coaches' buttonOnPress={() => setFiltersVisibility(true)} />
        <CoachesGrid data={coachesList} itemOnPress={() => navigation.navigate('CoachProfile')}/>
      {filtersVisibility ? <FiltersModal 
        setSelectedGame={(val: any) => setSelectedGame(val)} 
        gamesData={filterGames}
        setSelectedServiceType={(val: any) => setSelectedServiceType(val)}
        serviceTypesData={filterServiceTypes}
        setSelectedPriceFilter={(val: any) => setSelectedPriceFilter(val)}
        buttonOnPress={() => setFiltersVisibility(false)}
        /> : ""}
    </VStack>
  )
}


export default Coaches
