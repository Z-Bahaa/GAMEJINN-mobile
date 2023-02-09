import React, {useState} from 'react';
import { HStack, Text, useTheme, Icon, Input, Center, useMediaQuery, Box, Button, VStack, Pressable, Image } from 'native-base';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';

import makeStyles from './styles';

import {gamesList, coachesList} from '../../dummyData/Search'


import { useNavigation } from '@react-navigation/native';



const Search = ({navigation}: any ) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
  const [searchValue, setSearchValue] = useState('') 
  const [filteredGames, setFilteredGames] = useState([]) 
  const [filteredCoaches,  setFilteredCoaches] = useState([]) 
    const {ids, styles} = makeStyles();
    const {
      colors,
      spacing,
      fontSize,
      sizes,
      borderRadius,
    } = useTheme(); 


    const SearchHeading = ({primaryText, buttonOnPress, secondaryText}: any) => (
      <HStack  style={styles.searchHeadingContainer} dataSet={{ media: ids.searchHeadingContainer}} >
        <Text style={styles.searchHeadingPrimaryText} dataSet={{ media: ids.searchHeadingPrimaryText}} >{primaryText}</Text>
        <Button variant="unstyled" p={0} style={styles.searchHeadingButton} dataSet={{ media: ids.searchHeadingButton}} onPress={buttonOnPress}>
          <HStack>
            <Text style={styles.searchHeadingButtonText} dataSet={{ media: ids.searchHeadingButtonText}} >{secondaryText}</Text>
          </HStack>
        </Button>
      </HStack>
    );

    const InfoTag = ({data}: any) => (
      <HStack  style={styles.InfoTagContainer} dataSet={{ media: ids.InfoTagContainer}} >
        {
          data?.slice(0,2).map((t: any, i: number) => (
            <Box style={styles.InfoTagTextBox} dataSet={{ media: ids.InfoTagTextBox}} key={i}>
              <Text style={styles.InfoTagText} dataSet={{ media: ids.InfoTagText}} >{t}</Text>
            </Box>
          ))
        }
      </HStack>
    )

    const GameResult = ({data, resultOnPress}: any) => (
      <VStack  style={styles.GameResultContainer} dataSet={{ media: ids.GameResultContainer}} >
        {
          data?.slice(0,4).map((g: any, i: any) => (
              <HStack justifyContent='space-between' flexGrow={1} w='100%' key={i}>
                <Pressable variant="unstyled" p={0}  onPress={resultOnPress}  >
                  <HStack style={styles.GameResultItem} dataSet={{ media: ids.GameResultItem}}>
                    <Image alt="image" source={{uri: g.imageUrl}}  style={styles.GameResultImage} dataSet={{ media: ids.GameResultImage}} />
                    <Text style={styles.GameResultTitle} dataSet={{ media: ids.GameResultTitle}} >{g.title}</Text>
                  </HStack>
                </Pressable>
                {isSmallScreen ? "" : <InfoTag data={g.tags} />}
              </HStack>
          ))
        }
      </VStack>
    )

    const CoachesResultFormatGames = (games: Array<{}>) => {
      switch(games.length) {
        case 0:
          return ""
        case 1:
          return games.map((g: any, i: any) => (
            <HStack style={styles.CoachesResultGameBox} dataSet={{ media: ids.CoachesResultGameBox}} key={i}>
              <Image alt='image' source={{uri: g.imageUrl}} style={styles.CoachesResultGameImage} dataSet={{ media: ids.CoachesResultGameImage}}/>
              <Text style={styles.CoachesResultGameTitle} dataSet={{ media: ids.CoachesResultGameTitle}}>{g.title}</Text>
            </HStack>
          ))
        case 2:
        case 3:
          return (
            <HStack style={styles.CoachesResultGameBoxMultiple} dataSet={{ media: ids.CoachesResultGameBoxMultiple}}>
              {
                games.map((g: any, i: number) => (
                  <Image alt='image' source={{uri: g.imageUrl}} style={styles.CoachesResultGameImageMultiple} dataSet={{ media: ids.CoachesResultGameImageMultiple}} key={i}/>
                ))
              }
            </HStack>
          )
        default:
          return (
            <HStack style={styles.CoachesResultGameBoxMultiple} dataSet={{ media: ids.CoachesResultGameBoxMultiple}}>
              {games?.slice(0,3).map((g: any, i: number) => (
                  <Image alt='image' source={{uri: g.imageUrl}} style={styles.CoachesResultGameImageMultiple} dataSet={{ media: ids.CoachesResultGameImageMultiple}} key={i}/>
                ))}
              <Center style={styles.CoachesResultGameBoxMultipleExtra} dataSet={{ media: ids.CoachesResultGameBoxMultipleExtra}}>
                <Text style={styles.CoachesResultGameBoxMultipleExtraText} dataSet={{ media: ids.CoachesResultGameBoxMultipleExtraText}}>{"+" + (games.length - 3)}</Text>
              </Center>
            </HStack>
          )
      }
    } 

    const CoachesResult = ({data, resultOnPress}: any) => (
      <VStack  style={styles.CoachesResultContainer} dataSet={{ media: ids.CoachesResultContainer}} >
        {
          data?.slice(0,4).map((c: any, i: any) => {
            return isSmallScreen ? 
              (
                <Pressable variant="unstyled" p={0} onPress={resultOnPress} key={i} >
                  <HStack   style={styles.CoachesResultItemContainer} dataSet={{ media: ids.CoachesResultItemContainer}} >
                    <HStack style={styles.CoachesResultItem} dataSet={{ media: ids.CoachesResultItem}}>
                      <Image alt="image" source={{uri: c.imageUrl}}  style={styles.CoachesResultImage} dataSet={{ media: ids.CoachesResultImage}} />
                      <Text style={styles.CoachesResultName} dataSet={{ media: ids.CoachesResultName}} >{c.name}</Text>
                    </HStack>
                    {
                      CoachesResultFormatGames(c.games)
                    }
                  </HStack>
                </Pressable>
              ) : 
              (
                <HStack justifyContent='space-between' flexGrow={1} w='100%'>
                  <Pressable variant="unstyled" p={0} onPress={resultOnPress} key={i} >
                    <HStack   style={styles.CoachesResultItemContainer} dataSet={{ media: ids.CoachesResultItemContainer}} >
                      <HStack style={styles.CoachesResultItem} dataSet={{ media: ids.CoachesResultItem}}>
                        <Image alt="image" source={{uri: c.imageUrl}}  style={styles.CoachesResultImage} dataSet={{ media: ids.CoachesResultImage}} />
                        <Text style={styles.CoachesResultName} dataSet={{ media: ids.CoachesResultName}} >{c.name}</Text>
                      </HStack>
                      {
                        CoachesResultFormatGames(c.games)
                      }
                    </HStack>
                  </Pressable>
                  <InfoTag data={c.tags} />
                </HStack>
              )
          })
        }
      </VStack>
    )
    
    const NotFound = () => (
      <Box  style={styles.NotFoundContainer} dataSet={{ media: ids.NotFoundContainer}} >
        <Text style={styles.NotFoundText} dataSet={{ media: ids.NotFoundText}} >no results found.</Text>
      </Box>
    )




  return (
    <Box style={styles.container} dataSet={{ media: ids.container}} >
      <HStack   style={styles.Inputcontainer} dataSet={{ media: ids.Inputcontainer}}  >
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
              <Icon as={AntDesign} name="search1" size='20px' style={styles.searchIcon} dataSet={{ media: ids.searchIcon}}/>
            </Center>
          }
          value={searchValue}
          onChangeText={(value: string) => setSearchValue(value)}
        />
      </HStack>

    {/* <NotFound /> */}

      <SearchHeading primaryText='Games' secondaryText='12 results' buttonOnPress={() => navigation.navigate('Games')} />
      <GameResult data={gamesList}  resultOnPress={() => navigation.navigate('Coaches')} />
      <SearchHeading primaryText='coaches' secondaryText='207 results' buttonOnPress={() => navigation.navigate('Coaches')} />
      <CoachesResult data={coachesList}  resultOnPress={() => navigation.navigate('CoachProfile')} />
    </Box>
  )
}


export default Search
