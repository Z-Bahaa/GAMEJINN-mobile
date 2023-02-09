import { useTheme } from 'native-base'
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      height: 'auto',
      paddingVertical: theme.spacing[12],
      // paddingStart: theme.spacing[16],
      // paddingEnd: theme.spacing[12],
      // '@media (min-width: 800px)': {
      //   paddingHorizontal: 100,
      // },
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
      height: 45,
      marginTop: 2,
      backgroundColor: theme.colors.brandSecondary,
    },
    searchIconBox: {
      backgroundColor: theme.colors.brandSecondary,
      height: 45,
      borderTopLeftRadius: theme.borderRadius[4],
      borderBottomLeftRadius: theme.borderRadius[4],
      paddingStart: theme.spacing[8],
      marginTop: 2,
    },
    searchIcon: {
      // fontSize: 20,
    },
  });

  return styleSheet
}

export default makeStyles
