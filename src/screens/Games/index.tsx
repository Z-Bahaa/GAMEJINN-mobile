import React  from 'react'
import { HStack, Text, useTheme, FlatList, Pressable, Image, useMediaQuery, Box, VStack, Modal } from 'native-base'

import makeStyles from './styles';

import SearchHeader from '../../components/SearchHeader';


import gamesList from '../../dummyData/Games'
import { ItemClick } from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';

const Games = ({navigation}: any) => {
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

    const GamesHeading = ({primaryText}: any) => (
      <HStack  style={styles.GamesHeadingContainer} dataSet={{ media: ids.GamesHeadingContainer}} >
        <Text style={styles.GamesHeadingPrimaryText} dataSet={{ media: ids.GamesHeadingPrimaryText}} >{primaryText}</Text>
      </HStack>
    )

    const GamesGrid = ({data, itemOnPress}: any) => (
        <Box style={styles.GamesGridContainer} dataSet={{ media: ids.GamesGridContainer}}>
          <Box style={styles.GamesGridGridContainer} dataSet={{ media: ids.GamesGridGridContainer}}>
            <FlatList 
              // scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={() => (<Text style={styles.GamesGridDescription} dataSet={{ media: ids.GamesGridDescription}} >
                Choose from players besting you at your favorite game and then hire them to teach you everything they know.
                </Text>)}
              data={data.slice(0,25)}
              numColumns={isSmallScreen ? 2 : 4}
              renderItem={({ item }: { item: any}) => (
                <Pressable onPress={itemOnPress}  style={styles.GamesGridItemContainer} dataSet={{ media: ids.GamesGridItemContainer}}>
                  <VStack style={styles.GamesGridItem} dataSet={{ media: ids.GamesGridItem}}>
                    <Box style={styles.GamesGridImageContainer} dataSet={{ media: ids.GamesGridImageContainer}}>
                      <Image alt='hi' source={{uri: item.imageUrl}} style={styles.GamesGridImage} dataSet={{ media: ids.GamesGridImage}}/>
                    </Box>
                    <Text style={styles.GamesGridName} dataSet={{ media: ids.GamesGridName}}>{item.title} </Text>
                  </VStack>
                </Pressable>
              )}
            />
          </Box>
        </Box>
      )




  return (
    <VStack style={styles.container} dataSet={{ media: ids.container}} >
      <Box style={styles.searchContainer} dataSet={{ media: ids.searchContainer}} >
      <SearchHeader navigation={navigation} />
      </Box>
      <GamesHeading primaryText='games'/>
      <GamesGrid data={gamesList} itemOnPress={() => navigation.navigate('Coaches')}/>
    </VStack>
  )
}


export default Games
