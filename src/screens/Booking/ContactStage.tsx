import {  VStack, Text, useTheme, HStack, Input,  useMediaQuery, Icon, Button, Box } from 'native-base'
import StyleSheet from 'react-native-media-query';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


interface FormValues {
  login: string;
  password: string;
}

const makeStyles = () => {  
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[32],
      paddingBottom: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
        height: '80%',
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
      '@media (min-width: 800px)': {
        marginBottom: 0,
        width: '60%',
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
    outerInputContainer: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],
      marginBottom: theme.spacing[16],
    },
    innerInputContainer: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[8],
      margin: theme.spacing[8],
      justifyContent: 'space-between',
      alignItems: 'center',
      '@media (min-width: 800px)': {
        // margin: theme.spacing[12],
      },
    },
    input: {
      flex: 1,
      borderWidth: 0,
    },
    splitContainerWeb: {
      width: '100%', 
      '@media (min-width: 800px)': {
        width: '60%', 
      },
    },
  });

  return styleSheet
}

const PaymentSuccess = () => { const [isSmallScreen] = useMediaQuery({
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
    <Box  style={styles.splitContainerWeb} dataSet={{ media: ids.splitContainerWeb}}  >
      {[1,2,3].map((i) => <Box w='100%' style={styles.outerInputContainer} dataSet={{ media: ids.outerInputContainer}} key={i}>
        <HStack  style={styles.innerInputContainer} dataSet={{ media: ids.innerInputContainer}}>
          <Icon as={MaterialIcons} name="mail" size='24px' color={colors.brandSecondary} m={2}  mr={0} mb={3} />
          <Input style={styles.input} dataSet={{ media: ids.input}} 
          flex={1} 
          variant='unstyled'
          placeholder="e-mail"
          mt={isSmallScreen ? 2 : 0}
          fontSize={fontSize.md}
          />
        </HStack>
      </Box>)}
    </Box>
    
    <Button style={[styles.nextButton, /* (date === '' ? styles.nextButtonDisabled : "") */]} dataSet={{ media: ids.nextButton}}>
      <Text style={styles.nextButtonText} dataSet={{ media: ids.nextButtonText}}>next</Text>
    </Button>
  </VStack>
)
}


export default PaymentSuccess

