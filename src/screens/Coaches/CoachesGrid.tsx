import { FlatList, Text, useTheme, Box, Pressable, Center, useMediaQuery, VStack, Image, ScrollView } from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: theme.spacing[32]*8,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    itemContainer: {
      flexGrow: 1,
      alignItems: 'center',
      // backgroundColor: theme.colors.textPrimary,
      height: 316,
      width: 180,
      marginEnd: theme.spacing[12],
    },
    item: {
      flexGrow: 1,
      height: 316,
      width: 180,
    },
    imageContainer: {
      flexGrow: 1,
      width: '100%',
    },
    image: {
      flexGrow: 1,
      width: '100%',
      borderRadius: theme.borderRadius[8],
    },
    floatingTextBox: {
      backgroundColor: theme.colors.white,
      position: 'absolute',
      bottom: theme.spacing[16],
      start: theme.spacing[8],
      borderRadius: theme.borderRadius[8],
    },
    floatingText: {
      fontSize: theme.fontSize.xxs,
      paddingVertical: theme.spacing[8]/2,
      paddingHorizontal: theme.spacing[8],
      paddingBottom: 1,
    },
    name: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      marginTop: theme.spacing[12]
    },
    gameText: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
      paddingBottom: theme.spacing[16]
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
      paddingBottom: theme.spacing[16],
    },
  });

  return styleSheet
}

const CoachesGrid = ({data, itemOnPress}) => {

  const {styles, ids} = makeStyles()

  return (
    <Box style={styles.container} dataSet={{ media: ids.container}}>
      <FlatList 
        // scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (<Text style={styles.description} dataSet={{ media: ids.description}} >
          Choose from players besting you at your favorite game and then hire them to teach you everything they know.
          </Text>)}
        data={data}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable onPress={itemOnPress}  style={styles.itemContainer} dataSet={{ media: ids.itemContainer}}>
            <VStack style={styles.item} dataSet={{ media: ids.item}}>
              <Box style={styles.imageContainer} dataSet={{ media: ids.imageContainer}}>
                <Image alt='hi' source={{uri: item.imageUrl}} style={styles.image} dataSet={{ media: ids.image}}/>
                <Center style={styles.floatingTextBox} dataSet={{ media: ids.floatingTextBox}}>
                  <Text style={styles.floatingText} dataSet={{ media: ids.floatingText}}>{'starting at ' + item.startingAt + ' EGP'} </Text>
                </Center>
              </Box>
              <Text style={styles.name} dataSet={{ media: ids.name}}>{item.name} </Text>
              {item.games?.slice(0,1).map((g: any, i: number) => (<Text style={styles.gameText} dataSet={{ media: ids.gameText}} key={i}>{g.title + ' coach'} </Text>))}
            </VStack>
          </Pressable>
        )}
      />
    </Box>
  )
}

export default CoachesGrid

