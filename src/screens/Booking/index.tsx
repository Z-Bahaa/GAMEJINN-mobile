import {useState } from 'react'
import { VStack, Text, useTheme, Box,  useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

import BookingHeader from './BookingHeader'
import ScheduleStage from './ScheduleStage'
import { session } from '../../dummyData/Booking'



const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[16],
      paddingBottom: theme.spacing[8],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[8],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const Payment = () => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
    const {ids, styles} = makeStyles();

    const [scheduleState, setScheduleState] = useState('active');
    const [contactState, setContactState] = useState('inactive');
    const [paymentState, setPaymentState] = useState('inactive');
    
    const headerValues = [
      { 
        title: 'schedule',
        stage: 1,
        status: scheduleState
      },
      { 
        title: 'contact',
        stage: 2,
        status: contactState
      },
      { 
        title: 'payment',
        stage: 3,
        status: paymentState
      },
    ];
   
    const [date, setDate] = useState('wednesday november 7th, 2023');




  return (
    <Box  style={styles.container} dataSet={{ media: ids.container}} >
      <BookingHeader data={headerValues}/>
      {(scheduleState === 'active') ? 
        <ScheduleStage  session={session} date={date} setDate={(val: any) => setDate(val)}  />
      : ""}
    </Box>
  )
}


export default Payment

