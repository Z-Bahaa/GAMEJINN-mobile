import React, {useState, forwardRef, useImperativeHandle} from 'react'
import { HStack, Text, useTheme, Icon, Input, Center, useMediaQuery, Box, VStack, Modal } from 'native-base'
import StyleSheet from 'react-native-media-query';

import SearchHeader from '../../components/SearchHeader';
import GamesHeading from './GamesHeading'
import GamesGrid from './GamesGrid'


import gamesList from '../../dummyData/Games'


const makeStyles = () => {
  const theme = useTheme();


  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: theme.colors.brandPrimary,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
      },
    },
    searchContainer: {
      width: '100%',
      flexGrow: 1,
    },
    description: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
    },
  });

  return styleSheet
}

const Games = () => {
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

   



  return (
    <VStack style={styles.container} dataSet={{ media: ids.container}} >
      <Box style={styles.searchContainer} dataSet={{ media: ids.searchContainer}} >
        <SearchHeader />
      </Box>
      <GamesHeading primaryText='games'/>
      <GamesGrid data={gamesList} itemOnPress={() => alert("game card")}/>
    </VStack>
  )
}


export default Games
