import { Box, VStack, useTheme, Image, Text, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

import {gamesList} from '../../dummyData/QuickSearch'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing[16],
      // backgroundColor: theme.colors.textPrimary,
    },
    item: {
      backgroundColor: theme.colors.brandSecondary,
      paddingTop: theme.spacing[16],
      paddingHorizontal: theme.spacing[12],
      borderRadius: theme.borderRadius[8],
      height: 220,
      width: 160,
    },
    image: {
      flex: 1,
    },
    text: {
      color: theme.colors.textPrimary,
      paddi
    },
  });

  return styleSheet
}



const QuickSearchGamesCarousel = ({}) => {
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
    <Box  style={styles.container} dataSet={{ media: ids.container}} >
      <VStack  style={styles.item} dataSet={{ media: ids.item}} >
        <Image alt="game image" source= {{uri : "https://cdn.shopify.com/s/files/1/0747/3829/products/mL4468_1024x1024.jpg?v=1591827160"}}    style={styles.image} dataSet={{ media: ids.image}}   />
        <Text   style={styles.text} dataSet={{ media: ids.text}} >Call Of Duty</Text>
      </VStack>
      
    </Box>
  )
}


export default QuickSearchGamesCarousel

