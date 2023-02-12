import {useTheme} from 'native-base'
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
    SessionInfoContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // backgroundColor: theme.colors.textPrimary,
      paddingBottom: theme.spacing[24],
      '@media (min-width: 800px)': {
        alignItems: 'flex-start',
      },

    },
    SessionInfoImageContainer: {
    },
    SessionInfoImage: {
      width: 120,
      height: 150,
      borderRadius: theme.borderRadius[8],
      '@media (min-width: 800px)': {
        width: 100,
        height: 125,
      },
    },
    SessionInfoGreyText: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
      paddingBottom: theme.spacing[8],
    },
    SessionInfoWhiteText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md
    },
    SessionInfoTextContainer: {
      paddingStart: theme.spacing[12],
      paddingTop: theme.spacing[8],
    },
    bookingHeaderContainer: {
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
    bookingHeaderStageContainer: {
      // backgroundColor: theme.colors.textPrimary,
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginEnd: theme.spacing[32],
      '@media (max-width: 800px)': {
        marginEnd: theme.spacing[12],
        // alignItems: 'flex-end',
        alignItems: 'center', 
      },
    },
    bookingHeaderStageIndexBox: {
      // backgroundColor: theme.colors.textPrimary,
      backgroundColor: theme.colors.brandSecondary,
      width: 25,
      height: 25,
      borderRadius: theme.borderRadius[8]*10,
      marginEnd: theme.spacing[8],
    },
    bookingHeaderStageIndexBoxActive: {
      backgroundColor: theme.colors.white,
    },
    bookingHeaderStageIndexBoxCompleted: {
      backgroundColor: theme.colors.yellow,
    },
    bookingHeaderStageIndexText: {
      // backgroundColor: theme.colors.textPrimary,
      paddingTop: theme.spacing[12]/2,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
      '@media (min-width: 800px)': {
        paddingTop: 0,
      },
      
    },
    bookingHeaderStageIndexTextActive: {
      color: theme.colors.brandSecondary,
      
    },
    bookingHeaderStageIndexTextCompleted: {
      color: theme.colors.brandPrimary,
      
    },
    bookingHeaderStageTitle: {
      color: theme.colors.textGrey,
      paddingTop: theme.spacing[8],
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
        paddingTop: 0,
        // fontSize: theme.fontSize.regular,
      },
    },
    bookingHeaderStageTitleActive: {
      color: theme.colors.textPrimary,
    },
    bookingHeaderStageTitleCompleted: {
      color: theme.colors.yellow,
    },
    bookingHeaderLogo: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.textPrimary,
      marginVertical: theme.spacing[16],
    },
    DateTimePickerContainer: {
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
    paymentStageContainer: {
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
        justifyContent: 'space-between',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    paymentStagePaymentDetailsContainer: {
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
      marginTop: theme.spacing[32]*6.5,
      marginBottom: theme.spacing[32]*3,
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
    paymentStagePaymentHeader: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
      marginTop: theme.spacing[16],
    },
    paymentStageReceiptContainer: {
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
    paymentStageReceiptWebContainer: {
      height: '55%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    paymentStageReceipt: {
      marginTop: theme.spacing[24]
    },
    paymentStageReceiptSubitem: {
      alignItems: 'flex-end',
      width: '100%',
      justifyContent: 'space-between',
    },
    paymentStageReceiptSubitemLabel: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
    },
    paymentStageReceiptSubitemAmount: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    paymentStageReceiptTotal: {
      alignItems: 'flex-end',
      width: '100%',
      justifyContent: 'space-between',
    },
    paymentStageReceiptTotalLabel: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.regular,
    },
    paymentStageReceiptTotalAmount: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
    },
    paymentStageCoachInfoContainer: {
      // backgroundColor: theme.colors.white,
      width: '100%',
      marginTop: theme.spacing[32],
    },
    paymentStageCoachInfoImage: {
      borderRadius: 1000,
      width: 60,
      height: 60,
      marginEnd: theme.spacing[16],
      padding: theme.spacing[16],
    },
    paymentStageCoachInfoTextsContainer: {
      // backgroundColor: theme.colors.white,
      justifyContent: 'center',
    },
    paymentStageCoachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
    },
    paymentStageCoachInfoSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    paymentStageRadioContainer: {
      marginTop: theme.spacing[24],
      borderWidth: 1,
      borderColor: theme.colors.grey,
      borderRadius: theme.borderRadius[8],
      padding: theme.spacing[24],
      paddingStart: theme.spacing[16],
      width: '100%'

    },
    paymentStagePaymentImage: {
      height: 23,
      width: 105  ,
      // marginStart: theme.spacing[12]/4,
    },
    ScheduleStageContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      paddingBottom: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
      },
      '@media (max-width: 800px)': {
        height: '100%',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    ScheduleStageSessionCard: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],
      alignItems: 'center',
      width: '100%',
      '@media (min-width: 800px)': {
        justifyContent: 'space-between',
      },
    },
    ScheduleStageSessionCardSubcontainer: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],
      alignItems: 'center',
    },
    ScheduleStageSessionIcon: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[8],
      margin: theme.spacing[16],
    },
    ScheduleStageSessionHeader: {
      // backgroundColor: theme.colors.textPrimary,
      color: theme.colors.textPrimary,
      alignItems: 'center',
      fontSize: theme.fontSize.sm,
      paddingTop: theme.spacing[8],
      '@media (min-width: 800px)': {
        paddingTop: 0,
        fontSize: theme.fontSize.regular,
      },
      
    },
    ScheduleStagePrimaryButton: {
      marginTop: theme.spacing[24],
      width: '100%',
      backgroundColor: theme.colors.yellow,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius[8],
    },
    ScheduleStagePrimaryButtonText: {
      marginTop: theme.spacing[16],
      margin: theme.spacing[8],
      width: '100%',
      fontSize: theme.fontSize.regular,
    },
    ScheduleStagePrimaryButtonWeb: {
      backgroundColor: theme.colors.yellow,
      borderRadius: theme.borderRadius[4],
      marginEnd: theme.spacing[12],
    },
    ScheduleStagePrimaryButtonTextWeb: {
      margin: theme.spacing[12]/4,
      // fontSize: theme.fontSize.regular,
      
    },
    PaymentSuccessContainer: {
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
    PaymentSuccessMessageContainer: {
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
    PaymentSuccessHeader: {
      color: theme.colors.textPrimary,
      textAlign: 'center',
      marginBottom: theme.spacing[16],
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.xs*2.1,
        marginTop: 50,
      },
      
    },
    PaymentSuccessDescription: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
      textAlign: 'center',
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.xs*1.5,
        width: '60%',
        marginBottom: 50,

      },
      
    },
    ContactStageContainer: {
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
    ContactStageOuterInputContainer: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],
      marginBottom: theme.spacing[16],
    },
    ContactStageInnerInputContainer: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[8],
      margin: theme.spacing[8],
      justifyContent: 'space-between',
      alignItems: 'center',
      '@media (min-width: 800px)': {
        // margin: theme.spacing[12],
      },
    },
    ContactStageInput: {
      flex: 1,
      borderWidth: 0,
    },
    ContactStageSplitContainerWeb: {
      width: '100%', 
      '@media (min-width: 800px)': {
        width: '60%', 
      },
    },
  });

  return styleSheet
}

export default makeStyles