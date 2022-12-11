import { HStack, Text, useTheme, Icon, Input, Center, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'auto',
      paddingTop: theme.spacing[24],
    },
    primaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md
    }
  });

  return styleSheet
}

const QuickSearchHeading = ({primaryText,}) => {
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
      <Button>
        <Text>view all</Text>
        
      </Button>
    </HStack>
  )
}


export default QuickSearchHeading

