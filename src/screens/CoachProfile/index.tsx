import { VStack,ZStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon, Button, Box, Image} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import {LinearGradient} from 'expo-linear-gradient'

import {profile} from '../../dummyData/CoachProfile'

const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-start',
      // justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      paddingBottom: theme.spacing[8],
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
    banner: {
      width: windowWidth ,
      height: 250,
    },
    bannerFade: {
      width: windowWidth ,
      height: 250,
      // backgroundColor: theme.colors.brandPrimary,
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

   

  return (
    <ZStack  style={styles.container} dataSet={{ media: ids.container}} >
        <ZStack>
          <Image alt='hello' source={{uri: profile.backgroundImage.url}}  style={styles.banner} dataSet={{ media: ids.banner}} />
          <LinearGradient colors={['transparent',colors.brandPrimary]} style={styles.bannerFade} dataSet={{ media: ids.bannerFade}} />
        </ZStack>
        <VStack>
          
        </VStack>
    </ZStack>
  )
}


export default CoachProfile