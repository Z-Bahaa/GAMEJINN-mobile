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
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    searchContainer: {
      width: '100%',
      flexGrow: 1,
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
    },
    GamesGridContainer: {
      width: '100%',
      // flexGrow: 1,
      alignItems: 'center',
      paddingBottom: theme.spacing[32]*8,
      '@media (min-width: 800px)': {
        paddingHorizontal: theme.spacing[12],
        paddingBottom: theme.spacing[32],
        // alignItems: 'flex-start',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    GamesGridGridContainer: {
      width: '100%',
      '@media (min-width: 800px)': {
        // alignItems: 'flex-start',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    GamesGridItemContainer: {
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
    GamesGridItem: {
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
    GamesGridImageContainer: {
      flexGrow: 1,
      width: '100%',
    },
    GamesGridImage: {
      flexGrow: 1,
      width: '100%',
      borderRadius: theme.borderRadius[8],
    },
    GamesGridName: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      marginTop: theme.spacing[16]
    },
    GamesGridGameText: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    GamesGridDescription: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
      paddingBottom: theme.spacing[16],
      alignSelf: 'flex-start',
      '@media (min-width: 800px)': {
        // fontSize: theme.fontSize.sm,
        maxWidth: 500,
      },
    },
    GamesHeadingContainer: {
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
    GamesHeadingPrimaryText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.regular*1.25,
      },
    },
  });

  return styleSheet
}

export default makeStyles