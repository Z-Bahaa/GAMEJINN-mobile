import { VStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon, Button, Box } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import SessionInfo from './SessionInfo'

const makeStyles = () => {  
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      paddingBottom: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
      },
      '@media (max-width: 800px)': {
        height: '100%',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    sessionCard: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],
      alignItems: 'center',
      width: '100%',
      '@media (min-width: 800px)': {
        justifyContent: 'space-between',
      },
    },
    sessionCardSubcontainer: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],
      alignItems: 'center',
    },
    sessionIcon: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[8],
      margin: theme.spacing[16],
    },
    sessionHeader: {
      // backgroundColor: theme.colors.textPrimary,
      color: theme.colors.textPrimary,
      alignItems: 'center',
      fontSize: theme.fontSize.sm,
      paddingTop: theme.spacing[8],
      '@media (min-width: 800px)': {
        paddingTop: 0,
        fontSize: theme.fontSize.regular,
      },
      
    },
    primaryButton: {
      marginTop: theme.spacing[24],
      width: '100%',
      backgroundColor: theme.colors.yellow,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius[8],
    },
    primaryButtonText: {
      marginTop: theme.spacing[16],
      margin: theme.spacing[8],
      width: '100%',
      fontSize: theme.fontSize.regular,
    },
    primaryButtonWeb: {
      backgroundColor: theme.colors.yellow,
      borderRadius: theme.borderRadius[4],
      marginEnd: theme.spacing[12],
    },
    primaryButtonTextWeb: {
      margin: theme.spacing[12]/4,
      // fontSize: theme.fontSize.regular,
      
    },
    nextButton: {
      marginBottom: theme.spacing[32]*2,
      marginTop: theme.spacing[32],
      width: '100%',
      alignSelf: 'flex-end',
      borderRadius: theme.borderRadius[8],
      backgroundColor: theme.colors.yellow,
      alignItems: 'center',
      justifyContent: 'center',
      '@media (min-width: 800px)': {
        marginBottom: 0,
      },
    },
    nextButtonText: {
      marginTop: theme.spacing[16],
      margin: theme.spacing[8],
      width: '100%',
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        // margin: theme.spacing[16],
      },
    },
    nextButtonDisabled: {
      opacity: 0.6,
    },
  });

  return styleSheet
}

const ScheduleStage = ({session, date}) => {
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
    <VStack  style={styles.container} dataSet={{ media: ids.container}} >
      <Box w='100%' >
        <SessionInfo session={session} />
        <HStack style={styles.sessionCard} dataSet={{ media: ids.sessionCard}} >
          <HStack style={styles.sessionCardSubcontainer} dataSet={{ media: ids.sessionCardSubcontainer}} >
            <Center style={styles.sessionIcon} dataSet={{ media: ids.sessionIcon}} >
              <Icon as={MaterialIcons} name="date-range" size='28px' color={colors.textPrimary} m={4} />
            </Center>

            <Text style={styles.sessionHeader} dataSet={{ media: ids.sessionHeader}}>{date === null ? 'schedule your session' : 'date'}</Text>
            </HStack>

          { (isSmallScreen) ? "" : (<Button style={styles.primaryButtonWeb} dataSet={{ media: ids.primaryButtonWeb}}>
            <Text style={styles.primaryButtonTextWeb} dataSet={{ media: ids.primaryButtonTextWeb}}>{date !== null ? 'change' : 'pick a date'}</Text>
          </Button>)}
        </HStack>
        { (!isSmallScreen) ? "" : (<Button style={styles.primaryButton} dataSet={{ media: ids.primaryButton}}>
          <Text style={styles.primaryButtonText} dataSet={{ media: ids.primaryButtonText}}>{date !== null ? 'change' : 'pick a date'}</Text>
        </Button>)}
      </Box>
      {/* @ts-ignore */}
      <Button style={[styles.nextButton, (date === new Date ? styles.nextButtonDisabled : "")]} dataSet={{ media: ids.nextButton}}>
        <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>next</Text>
      </Button>
    </VStack>
  )
}


export default ScheduleStage