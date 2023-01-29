import { HStack, useMediaQuery,Image, useTheme, Icon, Text, VStack} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {MaterialIcons, AntDesign,  } from '@expo/vector-icons'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    splitInfoContainer: {
      marginTop: theme.spacing[16],
      justifyContent: 'space-between',
      width: '100%',
      '@media (min-width: 800px)': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },  
    },
    splitInfoMajorSection: {
      maxWidth: '75%',
      '@media (min-width: 800px)': {
        width: '100%',
      },  
    },
    splitInfoMinorSection: {
      width: '30%',
      '@media (min-width: 800px)': {
        marginTop: theme.spacing[24],
        width: '100%',
      },  
    },
    gameTag: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8]*2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: theme.spacing[12]/4,
      paddingHorizontal: theme.spacing[8],
      marginBottom: theme.spacing[8],
      marginTop: theme.spacing[8]/2,
      alignSelf: 'flex-start'
    },
    gameTagImage: {
      width: 20,
      height: 20,
      borderRadius: 10000,
    },
    gameTagTitle: {
      fontSize: theme.fontSize.xxs,
      color: theme.colors.textPrimary,
      paddingStart: theme.spacing[8],
      paddingEnd: theme.spacing[8]/2,
    },
    langSectionSubtext: {
      padding: theme.spacing[12]/4,
      paddingStart: 0,
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
    },
  });

  return styleSheet
}

const SplitInfo = () => {
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
  <HStack style={styles.splitInfoContainer} dataSet={{ media: ids.splitInfoContainer}} >

  <VStack style={styles.splitInfoMajorSection} dataSet={{ media: ids.splitInfoMajorSection}}>
    <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >offered games</Text>

    <HStack style={styles.gameTag} dataSet={{ media: ids.gameTag}}>
      <Image alt='coach image' style={styles.gameTagImage} dataSet={{ media: ids.gameTagImage}} 
          source={{uri: 'https://www.citypng.com/public/uploads/preview/-41603132788rzosdsitdt.png'}}
          />
      <Text style={styles.gameTagTitle} dataSet={{ media: ids.gameTagTitle}}>
      Super Smash bros. Ultimate Ultimate
      </Text>
    </HStack>

    <HStack style={styles.gameTag} dataSet={{ media: ids.gameTag}}>
      <Image alt='coach image' style={styles.gameTagImage} dataSet={{ media: ids.gameTagImage}} 
          source={{uri: 'https://preview.redd.it/rqassez3kc591.png?width=841&format=png&auto=webp&s=a2035dca162b77fb88961464e73a1c57efe95cca'}}
          />
      <Text style={styles.gameTagTitle} dataSet={{ media: ids.gameTagTitle}}>
      Super Smash bros. Ultimate
      </Text>
    </HStack>

  </VStack>

  <VStack style={styles.splitInfoMinorSection} dataSet={{ media: ids.splitInfoMinorSection}}>
    <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >languages</Text>
    <Text style={styles.langSectionSubtext} dataSet={{ media: ids.langSectionSubtext}} >english</Text>
    <Text style={styles.langSectionSubtext} dataSet={{ media: ids.langSectionSubtext}} >arabic</Text>
  </VStack>
  </HStack>
  )
}


export default SplitInfo
// 