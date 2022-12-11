import {  Text, Box, } from 'native-base';

import SearchHeader from '../../components/SearchHeader';
import QuickSearchHeading from './QuickSearchHeading';
import QuickSearchGamesCarousel from './QuickSearchGamesCarousel'

import {gamesList} from '../../dummyData/QuickSearch'

const QuickSearch = () => {
  return (
    <Box>
      <SearchHeader/>
      <QuickSearchHeading primaryText='popular Games' buttonOnPress={() => { alert('the view-all-games button has been pressed')}} />
      <QuickSearchGamesCarousel gamesData={gamesList} gameOnPress={() => { alert('a game has been clicked on')}} />
      <QuickSearchHeading primaryText='available coaches' buttonOnPress={() => { alert('the view-all-games button has been pressed')}} />
    </Box>
  )
}

export default QuickSearch
