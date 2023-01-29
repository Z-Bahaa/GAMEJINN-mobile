import React from 'react'
import { Box, useMediaQuery,Image, useTheme, VStack} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    bannerContainer: {
      position: 'relative'
      
    },
    bannerImage: {
      width: windowWidth ,
      height: 200,
      '@media (min-width: 800px)': {
      },
    },
    bannerFade: {
      width: windowWidth ,
      position: 'absolute',
      height: 200,
      // backgroundColor: theme.colors.brandPrimary,
    },

  });

  return styleSheet
}

const BannerWeb = ({url}) => {
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
    <Box  style={styles.bannerContainer} dataSet={{ media: ids.bannerContainer}} >
      <Image alt='hello' source={{uri: url}}  style={styles.bannerImage} dataSet={{ media: ids.bannerImage}} />
      <LinearGradient colors={['transparent',colors.brandPrimary]} style={styles.bannerFade} dataSet={{ media: ids.bannerFade}} />
    </Box>
  )
}


export default BannerWeb
// 