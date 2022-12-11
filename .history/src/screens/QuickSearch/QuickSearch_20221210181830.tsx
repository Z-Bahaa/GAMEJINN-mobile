import {  Text, Box, } from 'native-base';

import SearchHeader from '../../components/SearchHeader';
import QuickSearchHeading from './QuickSearchHeading';
import QuickSearchGamesCarousel from './QuickSearchGamesCarousel'

const QuickSearch = () => {
  return (
    <Box>
      <SearchHeader/>
      <QuickSearchHeading primaryText='popular Games' buttonOnPress={() => { alert('the view all button has been pressed')}} />
      <QuickSearchGamesCarousel
    </Box>
  )
}

export default QuickSearch
