import { useState, useEffect} from 'react'
import { VStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon, Button, Box, Image, Divider} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

import {profile} from '../../dummyData/CoachProfile'

import SearchHeader from '../../components/SearchHeader';
import Banner from './Banner'
import BannerWeb from './BannerWeb'
import CustomSearch from './CustomSearch'
import CoachInfo from './CoachInfo'
import InfoTags from './InfoTags'
import SplitInfo from './SplitInfo'
import Achievements from './Achievements'
import SessionsSection from './SessionsSection'

const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingBottom: theme.spacing[8]*50,
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      '@media (max-width: 800px)': {
        height: '100%',
      },
    },
    main: {
      zIndex: 1000,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      paddingTop: theme.spacing[8],
      flex: 1,
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      width: '100%',
    },
    containerWeb: {
      width: '100%',
      flexGrow: 1,  
    },
    searchContainer: {
      width: '100%',
      flexGrow: 1,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    mainWeb: {
      width: '100%',
      flexGrow: 1,
      position: 'absolute',
      paddingHorizontal: 100,
      alignItems: 'flex-start'
    },
  });

  return styleSheet
}

const CoachProfile = () => {
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


  const [activeProduct, setActiveProduct] = useState(0) 
  const [activeProductAmount, setActiveProductAmount] = useState(1) 

  useEffect(() => {
    setActiveProductAmount(1)
  },[activeProduct])

  const toggleActive = (id: number) => {
    (id === activeProduct) ? setActiveProduct(0) : setActiveProduct(id)
  }

  const decrement = () => {
    if (activeProductAmount !== 1) {
      setActiveProductAmount(activeProductAmount -1)
    }
  }

  if(isSmallScreen) {
    return (
      <VStack  style={styles.container} dataSet={{ media: ids.container}} >
          <Banner url={profile.backgroundImage.url} />

          <Center style={styles.main} dataSet={{ media: ids.main}} >
            <CustomSearch />
            <CoachInfo />
            <InfoTags />
            <SplitInfo />
            <Achievements />
            <SessionsSection profile={profile} activeProduct={activeProduct} setActiveProduct={setActiveProduct} 
             activeProductAmount={activeProductAmount} setActiveProductAmount={setActiveProductAmount}
             decrement={decrement} toggleActive={toggleActive}
            />
          </Center>
      </VStack>
    )
  } else {
    return (
      <VStack  style={styles.containerWeb} dataSet={{ media: ids.containerWeb}} >
        <Box style={styles.searchContainer} dataSet={{ media: ids.searchContainer}} >
          <SearchHeader />
        </Box>
        <BannerWeb url={profile.backgroundImage.url} />
        <Center style={styles.mainWeb} dataSet={{ media: ids.mainWeb}} >
            <HStack mt={200}>
              <VStack w='70%'>
                <CoachInfo />
                <InfoTags />
            <SessionsSection profile={profile} activeProduct={activeProduct} setActiveProduct={setActiveProduct} 
             activeProductAmount={activeProductAmount} setActiveProductAmount={setActiveProductAmount}
             decrement={decrement} toggleActive={toggleActive}
            />
              </VStack>
              <VStack w='35%' margin={spacing[8]} mt={spacing[8]/2} mb={0}>
                <SplitInfo />
            <Achievements />
              </VStack>
            </HStack>
          </Center>
      </VStack>
    )
  }







}


export default CoachProfile
// 