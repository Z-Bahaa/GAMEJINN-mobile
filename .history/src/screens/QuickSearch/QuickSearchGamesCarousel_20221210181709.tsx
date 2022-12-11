import { HStack, Text, useTheme, Icon, Button, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      // backgroundColor: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const QuickSearchGamesCarousel = ({primaryText, buttonOnPress}) => {
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
      <Text style={styles.primaryText} dataSet={{ media: ids.primaryText}} >carousel</Text>
      
    </HStack>
  )
}


export default QuickSearchGamesCarousel

