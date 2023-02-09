import {Box, HStack, Text, Button, Icon, ScrollView, Pressable, VStack, Image, useTheme, useMediaQuery} from 'native-base';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import makeStyles from './styles';

import SearchHeader from '../../components/SearchHeader';

import {gamesList, coachesList} from '../../dummyData/QuickSearch'




const Discover = ({navigation}: any) => {
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

  const QuickSearchHeading = ({primaryText, buttonOnPress}: any) => (<HStack  style={styles.QuickSearchHeadingContainer} dataSet={{ media: ids.QuickSearchHeadingContainer}} >
      <Text style={styles.QuickSearchHeadingPrimaryText} dataSet={{ media: ids.QuickSearchHeadingPrimaryText}} >{primaryText}</Text>
      <Button variant="unstyled" p={0} style={styles.QuickSearchHeadingButton} dataSet={{ media: ids.QuickSearchHeadingButton}} onPress={buttonOnPress}>
        <HStack>
          <Text style={styles.QuickSearchHeadingButtonText} dataSet={{ media: ids.QuickSearchHeadingButtonText}} >view all</Text>
          {/* <Icon as={MaterialIcons} name="arrow-forward-ios" size='14px' color={colors.textSecondary}  ml={.5} mt={isSmallScreen ? 0 : 1}  /> */}
        </HStack>
      </Button>
    </HStack>
  )

  const QuickSearchGamesCarousel = ({data, gameOnPress}: any) => (<Box  style={styles.QuickSearchGamesCarouselContainer} dataSet={{ media: ids.QuickSearchGamesCarouselContainer}} >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}

      >
        {data?.slice(0,6).map((g: any, i: number) => (
          <Pressable variant='unstyled' padding={0}  key={i} onPress={gameOnPress}>
            <VStack  style={styles.QuickSearchGamesCarouselItem} dataSet={{ media: ids.QuickSearchGamesCarouselItem}}>
              <Image alt="game image" source= {{uri : g.imageUrl}}    style={styles.QuickSearchGamesCarouselImage} dataSet={{ media: ids.QuickSearchGamesCarouselImage}}   />
              <Text   style={styles.QuickSearchGamesCarouselText} dataSet={{ media: ids.QuickSearchGamesCarouselText}} >{g.title}</Text>
            </VStack>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  )

  const QuickSearchCoachesList = ({data, coachOnPress}: any) => (<Box  style={styles.QuickSearchCoachesListContainer} dataSet={{ media: ids.QuickSearchCoachesListContainer}} >
        {data.map((c: any, i: number) => ( 
          <Box  style={styles.QuickSearchCoachesListContainer2} dataSet={{ media: ids.QuickSearchCoachesListContainer2}}  key={i}>
          <Button variant='unstyled' onPress={coachOnPress} style={styles.QuickSearchCoachesListItem} dataSet={{ media: ids.QuickSearchCoachesListItem}}>
            <HStack  /* style={styles.item} dataSet={{ media: ids.item}} */ flexGrow={1}>
              <Image alt="game image" source= {{uri : c.imageUrl}}    style={styles.QuickSearchCoachesListImage} dataSet={{ media: ids.QuickSearchCoachesListImage}}   />
              <VStack justifyContent='center' >
                <Text   style={styles.QuickSearchCoachesListHeading} dataSet={{ media: ids.QuickSearchCoachesListHeading}} >{c.name}</Text>
                <HStack>
                  <Text   style={styles.QuickSearchCoachesListSubtext1} dataSet={{ media: ids.QuickSearchCoachesListSubtext1}} >available </Text>
                  <Text   style={styles.QuickSearchCoachesListSubtext2} dataSet={{ media: ids.QuickSearchCoachesListSubtext2}} >{"  " + c.availableAt}</Text>
                </HStack>
              </VStack>
            </HStack>
          </Button>
    `     </Box>
        ))}
    </Box>
  )


  return (
    <Box w='100%' style={styles.container} dataSet={{ media: ids.container}}>
      <SearchHeader navigation={navigation} />
      <QuickSearchHeading primaryText='popular Games' buttonOnPress={() => navigation.navigate('Games')} />
      <QuickSearchGamesCarousel data={gamesList} gameOnPress={() => navigation.navigate('Coaches')} />
      <QuickSearchHeading primaryText='available coaches' buttonOnPress={() => navigation.navigate('Coaches')} />
      <QuickSearchCoachesList data={coachesList} coachOnPress={() => navigation.navigate('CoachProfile')} />
    </Box>
  )
}

export default Discover