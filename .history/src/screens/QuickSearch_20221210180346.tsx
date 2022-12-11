import {  Text, Box, } from 'native-base';

import SearchHeader from './../components/SearchHeader';
import QuickSearchHeading from './../components/QuickSearchHeading';

const QuickSearch = () => {
  return (
    <Box>
      <SearchHeader/>
      <QuickSearchHeading primaryText='popular Games' buttonOnPress={() => { alert('')}} />
    </Box>
  )
}

export default QuickSearch
