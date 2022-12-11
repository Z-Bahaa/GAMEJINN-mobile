import { Box, VStack, useTheme, Image, Text, ScrollView, useMediaQuery, Button } from 'native-base'
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      paddingTop: theme.spacing[16],
      // backgroundColor: theme.colors.textPrimary,
    },
    item: {
      backgroundColor: theme.colors.brandSecondary,
      paddingTop: theme.spacing[16],
      marginEnd: theme.spacing[16],
      paddingHorizontal: theme.spacing[12],
      borderRadius: theme.borderRadius[8],
      height: 60,
      width: 160,
    },
    image: {
      flex: 1,
      borderRadius: theme.borderRadius[8],
    },
    text: {
      alignSelf: 'center',
      color: theme.colors.textPrimary,
      paddingTop: theme.spacing[12],
      paddingBottom: theme.spacing[8]/2,
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
          <Button variant='unstyled' padding={0}  key={i} onPress={coachOnPress}>
            <VStack  style={styles.item} dataSet={{ media: ids.item}}>
              <Text   style={styles.text} dataSet={{ media: ids.text}} >{c.name}</Text>
            </VStack>
          </Button>
        ))}
    </Box>
  )
}


export default QuickSearchCoachesList

