import { Box, VStack, useTheme, Image, Text, ScrollView, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

import {gamesList} from '../../dummyData/QuickSearch'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing[16],
      height: 255,
      // backgroundColor: theme.colors.textPrimary,
    },
    item: {
      backgroundColor: theme.colors.brandSecondary,
      paddingTop: theme.spacing[16],
      marginEnd: theme.spacing[16],
      paddingHorizontal: theme.spacing[12],
      borderRadius: theme.borderRadius[8],
      height: 240,
      width: 160,
    },
    image: {
      flex: 1,
      borderRadius: theme.borderRadius[8],
    },
    text: {
      alignSelf: 'center',
      color: theme.colors.textPrimary,
      paddingTop: theme.spacing[12],
      paddingBottom: theme.spacing[8]/2,
      fontSize: theme.fontSize.sm,
    },
  });

  return styleSheet
}



const QuickSearchGamesCarousel = ({gamesData, gameOnPress}) => {
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}

      >
        {gamesData.map((g: any, i: number) => (
        <VStack  style={styles.item} dataSet={{ media: ids.item}} key={i} onPress>
          <Image alt="game image" source= {{uri : g.imageUrl}}    style={styles.image} dataSet={{ media: ids.image}}   />
          <Text   style={styles.text} dataSet={{ media: ids.text}} >{g.title}</Text>
        </VStack>))}
      </ScrollView>
    </Box>
  )
}


export default QuickSearchGamesCarousel

