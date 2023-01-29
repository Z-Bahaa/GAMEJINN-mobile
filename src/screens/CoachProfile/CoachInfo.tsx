import { HStack, useMediaQuery,Image, useTheme, Box, VStack, Text, Center, Divider, Button, Icon} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import { AntDesign,  } from '@expo/vector-icons'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    
    coachInfoContainer: {
      // backgroundColor: theme.colors.white,
      width: '100%',
      marginBottom: theme.spacing[8],
    },
    coachInfoCard: {
      marginTop: theme.spacing[24]*4,
      backgroundColor: theme.colors.brandSecondary,
      padding: theme.spacing[16],
      paddingEnd: theme.spacing[16],
      borderRadius: theme.borderRadius[8],
      '@media (min-width: 800px)': {
        marginTop: 0,
        // backgroundColor: theme.colors.white,
      },  
      width: '100%',
    },
    coachInfoImage: {
      borderRadius: 10000,
      width: 60,
      height: 60,
      marginEnd: theme.spacing[16],
      // '@media (min-width: 800px)': {
      //   width: 50,
      //   height: 50,
      // },  
    },
    coachInfoTextsContainer: {
      // backgroundColor: theme.colors.white,
      justifyContent: 'center',
      marginTop: theme.spacing[8],  
      // '@media (min-width: 800px)': {
      //   justifyContent: 'space-around',
      // }, 
    },
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    coachInfoSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
      marginEnd: theme.spacing[16],
      '@media (min-width: 800px)': {
      marginTop: theme.spacing[8]/2,
      },  
    },
    primaryButton: {
      marginBottom: 0,
      width: '100%',
      backgroundColor: theme.colors.textSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius[8],
      justifySelf: 'flex-end',
    },
    primaryButtonText: {
      marginTop: theme.spacing[12]/2,
      margin: theme.spacing[12]/6,
      width: '100%',
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
    },
    aboutHeader: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    aboutBody: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textPrimary,
      alignSelf: 'flex-start'
    },
    aboutHeaderText: {
      fontSize: theme.fontSize.md,
      color: theme.colors.textSecondary,
      '@media (min-width: 800px)': {
        marginBottom: theme.spacing[8],
      }, 
    },
    aboutHeaderSocialsContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    aboutHeaderSocialsIconBox: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[4],
      padding: theme.spacing[12]/2,
      marginStart: theme.spacing[12]/2,
      marginBottom: theme.spacing[12],
    },
    aboutHeaderSocialsIcon: {
    },
  });

  return styleSheet
}

const CoachInfo = () => {
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
    <Box style={styles.coachInfoCard} dataSet={{ media: ids.coachInfoCard}}>
    <Box style={styles.coachInfoContainer} dataSet={{ media: ids.coachInfoContainer}}>
      <HStack >
          <Image alt='coach image' style={styles.coachInfoImage} dataSet={{ media: ids.coachInfoImage}} 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'}}
          />

        <VStack style={styles.coachInfoTextsContainer} dataSet={{ media: ids.coachInfoTextsContainer}} >
          <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >islam mohareb</Text>
          <Text style={styles.coachInfoSubtext} dataSet={{ media: ids.coachInfoSubtext}} >Ultimate Professional & Coach</Text>
        </VStack>
      </HStack>

    </Box>

    <HStack style={styles.aboutHeader} dataSet={{ media: ids.aboutHeader}}>
      <Text style={styles.aboutHeaderText} dataSet={{ media: ids.aboutHeaderText}}>
        about
      </Text>
      <HStack style={styles.aboutHeaderSocialsContainer} dataSet={{ media: ids.aboutHeaderSocialsContainer}}>
        {['twitter','youtube','twitter','youtube'].map( (v, i) => 
        (<Center style={styles.aboutHeaderSocialsIconBox} dataSet={{ media: ids.aboutHeaderSocialsIconBox}} key={i}>
          <Icon as={AntDesign } name={v} size='21px' color={colors.textPrimary} 
          style={styles.aboutHeaderSocialsIcon} dataSet={{ media: ids.aboutHeaderSocialsIcon}} 
          />
        </Center>))
        }
      </HStack>
    </HStack>

    <Text style={styles.aboutBody} dataSet={{ media: ids.aboutBody}}>
      Every lesson will be recorded, just ask me for the VOD and I will upload it & send it right 
      away! There is a twitch sub discount and maybe something in the FAQ! I have been ...
    </Text>

    <Divider backgroundColor={colors.grey} opacity={0.6} mt={4} mb={4} /> 

    <Button style={styles.primaryButton} dataSet={{ media: ids.primaryButton}}>
      <Text style={styles.primaryButtonText} dataSet={{ media: ids.primaryButtonText}}>book a session</Text>
    </Button>
  </Box>
  )
}


export default CoachInfo
// 