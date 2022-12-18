import { VStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon } from 'native-base'
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
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    sessionCard: {
      backgroundColor: theme.colors.textPrimary,
      
      
    },
    sessionIcon: {
      // backgroundColor: theme.colors.textPrimary,
      
    },
    sessionHeader: {
      // backgroundColor: theme.colors.textPrimary,
      
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
      <SessionInfo session={session} />
      <HStack style={styles.sessionCard} dataSet={{ media: ids.sessionCard}} >
        <Center style={styles.sessionIcon} dataSet={{ media: ids.sessionIcon}} >
          <Icon as={MaterialIcons} name="arrow-back-ios" size='28px' color={colors.textPrimary}  ml={spacing[12]} mr={spacing[8]} m={2} />
        </Center>
        <Text style={styles.sessionHeader} dataSet={{ media: ids.sessionHeader}}>{date === '' ? 'schedule your session' : date}</Text>
      </HStack>
    </VStack>
  )
}


export default ScheduleStage

