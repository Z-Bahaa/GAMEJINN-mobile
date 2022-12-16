import { HStack, VStack, Text, useTheme, Box, Center, Pressable, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      // backgroundColor: theme.colors.textPrimary,
    },
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
    },
    textBox: {
      backgroundColor: theme.colors.brandSecondary,
      paddingHorizontal: theme.spacing[16],
      paddingVertical: theme.spacing[8],
      borderRadius: theme.borderRadius[4],
      marginStart: theme.spacing[16],
    },
  });

  return styleSheet
}

const InfoTag = ({data}) => {
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
      {
        data?.slice(0,2).map((t: any, i: number) => (
          <Box style={styles.textBox} dataSet={{ media: ids.textBox}} key={i}>
            <Text style={styles.text} dataSet={{ media: ids.text}} >{t}</Text>
          </Box>
        ))
      }
    </HStack>
  )
}


export default InfoTag

