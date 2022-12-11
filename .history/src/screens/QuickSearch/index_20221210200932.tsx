import {  Text, Box, } from 'native-base';

import SearchHeader from '../../components/SearchHeader';
import QuickSearchHeading from './QuickSearchHeading';
import QuickSearchGamesCarousel from './QuickSearchGamesCarousel'
import QuickSearchCoachesList from './Q'

import {gamesList, coachesList} from '../../dummyData/QuickSearch'

const QuickSearch = () => {
  return (
    <Box>
      <SearchHeader/>
      <QuickSearchHeading primaryText='popular Games' buttonOnPress={() => { alert('the view-all-games button has been pressed')}} />
      <QuickSearchGamesCarousel data={gamesList} gameOnPress={() => { alert('a game has been clicked on')}} />
      <QuickSearchHeading primaryText='available coaches' buttonOnPress={() => { alert('the view-all-coaches button has been pressed')}} />
      <QuickSearchCoachesList data={coachesList} coachOnPress={() => { alert('a coach has been clicked on')}} />
    </Box>
  )
}

export default QuickSearch
