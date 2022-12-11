import { HStack, VStack, Text, useTheme, Image, Button, Pressable, useMediaQuery } from 'native-base'
import StyleSheet from 'react-native-media-query';

import InfoTag from './InfoTag'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: theme.spacing[16],
      '@media (min-width: 800px)': {
        paddingTop: theme.spacing[16],
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    item: {
      marginBottom: theme.spacing[16],
      alignItems: 'center',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: theme.borderRadius[4]
    },
    title: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      paddingTop: 6,
      paddingStart: theme.spacing[12],
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const GameResult = ({data, resultOnPress}) => {
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
    <VStack  style={styles.container} dataSet={{ media: ids.container}} >
      {
        data?.slice(0,3).map((g: any, i: any) => (
            <HStack justifyContent='space-between' flexGrow={1} w='100%'>
              <Pressable variant="unstyled" p={0}  onPress={resultOnPress} key={i} >
                <HStack style={styles.item} dataSet={{ media: ids.item}}>
                  <Image alt="image" source={{uri: g.imageUrl}}  style={styles.image} dataSet={{ media: ids.image}} />
                  <Text style={styles.title} dataSet={{ media: ids.title}} >{g.title}</Text>
                </HStack>
              </Pressable>
              {isSmallScreen ? "" : <InfoTag data={g.tags} />}
            </HStack>
        ))
      }
    </VStack>
  )
}


export default GameResult

