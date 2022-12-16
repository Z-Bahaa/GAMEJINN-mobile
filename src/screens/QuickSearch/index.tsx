import {  Text, Box, useTheme, } from 'native-base';
import StyleSheet from 'react-native-media-query';
import SearchHeader from '../../components/SearchHeader';
import QuickSearchHeading from './QuickSearchHeading';
import QuickSearchGamesCarousel from './QuickSearchGamesCarousel'
import QuickSearchCoachesList from './QuickSearchCoachesList'

import {gamesList, coachesList} from '../../dummyData/QuickSearch'

const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
  });

  return styleSheet
}



const QuickSearch = () => {

  const {ids, styles} = makeStyles();

  return (
    <Box w='100%' style={styles.container} dataSet={{ media: ids.container}}>
      <SearchHeader/>
      <QuickSearchHeading primaryText='popular Games' buttonOnPress={() => { alert('the view-all-games button has been pressed')}} />
      <QuickSearchGamesCarousel data={gamesList} gameOnPress={() => { alert('a game has been clicked on')}} />
      <QuickSearchHeading primaryText='available coaches' buttonOnPress={() => { alert('the view-all-coaches button has been pressed')}} />
      <QuickSearchCoachesList data={coachesList} coachOnPress={() => { alert('a coach has been clicked on')}} />
    </Box>
  )
}

export default QuickSearch
