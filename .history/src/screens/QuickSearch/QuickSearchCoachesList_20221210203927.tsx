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
      paddingTop: theme.spacing[16],
      marginEnd: theme.spacing[16],
      paddingHorizontal: theme.spacing[12],
      borderRadius: theme.borderRadius[4],
      height: 60,
    },
    image: {
      borderRadius: theme.borderRadius[4],
      width: 40,
      height: 40,
    },
    text: {
      alignSelf: 'center',
      color: theme.colors.textPrimary,
      paddingTop: theme.spacing[12],
      paddingBottom: theme.spacing[8]/2,
      fontSize: theme.fontSize.sm,
      flexGrow: 1,
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
          // <Button variant='unstyled' padding={0}  key={i} onPress={coachOnPress}>
            <HStack  style={styles.item} dataSet={{ media: ids.item}}>
              <Image alt="game image" source= {{uri : c.imageUrl}}    style={styles.image} dataSet={{ media: ids.image}}   />
              <VStack  style={styles.item} dataSet={{ media: ids.item}}>
                <Text   style={styles.text} dataSet={{ media: ids.text}} >{c.name}</Text>
                <HStack>
                  <Text   style={styles.text} dataSet={{ media: ids.text}} >{c.name}</Text>
                  <Text   style={styles.text} dataSet={{ media: ids.text}} >{c.name}</Text>
                </HStack>
              </VStack>
            </HStack>
          // </Button>
        ))}
    </Box>
  )
}


export default QuickSearchCoachesList

