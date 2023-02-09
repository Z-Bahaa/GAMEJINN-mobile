import { HStack, Text, useTheme, VStack,  useMediaQuery, Center } from 'native-base'
import StyleSheet from 'react-native-media-query';


import DateTimePickerModal from "react-native-modal-datetime-picker";


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
  });

  return styleSheet
}

const DateTimePicker = ({ datePickerActive, setDatePickerActive}) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });
    const {ids, styles} = makeStyles();

   
  const theme = useTheme();



  const newLocal = 'green';
  return (
    <VStack  style={styles.container} dataSet={{ media: ids.container}} > 
      <DateTimePickerModal
        isVisible={datePickerActive}
        mode="datetime"
        onConfirm={(val) => alert ('on confim')}
        onCancel={() => alert ('on cancel')}
        positiveButton={{label: 'OK', textColor: theme.colors.textSecondary}}
        display='inline'
      />
    </VStack>
  )
}


export default DateTimePicker

