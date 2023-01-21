import { VStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon, Button, Box, Divider } from 'native-base'
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
        marginTop: 100,
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
        justifyContent: 'flex-end',

      },
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
        
        <Box w='100%' w='100%' style={styles.receipt} dataSet={{ media: ids.receipt}} >
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
      </VStack>

    </Box>
  )
}


export default PaymentStage