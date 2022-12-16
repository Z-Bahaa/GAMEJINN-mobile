import React, {useState, forwardRef, useImperativeHandle} from 'react'
import { HStack, Text, useTheme, Icon, Input, Center, useMediaQuery, Box, VStack, Modal } from 'native-base'
import StyleSheet from 'react-native-media-query';

import SearchHeader from '../../components/SearchHeader';
import CoachesHeading from './CoachesHeading'
import CoachesGrid from './CoachesGrid'
import FiltersModal from './FiltersModal'


import { coachesList, filterGames, filterServiceTypes} from '../../dummyData/Coaches'


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      height: 'auto',
    },
    searchContainer: {
      width: '100%',
      flexGrow: 1,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
    },
  });

  return styleSheet
}

const Coaches = () => {
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

    const [filtersVisibility, setFiltersVisibility] = useState(false);
    const [selectedGame, setSelectedGame] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState(true);

   



  return (
    <VStack style={styles.container} dataSet={{ media: ids.container}} >
      <Box style={styles.searchContainer} dataSet={{ media: ids.searchContainer}} >
        <SearchHeader />
      </Box>
      <CoachesHeading primaryText='coaches' buttonOnPress={() => setFiltersVisibility(true)} />
        <CoachesGrid data={coachesList} itemOnPress={() => alert("coach card")}/>
      {isSmallScreen ? (filtersVisibility ? <FiltersModal 
        setSelectedGame={(val: any) => setSelectedGame(val)} 
        gamesData={filterGames}
        setSelectedServiceType={(val: any) => setSelectedServiceType(val)}
        serviceTypesData={filterServiceTypes}
        /> : "") : ""}
    </VStack>
  )
}


export default Coaches
