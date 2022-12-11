import { HStack, Text, useTheme, Icon, Button, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

import gamesList from '../../'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: theme.spacing[16],
      // backgroundColor: theme.colors.textPrimary,
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
    <HStack  style={styles.container} dataSet={{ media: ids.container}} >
      <Text color='white' >carousel</Text>
      
    </HStack>
  )
}


export default QuickSearchGamesCarousel

