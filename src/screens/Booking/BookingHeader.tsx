import { HStack, Text, useTheme, VStack,  useMediaQuery, Center } from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      // backgroundColor: theme.colors.textPrimary,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    stageContainer: {
      // backgroundColor: theme.colors.textPrimary,
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginEnd: theme.spacing[32],
      '@media (max-width: 800px)': {
        marginEnd: theme.spacing[12],
        // alignItems: 'flex-end',
        alignItems: 'center', 
      },
    },
    stageIndexBox: {
      // backgroundColor: theme.colors.textPrimary,
      backgroundColor: theme.colors.brandSecondary,
      width: 25,
      height: 25,
      borderRadius: theme.borderRadius[8]*10,
      marginEnd: theme.spacing[8],
    },
    stageIndexBoxActive: {
      backgroundColor: theme.colors.white,
    },
    stageIndexBoxCompleted: {
      backgroundColor: theme.colors.yellow,
    },
    stageIndexText: {
      // backgroundColor: theme.colors.textPrimary,
      paddingTop: theme.spacing[12]/2,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
      '@media (min-width: 800px)': {
        paddingTop: 0,
      },
      
    },
    stageIndexTextActive: {
      color: theme.colors.brandSecondary,
      
    },
    stageIndexTextCompleted: {
      color: theme.colors.brandPrimary,
      
    },
    stageTitle: {
      color: theme.colors.textGrey,
      paddingTop: theme.spacing[8],
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
        paddingTop: 0,
        // fontSize: theme.fontSize.regular,
      },
    },
    stageTitleActive: {
      color: theme.colors.textPrimary,
    },
    stageTitleCompleted: {
      color: theme.colors.yellow,
    },
    logo: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.textPrimary,
      marginVertical: theme.spacing[16],
    },
  });

  return styleSheet
}

const BookingHeader = ({data}) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
    const {ids, styles} = makeStyles();

   



  return (
    <VStack  style={styles.container} dataSet={{ media: ids.container}} > 
      {isSmallScreen ? "" : (
        <Text style={styles.logo} dataSet={{ media: ids.logo}}>gamejinn</Text>
      )} 
      <HStack   >
        {
          data.map((s: any, i: number) => (<HStack key={i} style={styles.stageContainer} dataSet={{ media: ids.stageContainer}}>
            <Center
            style={[styles.stageIndexBox, (s.status === 'active' ? styles.stageIndexBoxActive : s.status === 'completed' ? styles.stageIndexBoxCompleted : "") ]} 
            dataSet={{ media: ids.stageIndexBox}}>
              <Text 
              style={[styles.stageIndexText, (s.status === 'active' ? styles.stageIndexTextActive : s.status === 'completed' ? styles.stageIndexTextCompleted : "") ]} 
              dataSet={{ media: ids.stageIndexText}}>{s.stage}</Text>
            </Center>
            <Text 
            style={[styles.stageTitle, (s.status === 'active' ? styles.stageTitleActive : s.status === 'completed' ? styles.stageTitleCompleted : "") ]} 
            dataSet={{ media: ids.stageTitle}}>{s.title}</Text>
          </HStack>))
        }
      </HStack>
  </VStack>
  )
}


export default BookingHeader

