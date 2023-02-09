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
    },
    searchContainer: {
      width: '100%',
      flexGrow: 1,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
    },
    coachesHeadingContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[16],
      paddingBottom: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[8],
        paddingHorizontal: 100,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    coachesHeadingPrimaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.regular*1.25,
      },
    },
    coachesHeadingButton: {
      alignItems: 'center',
      // backgroundColor: theme.colors.textPrimary,
    },
    coachesHeadingButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    coachesGridContainer: {
      width: '100%',
      // flexGrow: 1,
      alignItems: 'center',
      paddingBottom: theme.spacing[32]*8,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100 + theme.spacing[12],
        paddingBottom: theme.spacing[32],
        // alignItems: 'flex-start',
        overflow: 'hidden',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    coachesGridGridContainer: {
      width: '100%',
      '@media (min-width: 800px)': {
        // alignItems: 'flex-start',
        // width: '110%',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    coachesGridItemContainer: {
      flexGrow: 1,
      alignItems: 'flex-start',
      // backgroundColor: theme.colors.textPrimary,
      height: 316,
      width: 180,
      marginEnd: theme.spacing[12],
      marginBottom: theme.spacing[16],
      '@media (min-width: 800px)': {
        // marginHorizontal: theme.spacing[8]/2,
        height: 326,
      },
      '@media (min-width: 1800px)': {
        // marginHorizontal: theme.spacing[8]/2,
        height: 500,
      },
    },
    coachesGridItem: {
      flexGrow: 1,
      height: 316,
      width: 180,
      '@media (min-width: 800px)': {
        marginEnd: theme.spacing[32],
        height: "100%",
        width: '90%',
        maxWidth: 180,
      },
    },
    coachesGridImageContainer: {
      flexGrow: 1,
      width: '100%',
    },
    coachesGridImage: {
      flexGrow: 1,
      width: '100%',
      borderRadius: theme.borderRadius[8],
    },
    coachesGridFloatingTextBox: {
      backgroundColor: theme.colors.white,
      position: 'absolute',
      bottom: theme.spacing[16],
      start: theme.spacing[8],
      borderRadius: theme.borderRadius[4],
      alignItems: 'center',
    },
    coachesGridFloatingText: {
      fontSize: theme.fontSize.xxs,
      paddingVertical: theme.spacing[8]/2,
      paddingHorizontal: theme.spacing[8],
      paddingBottom: 1,
      '@media (min-width: 800px)': {
        paddingVertical: theme.spacing[12]/2,
        margin: 0,
        '@media (min-width: 1800px)': {
          fontSize: theme.fontSize.xs,
        },
      },
    },
    coachesGridName: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      marginTop: theme.spacing[12]
    },
    coachesGridGameText: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    coachesGridDescription: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
      paddingBottom: theme.spacing[16],
      alignSelf: 'flex-start',
      '@media (min-width: 800px)': {
        // fontSize: theme.fontSize.sm,
        maxWidth: 500,
      },
    },
    filtersModalContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'flex-end',
      backgroundColor: theme.colors.brandPrimary,
      paddingTop: theme.spacing[8],
      opacity: .95,
      '@media (min-width: 800px)': {
        height: '100vh',
        position: 'fixed',
      },
    },
    filtersModalFiltersContainer: {
      width: '100%',
      height: 600,
      backgroundColor: theme.colors.brandSecondary,
      position: 'absolute',
      borderTopLeftRadius: theme.borderRadius[16],
      borderTopRightRadius: theme.borderRadius[16],
      paddingTop: theme.spacing[8],
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[16],
      justifyContent: 'space-between',
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
    filtersModalSelectBox: {
      marginTop: -theme.spacing[8],
      // marginBottom: -theme.spacing[12],
      paddingBottom: 0,
      // paddingTop: 0,
      paddingStart: 0,
      paddingEnd:  0,
      borderWidth: 0,
      borderRadius: 0,
      alignItems: 'center',
      borderBottomWidth: 1,
      // backgroundColor: theme.colors.textPrimary,
    },
    filtersModalSelectInput: {
      marginBottom: -theme.spacing[8]/2,
      marginStart: theme.spacing[8]/2,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      height: 50,
      // backgroundColor: theme.colors.textPrimary,
    },
    filtersModalSelectDropdown: {      
      paddingTop: 0,
      paddingStart: 0,
      paddingBottom: 0,
      borderWidth: 0,
      borderRadius: 0,
      marginStart: theme.spacing[8],
      marginTop: 0,
      // backgroundColor: theme.colors.textPrimary,
    },
    filtersModalSelectDropdownItem: {
      // backgroundColor: theme.colors.grey,
      marginBottom: theme.spacing[8]/2,
      paddingTop: 0,
      paddingStart: 0,
      paddingBottom: 0,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.grey,
    },
    filtersModalSelectDropdownText: {
      // backgroundColor: theme.colors.textPrimary,
      marginTop: -(theme.spacing[8] - 2),
      paddingTop: 0,
      paddingStart: 0,
      paddingBottom: 0,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    filtersModalNextButton: {
      marginBottom: theme.spacing[32]*4,
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
    filtersModalNextButtonText: {
      marginTop: theme.spacing[12],
      margin: theme.spacing[8],
      width: '100%',
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
    },
  });

  return styleSheet
}

export default makeStyles