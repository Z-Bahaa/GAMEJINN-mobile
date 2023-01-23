import { VStack, Text, useTheme, HStack, Center,  useMediaQuery, Image, Button, Box, Divider } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import BookingHeader from './BookingHeader'
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
      '@media (min-width: 800px)': {
        flexDirection: 'row',
        paddingTop: theme.spacing[16],
      },
      '@media (max-width: 800px)': {
        height: '100%',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    paymentDetailsContainer: {
      paddingEnd: theme.spacing[12],
      paddingStart: 100,
      '@media (min-width: 800px)': {
        // paddingHorizontal: 100,
      },
      '@media (max-width: 800px)': {
        paddingHorizontal: 0,
        paddingStart: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    nextButton: {
      marginBottom: theme.spacing[32]*2,
      width: '100%',
      backgroundColor: theme.colors.yellow,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius[8],
      justifySelf: 'flex-end',
      '@media (min-width: 800px)': {
        marginBottom: theme.spacing[16],
      },
    },
    nextButtonText: {
      marginTop: theme.spacing[12],
      margin: theme.spacing[8],
      width: '100%',
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
    },
    nextButtonDisabled: {
      opacity: 0.6,
    },
    paymentHeader: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
      marginTop: theme.spacing[16],
    },
    receiptContainer: {
      backgroundColor: theme.colors.brandSecondary,
      height: '55%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      '@media (min-width: 800px)': {
        // paddingHorizontal: 100,
        position: 'fixed',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingHorizontal: 50,
      },
    },
    receiptWebContainer: {
      height: '55%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    receipt: {
      marginTop: theme.spacing[24]
    },
    receiptSubitem: {
      alignItems: 'flex-end',
      width: '100%',
      justifyContent: 'space-between',
    },
    receiptSubitemLabel: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
    },
    receiptSubitemAmount: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    receiptTotal: {
      alignItems: 'flex-end',
      width: '100%',
      justifyContent: 'space-between',
    },
    receiptTotalLabel: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.regular,
    },
    receiptTotalAmount: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
    },
    coachInfoContainer: {
      // backgroundColor: theme.colors.white,
      width: '100%',
      marginTop: theme.spacing[32],
    },
    coachInfoImage: {
      borderRadius: '50%',
      width: 60,
      height: 60,
      marginEnd: theme.spacing[16],
    },
    coachInfoTextsContainer: {
      // backgroundColor: theme.colors.white,
      justifyContent: 'center',
    },
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
    },
    coachInfoSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
  });

  return styleSheet
}

const PaymentStage = ({session, }) => {
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
    <Box  style={styles.container} dataSet={{ media: ids.container}} >

      <Box w={isSmallScreen ? '100%' : '60%'} style={styles.paymentDetailsContainer} dataSet={{ media: ids.paymentDetailsContainer}} >
        {/* <BookingHeader data={headerData}/> */}
        <SessionInfo session={session} />
        <Divider backgroundColor={colors.grey} opacity={0.6} />
        <Text style={styles.paymentHeader} dataSet={{ media: ids.paymentHeader}}>saved payment options</Text>
        
      </Box>

      <VStack w='100%' style={styles.receiptContainer} dataSet={{ media: ids.receiptContainer}}>

      { (isSmallScreen) ? null : (<Box style={styles.coachInfoContainer} dataSet={{ media: ids.coachInfoContainer}}>
          <HStack style={styles.coachInfo} dataSet={{ media: ids.coachInfo}}>
              <Image alt='coach image' style={styles.coachInfoImage} dataSet={{ media: ids.coachInfoImage}} 
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'}}
              />

            <VStack style={styles.coachInfoTextsContainer} dataSet={{ media: ids.coachInfoTextsContainer}} >
              <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >islam mohareb</Text>
              <Text style={styles.coachInfoSubtext} dataSet={{ media: ids.coachInfoSubtext}} >Ultimate Professional & Coach</Text>
            </VStack>
          </HStack>

          <Divider backgroundColor={colors.grey} opacity={0.6} mt={4} mb={4} /> 
        </Box>)}

        { (isSmallScreen) ? (null) : (
        <Box w='100%'  style={styles.receiptWebContainer} dataSet={{ media: ids.receiptWebContainer}} >
          <Box w='100%' style={styles.receipt} dataSet={{ media: ids.receipt}} >
            <HStack style={styles.receiptSubitem} dataSet={{ media: ids.receiptSubitem}}>
              <Text style={styles.receiptSubitemLabel} dataSet={{ media: ids.receiptSubitemLabel}}>subtotal</Text>
              <Text style={styles.receiptSubitemAmount} dataSet={{ media: ids.receiptSubitemAmount}}>360$</Text>
            </HStack>

            <Divider backgroundColor={colors.grey} opacity={0.6} mt={3} mb={4} />

            <HStack style={styles.receiptTotal} dataSet={{ media: ids.receiptTotal}}>
              <Text style={styles.receiptTotalLabel} dataSet={{ media: ids.receiptTotalLabel}}>total amount</Text>
              <Text style={styles.receiptTotalAmount} dataSet={{ media: ids.receiptTotalAmount}}>360$</Text>
            </HStack>
          </Box>
          <Button style={styles.nextButton} dataSet={{ media: ids.nextButton}}>
            <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>make payment</Text>
          </Button>
        </Box>
        )}
        
        
        { (!isSmallScreen) ? (null) : (
          <Box w='100%' style={styles.receipt} dataSet={{ media: ids.receipt}} >
          <HStack style={styles.receiptSubitem} dataSet={{ media: ids.receiptSubitem}}>
            <Text style={styles.receiptSubitemLabel} dataSet={{ media: ids.receiptSubitemLabel}}>subtotal</Text>
            <Text style={styles.receiptSubitemAmount} dataSet={{ media: ids.receiptSubitemAmount}}>360$</Text>
          </HStack>

          <Divider backgroundColor={colors.grey} opacity={0.6} mt={3} mb={4} />

          <HStack style={styles.receiptTotal} dataSet={{ media: ids.receiptTotal}}>
            <Text style={styles.receiptTotalLabel} dataSet={{ media: ids.receiptTotalLabel}}>total amount</Text>
            <Text style={styles.receiptTotalAmount} dataSet={{ media: ids.receiptTotalAmount}}>360$</Text>
          </HStack>
        </Box>
        )}
        
        { (!isSmallScreen) ? (null) : (
          
          <Button style={styles.nextButton} dataSet={{ media: ids.nextButton}}>
            <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>make payment</Text>
          </Button>
        )}
      </VStack>

    </Box>
  )
}


export default PaymentStage