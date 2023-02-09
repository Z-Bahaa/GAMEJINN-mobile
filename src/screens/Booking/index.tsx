import {useState } from 'react'
import { VStack, Text, useTheme, Box,  useMediaQuery, Button } from 'native-base'
import StyleSheet from 'react-native-media-query';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import BookingHeader from './BookingHeader'
import ScheduleStage from './ScheduleStage'
import ContactStage from './ContactStage'
import PaymentStage from './PaymentStage'
import PaymentSuccess from './PaymentSuccess'

import { session } from '../../dummyData/Booking'
import DateTimePicker from './DateTimePicker';



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

    const [datePickerActive, setDatePickerActive] = useState(true);
    
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
   
    const [date, setDate] = useState(new Date());

    const renderSwitch = () => {
       
      if(paymentState === 'completed') {
        return (
          <PaymentSuccess />
        )
      } else {
        switch('active') {
          case scheduleState:
            return (<ScheduleStage  session={session} date={date} />);
            case contactState:
              return (<ContactStage  />);
            case paymentState:
              return (<PaymentStage  session={session} date={date}  />);
          default:
            return "";
        }
      }
    }


  return (
    <Box  style={styles.container} dataSet={{ media: ids.container}} >
      {(paymentState  === 'completed' || datePickerActive === true)   ? "" : <BookingHeader data={headerValues}/>}
      {
        renderSwitch()
      }
      {/* native */}
      {/* <DateTimePickerModal
        isVisible={datePickerActive}
        mode="datetime"
        onConfirm={(val) => alert ('on confirm')}
        onCancel={() => alert ('on cancel')}
      /> */}
    </Box>
  )
}

// 


export default Payment

