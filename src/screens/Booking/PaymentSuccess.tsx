import { VStack, Text, useTheme, Box,  useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: theme.spacing[16],
      paddingBottom: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        // backgroundColor: theme.colors.textPrimary,
        height: '100%',
        paddingTop: 180,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    messageContainer: {
      backgroundColor: theme.colors.brandSecondary,
      borderWidth: 1,
      borderColor: theme.colors.white,
      padding: theme.spacing[32],
      borderRadius: theme.borderRadius[8],
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 150,
      '@media (min-width: 800px)': {
        marginBottom: 0,
        width: '45%',
        padding: theme.spacing[24],
      },
    },
    header: {
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: theme.spacing[16],
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.xs*2.1,
        marginTop: 50,
      },
      
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
      textAlign: 'center',
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.xs*1.5,
        width: '60%',
        marginBottom: 50,

      },
      
    },
  });

  return styleSheet
}

const PaymentSuccess = () => {
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
      <VStack style={styles.messageContainer} dataSet={{ media: ids.messageContainer}}>
        <Text style={styles.header} dataSet={{ media: ids.header}}>your session has been booked </Text>
        <Text style={styles.description} dataSet={{ media: ids.description}}>gamejinn team has sent you an email with the receipt, we will send the confirmation email 30 minutes before the scheduled time.</Text>
      </VStack>
    </Box>
  )
}


export default PaymentSuccess

