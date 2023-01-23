import { Image, Text, useTheme, HStack, VStack,  useMediaQuery, Center } from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // backgroundColor: theme.colors.textPrimary,
      paddingBottom: theme.spacing[24],
      '@media (min-width: 800px)': {
        alignItems: 'flex-start',
      },

    },
    imageContainer: {
    },
    image: {
      width: 120,
      height: 150,
      borderRadius: theme.borderRadius[8],
      '@media (min-width: 800px)': {
        width: 100,
        height: 125,
      },
    },
    greyText: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
      paddingBottom: theme.spacing[8],
    },
    whiteText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md
    },
    textContainer: {
      paddingStart: theme.spacing[12],
      paddingTop: theme.spacing[8],
    },
  });

  return styleSheet
}

const SessionInfo = ({session}) => {
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
    <HStack  style={styles.container} dataSet={{ media: ids.container}} >
      {/* <Center style={styles.imageContainer} dataSet={{ media: ids.imageContainer}} > */}
        <Image alt='hello' source={{uri: session.game.imageUrl}}  style={styles.image} dataSet={{ media: ids.image}} />
      {/* </Center> */}
      <VStack style={styles.textContainer} dataSet={{ media: ids.textContainer}} >
        <Text  style={styles.greyText} dataSet={{ media: ids.greyText}} >{session?.serviceType}</Text>
        <Text  style={styles.whiteText} dataSet={{ media: ids.whiteText}} >{session?.title}</Text>
      </VStack>
    </HStack>
  )
}


export default SessionInfo

