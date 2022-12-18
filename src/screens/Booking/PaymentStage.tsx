import { VStack, Text, useTheme, Box,  useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';


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

    </Box>
  )
}


export default PaymentSuccess

