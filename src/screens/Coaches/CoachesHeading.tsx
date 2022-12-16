import { HStack, Text, useTheme, Icon, Button, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import SvgFadersHorizontal from './SvgFadersHorizontal'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[16],
      paddingBottom: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[8],
        paddingHorizontal: 100,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    primaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.regular*1.25,
      },
    },
    button: {
      alignItems: 'center',
      // backgroundColor: theme.colors.textPrimary,
    },
    buttonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const CoachesHeading = ({primaryText, buttonOnPress}) => {
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
      <Text style={styles.primaryText} dataSet={{ media: ids.primaryText}} >{primaryText}</Text>
      <Button variant="unstyled" p={0} style={styles.button} dataSet={{ media: ids.button}} onPress={buttonOnPress}>
        <HStack>
          <Text style={styles.buttonText} dataSet={{ media: ids.buttonText}} mt={1}>filters</Text>
          <SvgFadersHorizontal size='21px' color={colors.textSecondary}  />
        </HStack>
      </Button>
    </HStack>
  )
}


export default CoachesHeading

