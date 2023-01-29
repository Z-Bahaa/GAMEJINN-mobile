import { HStack, useMediaQuery,Image, useTheme, Icon, Text} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {MaterialIcons, AntDesign,  } from '@expo/vector-icons'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    infoTagsContainer: {
      marginTop: theme.spacing[8],
    },
    infoTag: {
      backgroundColor: theme.colors.brandSecondary,
      padding: theme.spacing[12]/3,
      borderRadius: theme.borderRadius[4],
      // paddingTop: theme.spacing[8],
      paddingVertical: 0,
      marginEnd: theme.spacing[12],
      paddingEnd: theme.spacing[8],
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'center',
      '@media (min-width: 800px)': {
        padding: '5px 10px 3px 10px',
        borderRadius: 10,
        alignItems: 'center',
      },
    },
    infoTagIcon: {
      opacity: 0.6,
      marginTop: 5,
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
    },
    infoTagSubtext: {
      fontSize: theme.fontSize.xxs,
      color: theme.colors.textGrey,
      marginStart: theme.spacing[12]/3,
      marginTop: 1,
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
    },
    infoTagMainText: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textPrimary,
      marginTop: 3,
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
    },
  });

  return styleSheet
}

const InfoTags = () => {
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
    <HStack style={styles.infoTagsContainer} dataSet={{ media: ids.infoTagsContainer}}>

            <HStack style={styles.infoTag} dataSet={{ media: ids.infoTag}}>
              <Icon as={AntDesign } name='calendar' size='12px' color={colors.textPrimary} 
                style={styles.infoTagIcon} dataSet={{ media: ids.infoTagIcon}} />
              <Text style={styles.infoTagSubtext} dataSet={{ media: ids.infoTagSubtext}}>
                {'available '}
              </Text>
              <Text style={styles.infoTagMainText} dataSet={{ media: ids.infoTagMainText}}>
                2:30 today
              </Text>
            </HStack>

            <HStack style={styles.infoTag} dataSet={{ media: ids.infoTag}}>
              <Icon as={MaterialIcons } name='attach-money' size='14px' color={colors.textPrimary} 
                style={styles.infoTagIcon} dataSet={{ media: ids.infoTagIcon}} />
              <Text style={styles.infoTagSubtext} dataSet={{ media: ids.infoTagSubtext}}>
                {'sessions starting at '}
              </Text>
              <Text style={styles.infoTagMainText} dataSet={{ media: ids.infoTagMainText}}>
                360EGP
              </Text>
            </HStack>

          </HStack>
  )
}


export default InfoTags
// 