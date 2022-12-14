import { HStack, Text, useTheme, Icon, Button, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    primaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.regular,
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

const QuickSearchHeading = ({primaryText, buttonOnPress}) => {
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
          <Text style={styles.buttonText} dataSet={{ media: ids.buttonText}} >view all</Text>
          <Icon as={MaterialIcons} name="arrow-forward-ios" size='14px' color={colors.textSecondary}  ml={.5} mt={isSmallScreen ? 0 : 1}  />
        </HStack>
      </Button>
    </HStack>
  )
}


export default QuickSearchHeading

