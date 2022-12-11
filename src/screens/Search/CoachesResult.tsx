import { HStack, VStack, Text, useTheme, Image, Center, Pressable, useMediaQuery } from 'native-base'
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
    itemContainer: {
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: theme.spacing[16],
      marginEnd: theme.spacing[32],
      // backgroundColor: theme.colors.textPrimary,
    },
    item: {
      alignItems: 'center',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: theme.borderRadius[4]
    },
    name: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      paddingTop: 6,
      paddingStart: theme.spacing[12],
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    gameBox: {
      alignItems: 'center',
    },
    gameImage: {
      width: 36,
      height: 36,
      borderRadius: theme.borderRadius[4]
    },
    gameTitle: {
      paddingTop: 4,
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
      paddingHorizontal: theme.spacing[12],
    },
    gameBoxMultiple: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexGrow: 1,
      paddingHorizontal: theme.spacing[12],
    },
    gameImageMultiple: {
      width: 36,
      height: 36,
      borderRadius: theme.borderRadius[4],
      opacity: 0.8,
      marginStart: -15,
    },
    gameBoxMultipleExtra: {
      width: 36,
      height: 36,
      borderRadius: theme.borderRadius[4],
      // opacity: 0.5,
      marginStart: -15,
      backgroundColor: theme.colors.brandLight,
    },
    gameBoxMultipleExtraText: {
      paddingTop: 4,
      color: theme.colors.textPrimary,
    },
  });

  return styleSheet
}

const CoachesResult = ({data, resultOnPress}) => {
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

    const formatGames = (games: Array<{}>) => {
      switch(games.length) {
        case 0:
          return ""
          break;
        case 1:
          return games.map((g: any) => (
            <HStack style={styles.gameBox} dataSet={{ media: ids.gameBox}}>
              <Image alt='image' source={{uri: g.imageUrl}} style={styles.gameImage} dataSet={{ media: ids.gameImage}}/>
              <Text style={styles.gameTitle} dataSet={{ media: ids.gameTitle}}>{g.title}</Text>
            </HStack>
          ))
          break;
        case 2:
        case 3:
          return (
            <HStack style={styles.gameBoxMultiple} dataSet={{ media: ids.gameBoxMultiple}}>
              {
                games.map((g: any) => (
                  <Image alt='image' source={{uri: g.imageUrl}} style={styles.gameImageMultiple} dataSet={{ media: ids.gameImageMultiple}}/>
                ))
              }
            </HStack>
          )
          break;
        default:
          return (
            <HStack style={styles.gameBoxMultiple} dataSet={{ media: ids.gameBoxMultiple}}>
              {games?.slice(0,3).map((g: any) => (
                  <Image alt='image' source={{uri: g.imageUrl}} style={styles.gameImageMultiple} dataSet={{ media: ids.gameImageMultiple}}/>
                ))}
              <Center style={styles.gameBoxMultipleExtra} dataSet={{ media: ids.gameBoxMultipleExtra}}>
                <Text style={styles.gameBoxMultipleExtraText} dataSet={{ media: ids.gameBoxMultipleExtraText}}>{"+" + (games.length - 3)}</Text>
              </Center>
            </HStack>
          )
          break;
      }
    }



  return (
    <VStack  style={styles.container} dataSet={{ media: ids.container}} >
      {
        data?.slice(0,3).map((c: any, i: any) => {
          return isSmallScreen ? 
            (
              <Pressable variant="unstyled" p={0} onPress={resultOnPress} key={i} >
                <HStack   style={styles.itemContainer} dataSet={{ media: ids.itemContainer}} >
                  <HStack style={styles.item} dataSet={{ media: ids.item}}>
                    <Image alt="image" source={{uri: c.imageUrl}}  style={styles.image} dataSet={{ media: ids.image}} />
                    <Text style={styles.name} dataSet={{ media: ids.name}} >{c.name}</Text>
                  </HStack>
                  {
                    formatGames(c.games)
                  }
                </HStack>
              </Pressable>
            ) : 
            (
              <HStack justifyContent='space-between' flexGrow={1} w='100%'>
                <Pressable variant="unstyled" p={0} onPress={resultOnPress} key={i} >
                  <HStack   style={styles.itemContainer} dataSet={{ media: ids.itemContainer}} >
                    <HStack style={styles.item} dataSet={{ media: ids.item}}>
                      <Image alt="image" source={{uri: c.imageUrl}}  style={styles.image} dataSet={{ media: ids.image}} />
                      <Text style={styles.name} dataSet={{ media: ids.name}} >{c.name}</Text>
                    </HStack>
                    {
                      formatGames(c.games)
                    }
                  </HStack>
                </Pressable>
                <InfoTag data={c.tags} />
              </HStack>
            )
        })
      }
    </VStack>
  )
}


export default CoachesResult

