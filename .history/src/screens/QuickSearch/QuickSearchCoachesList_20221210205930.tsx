import { Box, VStack,  HStack, useTheme, Image, Text, ScrollView, useMediaQuery, Button } from 'native-base'
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      marginTop: theme.spacing[16],
      flexGrow: 1,
    },
    item: {
      backgroundColor: 'trans',
      alignItems: 'center',
      marginBottom: theme.spacing[16],
      paddingStart: theme.spacing[8],
      borderRadius: theme.borderRadius[4],
      height: 60,
      // backgroundColor: theme.colors.textPrimary,
    },
    image: {
      borderRadius: theme.borderRadius[4],
      marginEnd: theme.spacing[12],
      width: 45,
      height: 45,
      // backgroundColor: theme.colors.textPrimary,
    },
    text: {
      alignSelf: 'center',
      paddingTop: theme.spacing[12],
      paddingBottom: theme.spacing[8]/2,
      fontSize: theme.fontSize.sm,
      flexGrow: 1,
    },
    heading: {
      marginTop: theme.spacing[8],
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
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
          <Button variant='unstyled' padding={0}  key={i} onPress={coachOnPress} alignItems='flex-start' w=>
            <HStack  style={styles.item} dataSet={{ media: ids.item}}>
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

