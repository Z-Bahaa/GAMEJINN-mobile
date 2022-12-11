import { HStack, Text, useTheme, Icon, Button, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-end',
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
      marginEnd: theme.spacing[8],
      // backgroundColor: theme.colors.textPrimary,
    },
    buttonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const QuickSearchHeading = ({primaryText, buttonOnPress, secondaryText}) => {
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
          <Text style={styles.buttonText} dataSet={{ media: ids.buttonText}} >{secondaryText}</Text>
        </HStack>
      </Button>
    </HStack>
  )
}


export default QuickSearchHeading

