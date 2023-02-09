import {useTheme} from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      height: 'auto',
      paddingVertical: theme.spacing[12],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    Inputcontainer: {
      width: '100%',
      paddingBottom: theme.spacing[12],
    },
    logo: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.textPrimary,
    },
    backIcon: {
      // size:  24,
      // color: colors.textPrimary,
      // marginBottom: theme.spacing[12]
    },
    searchInput: {
      width: '100%',
      fontSize: theme.fontSize.xs,
      borderTopRightRadius: theme.borderRadius[4],
      borderBottomRightRadius: theme.borderRadius[4],
      height: 48,
      paddingBottom: 6,
      backgroundColor: theme.colors.brandSecondary,
      color: theme.colors.textPrimary,
    },
    searchIconBox: {
      backgroundColor: theme.colors.brandSecondary,
      height: 48,
      borderTopLeftRadius: theme.borderRadius[4],
      borderBottomLeftRadius: theme.borderRadius[4],
      paddingStart: theme.spacing[8],
    },
    searchIcon: {
      // fontSize: 20,
    },
    searchHeadingContainer: {
      width: '100%',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    searchHeadingPrimaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.regular,
      },
    },
    searchHeadingButton: {
      alignItems: 'center',
      marginEnd: theme.spacing[8],
      // backgroundColor: theme.colors.textPrimary,
    },
    searchHeadingButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    GameResultContainer: {
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[16],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    GameResultItem: {
      marginBottom: theme.spacing[16],
      alignItems: 'center',
    },
    GameResultImage: {
      width: 40,
      height: 40,
      borderRadius: theme.borderRadius[4]
    },
    GameResultTitle: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      paddingTop: 6,
      paddingStart: theme.spacing[12],
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    InfoTagContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      // backgroundColor: theme.colors.textPrimary,
    },
    InfoTagText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
    },
    InfoTagTextBox: {
      backgroundColor: theme.colors.brandSecondary,
      paddingHorizontal: theme.spacing[16],
      paddingVertical: theme.spacing[8],
      borderRadius: theme.borderRadius[4],
      marginStart: theme.spacing[16],
    },
    CoachesResultContainer: {
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[16],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    CoachesResultItemContainer: {
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: theme.spacing[16],
      marginEnd: theme.spacing[32],
      // backgroundColor: theme.colors.textPrimary,
    },
    CoachesResultItem: {
      alignItems: 'center',
    },
    CoachesResultImage: {
      width: 40,
      height: 40,
      borderRadius: theme.borderRadius[4]
    },
    CoachesResultName: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      paddingTop: 6,
      paddingStart: theme.spacing[12],
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    CoachesResultGameBox: {
      alignItems: 'center',
    },
    CoachesResultGameImage: {
      width: 36,
      height: 36,
      borderRadius: theme.borderRadius[4]
    },
    CoachesResultGameTitle: {
      paddingTop: 4,
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
      paddingHorizontal: theme.spacing[12],
    },
    CoachesResultGameBoxMultiple: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexGrow: 1,
      paddingHorizontal: theme.spacing[12],
    },
    CoachesResultGameImageMultiple: {
      width: 36,
      height: 36,
      borderRadius: theme.borderRadius[4],
      opacity: 0.8,
      marginStart: -15,
    },
    CoachesResultGameBoxMultipleExtra: {
      width: 36,
      height: 36,
      borderRadius: theme.borderRadius[4],
      // opacity: 0.5,
      marginStart: -15,
      backgroundColor: theme.colors.brandLight,
    },
    CoachesResultGameBoxMultipleExtraText: {
      paddingTop: 4,
      color: theme.colors.textPrimary,
    },
    NotFoundContainer: {
      flexGrow: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.brandPrimary,
      paddingVertical: theme.spacing[12],
    },
    NotFoundText: {
      color: theme.colors.textGrey,
    },
  });

  return styleSheet
}

export default makeStyles