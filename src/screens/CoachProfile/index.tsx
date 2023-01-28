import { useState, useEffect} from 'react'
import { VStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon, Button, Box, Image, Divider} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

import {profile} from '../../dummyData/CoachProfile'

import Banner from './Banner'
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
      alignItems: 'flex-start',
      // justifyContent: 'space-between',
      paddingBottom: theme.spacing[8]*50,
      // paddingStart: theme.spacing[16],
      // paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
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
}


export default CoachProfile
// 