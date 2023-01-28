import React from 'react'
import { ZStack, useMediaQuery,Image, useTheme, VStack} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    container: {
      
    },
    banner: {
      width: windowWidth ,
      height: 300,
      '@media (min-width: 800px)': {
      },
    },
    bannerFade: {
      width: windowWidth ,
      height: 300,
      // backgroundColor: theme.colors.brandPrimary,
    },
  });

  return styleSheet
}

const Banner = ({url}) => {
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
    <ZStack>
          <Image alt='hello' source={{uri: url}}  style={styles.banner} dataSet={{ media: ids.banner}} />
          <LinearGradient colors={[colors.brandPrimaryHalf,colors.brandPrimary]} style={styles.bannerFade} dataSet={{ media: ids.bannerFade}} />
        </ZStack>
  )
}


export default Banner
// 