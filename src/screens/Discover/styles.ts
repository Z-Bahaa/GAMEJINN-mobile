import {useTheme} from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      backgroundColor: theme.colors.brandPrimary,
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    QuickSearchCoachesListContainer: {
      marginTop: theme.spacing[16],
      flexGrow: 1,
      '@media (min-width: 800px)': {
        flexDirection: 'row'
      },
    },
    QuickSearchHeadingContainer: {
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[24],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    QuickSearchHeadingPrimaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.regular,
      },
    },
    QuickSearchHeadingButton: {
      alignItems: 'center',
      // backgroundColor: theme.colors.textPrimary,
    },
    QuickSearchHeadingButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
      marginEnd: theme.spacing[8],
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    QuickSearchGamesCarouselContainer: {
      alignItems: 'flex-start',
      paddingTop: theme.spacing[16],
      marginBottom: theme.spacing[16],
      height: 250,
      '@media (min-width: 800px)': {
        marginBottom: theme.spacing[8],
        height: 300,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    QuickSearchGamesCarouselItem: {
      backgroundColor: theme.colors.brandSecondary,
      paddingTop: theme.spacing[16],
      marginEnd: theme.spacing[16],
      paddingHorizontal: theme.spacing[12],
      borderRadius: theme.borderRadius[8],
      height: 240,
      width: 160,
      '@media (min-width: 800px)': {
        height: 260,
        width: 180,
      },
    },
    QuickSearchGamesCarouselImage: {
      flex: 1,
      borderRadius: theme.borderRadius[8],
    },
    QuickSearchGamesCarouselText: {
      alignSelf: 'center',
      color: theme.colors.textPrimary,
      paddingTop: theme.spacing[12],
      paddingBottom: theme.spacing[8]/2,
      fontSize: theme.fontSize.sm,
      '@media (min-width: 800px)': {
        paddingBottom: theme.spacing[8],
        fontSize: theme.fontSize.sm,
      },
    },
    QuickSearchCoachesListContainer2: {
      flexGrow: 1,
      '@media (min-width: 800px)': {
        flexDirection: 'row'
      },
    },
    QuickSearchCoachesListItem: {
      backgroundColor: 'trans',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingStart: theme.spacing[8],
      borderRadius: theme.borderRadius[4],
      flexGrow: 1,
      height: 60,
      '@media (min-width: 800px)': {
      padding: theme.spacing[16],
      backgroundColor: theme.colors.brandSecondary
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    QuickSearchCoachesListImage: {
      borderRadius: theme.borderRadius[4],
      marginEnd: theme.spacing[12],
      width: 45,
      height: 45,
      // backgroundColor: theme.colors.textPrimary,
    },
    QuickSearchCoachesListHeading: {
      marginTop: theme.spacing[8],
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
      },
    },
    QuickSearchCoachesListSubtext1: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    QuickSearchCoachesListSubtext2: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
    },
  });

  return styleSheet
}

export default makeStyles