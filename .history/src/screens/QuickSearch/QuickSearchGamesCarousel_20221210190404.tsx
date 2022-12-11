import { Box, VStack, HStack, useTheme, Image, Text, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

import {gamesList} from '../../dummyData/QuickSearch'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing[16],
      backgroundColor: theme.colors.textPrimary,
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
      <HStack>
        
      </HStack>
      {
        gamesList.map((g: any, i: number) => (
          <VStack key={i} >
            {/* <Image alt="game image" source= {{uri : g.imageUrl}}    /> */}
            <Text>{g.title} </Text>
          </VStack>
        ))
      }
    </Box>
  )
}


export default QuickSearchGamesCarousel

