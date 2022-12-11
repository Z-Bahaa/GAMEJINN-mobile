import { Box, VStack,  HStack, useTheme, Image, Text, ScrollView, useMediaQuery, Button } from 'native-base'
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      marginTop: theme.spacing[16],
      flexGrow: 1,
      '@media (min-width: 800px)': {
        flexDirection: 'row'
      },
    },
    item: {
      backgroundColor: 'trans',
      alignItems: 'center',
      marginBottom: theme.spacing[16],
      paddingStart: theme.spacing[8],
      borderRadius: theme.borderRadius[4],
      flexGrow: 1,
      height: 60,
      '@media (min-width: 800px)': {
      marginEnd: theme.spacing[8],
      backgroundColor: theme.colors.brandSecondary
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    image: {
      borderRadius: theme.borderRadius[4],
      marginEnd: theme.spacing[12],
      width: 45,
      height: 45,
      // backgroundColor: theme.colors.textPrimary,
    },
    heading: {
      marginTop: theme.spacing[8],
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      '@media (min-width: 800px)': {
      },
    },
    subtext1: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    subtext2: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
    },
  });

  return styleSheet
}



const QuickSearchCoachesList = ({data, coachOnPress}) => {
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
        {data.map((c: any, i: number) => (
          <Button variant='unstyled' padding={0} justifyContent='flex-start' key={i} onPress={coachOnPress} style={styles.item} dataSet={{ media: ids.item}} >
            <HStack  /* style={styles.item} dataSet={{ media: ids.item}} */ flexGrow={1}>
              <Image alt="game image" source= {{uri : c.imageUrl}}    style={styles.image} dataSet={{ media: ids.image}}   />
              <VStack justifyContent='center' >
                <Text   style={styles.heading} dataSet={{ media: ids.heading}} >{c.name}</Text>
                <HStack>
                  <Text   style={styles.subtext1} dataSet={{ media: ids.subtext1}} >available </Text>
                  <Text   style={styles.subtext2} dataSet={{ media: ids.subtext2}} >{"  " + c.availableAt}</Text>
                </HStack>
              </VStack>
            </HStack>
          </Button>
        ))}
    </Box>
  )
}


export default QuickSearchCoachesList

