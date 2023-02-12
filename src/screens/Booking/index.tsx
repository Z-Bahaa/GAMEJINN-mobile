import {useState } from 'react'
import { VStack, Text, useTheme, Box,  useMediaQuery, Button, HStack, Image, Center, Divider, Radio, Icon, Input, Pressable } from 'native-base'

import { MaterialIcons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import makeStyles from './styles'

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { session } from '../../dummyData/Booking'


const Payment = ({navigation}: any) => {
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

  const [currentTab, setCurrentTab] = useState('Schedule');

  const [scheduleState, setScheduleState] = useState('active');
  const [contactState, setContactState] = useState('inactive');
  const [paymentState, setPaymentState] = useState('inactive');

  const [paymentMethod, setPaymentMethod] = useState('paymob');

  const [datePickerActive, setDatePickerActive] = useState(false);

  const headerValues = [
  { 
    title: 'Schedule',
    stage: 1,
    status: scheduleState
  },
  { 
    title: 'Contact',
    stage: 2,
    status: contactState
  },
  { 
    title: 'Payment',
    stage: 3,
    status: paymentState
  },
  ];

  const [date, setDate] = useState(new Date());

  const SessionInfo = ({session}: any) => (<HStack  style={styles.SessionInfoContainer} dataSet={{ media: ids.SessionInfoContainer}} >
  {/* <Center style={styles.SessionInfoImageContainer} dataSet={{ media: ids.SessionInfoImageContainer}} > */}
    <Image alt='hello' source={{uri: session?.game?.imageUrl}}  style={styles.SessionInfoImage} dataSet={{ media: ids.SessionInfoImage}} />
  {/* </Center> */}
  <VStack style={styles.SessionInfoTextContainer} dataSet={{ media: ids.SessionInfoTextContainer}} >
    <Text  style={styles.SessionInfoGreyText} dataSet={{ media: ids.SessionInfoGreyText}} >{session?.serviceType}</Text>
    <Text  style={styles.SessionInfoWhiteText} dataSet={{ media: ids.SessionInfoWhiteText}} >{session?.title}</Text>
  </VStack>
  </HStack>
  )

  const BookingHeader = ({data}: any) => (<VStack  style={styles.bookingHeaderContainer} dataSet={{ media: ids.bookingHeaderContainer}} > 
    {isSmallScreen ? "" : (
      <Text style={styles.bookingHeaderLogo} dataSet={{ media: ids.bookingHeaderLogo}}>gamejinn</Text>
    )} 
    <HStack   >
      {
        data.map((s: any, i: number) => (
          <Pressable  key={i} onPress={() => setCurrentTab(s.title)}>
            <HStack style={styles.bookingHeaderStageContainer} dataSet={{ media: ids.bookingHeaderStageContainer}}>
              <Center
              style={[styles.bookingHeaderStageIndexBox, (s.status === 'active' ? styles.bookingHeaderStageIndexBoxActive : s.status === 'completed' ? styles.bookingHeaderStageIndexBoxCompleted : "") ]} 
              dataSet={{ media: ids.bookingHeaderStageIndexBox}}>
                <Text 
                style={[styles.bookingHeaderStageIndexText, (s.status === 'active' ? styles.bookingHeaderStageIndexTextActive : s.status === 'completed' ? styles.bookingHeaderStageIndexTextCompleted : "") ]} 
                dataSet={{ media: ids.bookingHeaderStageIndexText}}>{s.stage}</Text>
              </Center>
              <Text 
              style={[styles.bookingHeaderStageTitle, (s.status === 'active' ? styles.bookingHeaderStageTitleActive : s.status === 'completed' ? styles.bookingHeaderStageTitleCompleted : "") ]} 
              dataSet={{ media: ids.bookingHeaderStageTitle}}>{s.title}</Text>
            </HStack>
          </Pressable>
        ))
      }
    </HStack>
  </VStack>
  )

  const DateTimePicker = ({ datePickerActive, setDatePickerActive}: any ) => (<VStack  style={styles.DateTimePickerContainer} dataSet={{ media: ids.DateTimePickerContainer}} > 
  <DateTimePickerModal
    isVisible={datePickerActive}
    mode="datetime"
    onConfirm={(val: any) => alert ('on confirm')}
    onCancel={() => alert ('on cancel')}
    // positivebutton={{label: 'OK', textColor: colors.textSecondary}}
    display='inline'
  />
  </VStack>
  )

  const onScheduleComplete = () => {
    setScheduleState('completed')
    setContactState('active')
    setCurrentTab('Contact')
  }

  const ScheduleStage = ({session, date}: any) => (<VStack  style={styles.ScheduleStageContainer} dataSet={{ media: ids.ScheduleStageContainer}} >
  <Box w='100%' >
    <SessionInfo session={session} />
    <HStack style={styles.ScheduleStageSessionCard} dataSet={{ media: ids.ScheduleStageSessionCard}} >
      <HStack style={styles.ScheduleStageSessionCardSubcontainer} dataSet={{ media: ids.ScheduleStageSessionCardSubcontainer}} >
        <Center style={styles.ScheduleStageSessionIcon} dataSet={{ media: ids.ScheduleStageSessionIcon}} >
          <Icon as={MaterialIcons} name="date-range" size='28px' color={colors.textPrimary} m={4} />
        </Center>

        <Text style={styles.ScheduleStageSessionHeader} dataSet={{ media: ids.ScheduleStageSessionHeader}}>{date === null ? 'schedule your session' : 'date'}</Text>
        </HStack>

      { (isSmallScreen) ? "" : (<Button style={styles.ScheduleStagePrimaryButtonWeb} dataSet={{ media: ids.ScheduleStagePrimaryButtonWeb}}>
        <Text style={styles.ScheduleStagePrimaryButtonTextWeb} dataSet={{ media: ids.ScheduleStagePrimaryButtonTextWeb}}>{date !== null ? 'change' : 'pick a date'}</Text>
      </Button>)}
    </HStack>
    { (!isSmallScreen) ? "" : (<Button style={styles.ScheduleStagePrimaryButton} dataSet={{ media: ids.ScheduleStagePrimaryButton}}>
      <Text style={styles.ScheduleStagePrimaryButtonText} dataSet={{ media: ids.ScheduleStagePrimaryButtonText}}>{date !== null ? 'change' : 'pick a date'}</Text>
    </Button>)}
  </Box>
  {/* @ts-ignore */}
  <Button style={[styles.nextButton, (date === new Date ? styles.nextButtonDisabled : "")]} dataSet={{ media: ids.nextButton}}
   onPress={() => onScheduleComplete()}
  >
    <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>next</Text>
  </Button>
  </VStack>
  )

  const onContactComplete = () => {
    setContactState('completed')
    setPaymentState('active')
    setCurrentTab('Payment')
  }

  const ContactStage = () => (<VStack  style={styles.ContactStageContainer} dataSet={{ media: ids.ContactStageContainer}} >
    <Box  style={styles.ContactStageSplitContainerWeb} dataSet={{ media: ids.ContactStageSplitContainerWeb}}  >
      {[1,2,3].map((i) => <Box w='100%' style={styles.ContactStageOuterInputContainer} dataSet={{ media: ids.ContactStageOuterInputContainer}} key={i}>
        <HStack  style={styles.ContactStageInnerInputContainer} dataSet={{ media: ids.ContactStageInnerInputContainer}}>
          <Icon as={MaterialIcons} name="mail" size='24px' color={colors.brandSecondary} m={2}  mr={0} mb={3} />
          <Input style={styles.ContactStageInput} dataSet={{ media: ids.ContactStageInput}} 
          flex={1} 
          variant='unstyled'
          placeholder="e-mail"
          mt={isSmallScreen ? 2 : 0}
          fontSize={fontSize.md}
          />
        </HStack>
      </Box>)}
    </Box>
    
    <Button style={[styles.nextButton, /* (date === '' ? styles.nextButtonDisabled : "") */]} dataSet={{ media: ids.nextButton}}
      onPress={() => onContactComplete()}
    >
      <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>next</Text>
    </Button>
  </VStack>
)

  const onPaymentComplete = () => {
    setPaymentState('completed')
    setCurrentTab('Success')
  }

  const PaymentStage = ({session }: any) => (<Box  style={styles.paymentStageContainer} dataSet={{ media: ids.paymentStageContainer}} >

  <Box w={isSmallScreen ? '100%' : '60%'} style={styles.paymentStagePaymentDetailsContainer} dataSet={{ media: ids.paymentStagePaymentDetailsContainer}} >
    {/* <BookingHeader data={headerData}/> */}
    <SessionInfo session={session} />
    <Divider backgroundColor={colors.grey} opacity={0.6} />
    <Text style={styles.paymentStagePaymentHeader} dataSet={{ media: ids.paymentStagePaymentHeader}}>saved payment options</Text>

    
    <Radio.Group defaultValue='payMob' name='paymentRadioGroup' accessibilityLabel= 'payment method' value={paymentMethod} onChange={val => setPaymentMethod(val)} >
      <Box  style={styles.paymentStageRadioContainer} dataSet={{ media: ids.paymentStageRadioContainer}} > 
        <Radio value='payMob' size='sm'
        backgroundColor={colors.brandPrimary}
        borderColor={colors.grey}
        colorScheme='warning'
        >
          <Image alt='hello' source={{uri: 'https://paymob.com/images/logoC.png'}}  style={styles.paymentStagePaymentImage} dataSet={{ media: ids.paymentStagePaymentImage}} />
        </Radio>
      </Box>
    </Radio.Group>
    
  </Box>

  <VStack w='100%' style={styles.paymentStageReceiptContainer} dataSet={{ media: ids.paymentStageReceiptContainer}}>

  { (isSmallScreen) ? null : (<Box style={styles.paymentStageCoachInfoContainer} dataSet={{ media: ids.paymentStageCoachInfoContainer}}>
      <HStack>
          <Image alt='coach image' style={styles.paymentStageCoachInfoImage} dataSet={{ media: ids.paymentStageCoachInfoImage}} 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'}}
          />

        <VStack style={styles.paymentStageCoachInfoTextsContainer} dataSet={{ media: ids.paymentStageCoachInfoTextsContainer}} >
          <Text style={styles.paymentStageCoachInfoMainText} dataSet={{ media: ids.paymentStageCoachInfoMainText}} >islam mohareb</Text>
          <Text style={styles.paymentStageCoachInfoSubtext} dataSet={{ media: ids.paymentStageCoachInfoSubtext}} >Ultimate Professional & Coach</Text>
        </VStack>
      </HStack>

      <Divider backgroundColor={colors.grey} opacity={0.6} mt={4} mb={4} /> 

    </Box>)}

    { (isSmallScreen) ? (null) : (
    <Box w='100%'  style={styles.paymentStageReceiptWebContainer} dataSet={{ media: ids.paymentStageReceiptWebContainer}} >
      <Box w='100%' style={styles.paymentStageReceipt} dataSet={{ media: ids.paymentStageReceipt}} >
        <HStack style={styles.paymentStageReceiptSubitem} dataSet={{ media: ids.paymentStageReceiptSubitem}}>
          <Text style={styles.paymentStageReceiptSubitemLabel} dataSet={{ media: ids.paymentStageReceiptSubitemLabel}}>subtotal</Text>
          <Text style={styles.paymentStageReceiptSubitemAmount} dataSet={{ media: ids.paymentStageReceiptSubitemAmount}}>360$</Text>
        </HStack>

        <Divider backgroundColor={colors.grey} opacity={0.6} mt={3} mb={4} />

        <HStack style={styles.paymentStageReceiptTotal} dataSet={{ media: ids.paymentStageReceiptTotal}}>
          <Text style={styles.paymentStageReceiptTotalLabel} dataSet={{ media: ids.paymentStageReceiptTotalLabel}}>total amount</Text>
          <Text style={styles.paymentStageReceiptTotalAmount} dataSet={{ media: ids.paymentStageReceiptTotalAmount}}>360$</Text>
        </HStack>
      </Box>
      <Button style={styles.nextButton} dataSet={{ media: ids.nextButton}}>
        <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>make payment</Text>
      </Button>
    </Box>
    )}
    
    
    { (!isSmallScreen) ? (null) : (
      <Box w='100%' style={styles.paymentStageReceipt} dataSet={{ media: ids.paymentStageReceipt}} >
      <HStack style={styles.paymentStageReceiptSubitem} dataSet={{ media: ids.paymentStageReceiptSubitem}}>
        <Text style={styles.paymentStageReceiptSubitemLabel} dataSet={{ media: ids.paymentStageReceiptSubitemLabel}}>subtotal</Text>
        <Text style={styles.paymentStageReceiptSubitemAmount} dataSet={{ media: ids.paymentStageReceiptSubitemAmount}}>360$</Text>
      </HStack>

      <Divider backgroundColor={colors.grey} opacity={0.6} mt={3} mb={4} />

      <HStack style={styles.paymentStageReceiptTotal} dataSet={{ media: ids.paymentStageReceiptTotal}}>
        <Text style={styles.paymentStageReceiptTotalLabel} dataSet={{ media: ids.paymentStageReceiptTotalLabel}}>total amount</Text>
        <Text style={styles.paymentStageReceiptTotalAmount} dataSet={{ media: ids.paymentStageReceiptTotalAmount}}>360$</Text>
      </HStack>
    </Box>
    )}
    
      <Button style={styles.nextButton} dataSet={{ media: ids.nextButton}}>
        <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>make payment</Text>
      </Button>
  </VStack>

  </Box>
  )

  const PaymentSuccess = () => (<Box  style={styles.PaymentSuccessContainer} dataSet={{ media: ids.PaymentSuccessContainer}} >
  <VStack style={styles.PaymentSuccessMessageContainer} dataSet={{ media: ids.PaymentSuccessMessageContainer}}>
  <Text style={styles.PaymentSuccessHeader} dataSet={{ media: ids.PaymentSuccessHeader}}>your session has been booked </Text>
  <Text style={styles.PaymentSuccessDescription} dataSet={{ media: ids.PaymentSuccessDescription}}>gamejinn team has sent you an email with the receipt, we will send the confirmation email 30 minutes before the scheduled time.</Text>
  </VStack>
  </Box>
  )

  const renderSwitch = () => {switch(currentTab) {
      case 'Schedule':
        return (<ScheduleStage  session={session} date={date} />);
        break
      case 'Contact':
        return (<ContactStage  />);
        break
      case 'Payment':
        return (<PaymentStage  session={session}  />);
        break
      case 'Success':
        return (<PaymentSuccess  />);
        break
      default:
        return "";
    }
  }


  return (
    <Box  style={styles.container} dataSet={{ media: ids.container}} >
      {(paymentState  === 'completed' || datePickerActive === true)   ? "" : <BookingHeader data={headerValues}/>}
      {/* <Stack.Navigator
        initialRouteName={'Schedule'}
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={'Schedule'}
          component={ScheduleStage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={'Contact'}
          component={ContactStage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={'Payment'}
          component={PaymentStage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={'Success'}
          component={PaymentSuccess}
        />
      </Stack.Navigator> */}
      {renderSwitch()}
      
    </Box>
  )
}

// 


export default Payment

