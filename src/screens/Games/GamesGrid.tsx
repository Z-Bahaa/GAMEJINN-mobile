import { FlatList, Text, useTheme, Box, Pressable, Center, useMediaQuery, VStack, Image, ScrollView } from 'native-base'
import StyleSheet from 'react-native-media-query';


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      // flexGrow: 1,
      alignItems: 'center',
      paddingBottom: theme.spacing[32]*8,
      '@media (min-width: 800px)': {
        paddingHorizontal: theme.spacing[12],
        paddingBottom: theme.spacing[32],
        // alignItems: 'flex-start',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    gridContainer: {
      width: '100%',
      '@media (min-width: 800px)': {
        // alignItems: 'flex-start',
      },
      // backgroundColor: theme.colors.textPrimary,
    },
    itemContainer: {
      flexGrow: 1,
      alignItems: 'flex-start',
      // backgroundColor: theme.colors.textPrimary,
      height: 276,
      width: 180,
      marginEnd: theme.spacing[12],
      marginBottom: theme.spacing[16],
      '@media (min-width: 800px)': {
        // marginHorizontal: theme.spacing[8]/2,
        height: 286,
      },
      '@media (min-width: 1800px)': {
        // marginHorizontal: theme.spacing[8]/2,
        height: 440,
      },
    },
    item: {
      flexGrow: 1,
      height: 276,
      width: 180,
      '@media (min-width: 800px)': {
        marginEnd: theme.spacing[32],
        height: "100%",
        width: '90%',
      },
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
    name: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      marginTop: theme.spacing[12]
    },
    gameText: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
      paddingBottom: theme.spacing[16],
      alignSelf: 'flex-start',
      '@media (min-width: 800px)': {
        // fontSize: theme.fontSize.sm,
        maxWidth: 500,
      },
    },
  });

  return styleSheet
}

const GamesGrid = ({data, itemOnPress}) => {
  const [isSmallScreen] = useMediaQuery({
    maxWidth: 480
  });

  const {styles, ids} = makeStyles()

  return (
    <Box style={styles.container} dataSet={{ media: ids.container}}>
      <Box style={styles.gridContainer} dataSet={{ media: ids.gridContainer}}>
        <FlatList 
          // scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (<Text style={styles.description} dataSet={{ media: ids.description}} >
            Choose from players besting you at your favorite game and then hire them to teach you everything they know.
            </Text>)}
          data={data.slice(0,25)}
          numColumns={isSmallScreen ? 2 : 5}
          renderItem={({ item }) => (
            <Pressable onPress={itemOnPress}  style={styles.itemContainer} dataSet={{ media: ids.itemContainer}}>
              <VStack style={styles.item} dataSet={{ media: ids.item}}>
                <Box style={styles.imageContainer} dataSet={{ media: ids.imageContainer}}>
                  <Image alt='hi' source={{uri: item.imageUrl}} style={styles.image} dataSet={{ media: ids.image}}/>
                </Box>
                <Text style={styles.name} dataSet={{ media: ids.name}}>{item.title} </Text>
              </VStack>
            </Pressable>
          )}
        />
      </Box>
    </Box>
  )
}

export default GamesGrid

