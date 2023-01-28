import { HStack, useMediaQuery,Image, useTheme, Icon, Text, VStack, Button} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {MaterialCommunityIcons,  } from '@expo/vector-icons'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    
    achievementsContainer: {
      marginTop: theme.spacing[16],
    },
    gameAchievementsContainer: {
      marginTop: theme.spacing[12],
    },
    gameAchievementsHeading: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
      marginBottom: theme.spacing[8],

    },
    crownAchievementContainer: {
      alignItems: 'center',
    },
    crownAchievementIcon: {
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing[12],
    },
    crownAchievementText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
      marginStart: theme.spacing[8]
    },
    trophyAchievementContainer: {
      alignItems: 'flex-end',
    },
    trophyAchievementIcon: {
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing[12],
    },
    trophyAchievementTextsContainer: {
      marginStart: theme.spacing[8]
    },
    trophyAchievementMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    trophyAchievementSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    achievementsButton: {
      alignSelf: 'flex-start',
      marginEnd: theme.spacing[8],
      marginTop: theme.spacing[12],
      // backgroundColor: theme.colors.textPrimary,
    },
    achievementsButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
    },
  });

  return styleSheet
}

const Achievements = () => {
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

    const crownIcon = (<Icon as={MaterialCommunityIcons  } name='crown' size='24px' color={colors.textPrimary} 
   style={styles.crownAchievementIcon} dataSet={{ media: ids.crownAchievementIcon}} />)

   const trophyIcon = (<Icon as={MaterialCommunityIcons  } name='trophy-variant' size='34px' color={colors.textPrimary} 
   style={styles.trophyAchievementIcon} dataSet={{ media: ids.trophyAchievementIcon}} />)


  return (<VStack style={styles.achievementsContainer} dataSet={{ media: ids.achievementsContainer}}>
    <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >achievements</Text>

    <VStack style={styles.gameAchievementsContainer} dataSet={{ media: ids.gameAchievementsContainer}}>
      <Text style={styles.gameAchievementsHeading} dataSet={{ media: ids.gameAchievementsHeading}} >Super Smash bros. Ultimate</Text>

      <HStack  style={styles.crownAchievementContainer} dataSet={{ media: ids.crownAchievementContainer}} >
        {crownIcon}
        <Text style={styles.crownAchievementText} dataSet={{ media: ids.crownAchievementText}}>2x PGR Top 10 Ranked Worldwide</Text>
      </HStack>

      <HStack  style={styles.crownAchievementContainer} dataSet={{ media: ids.crownAchievementContainer}} >
        {crownIcon}
        <Text style={styles.crownAchievementText} dataSet={{ media: ids.crownAchievementText}}>2x PGR Top 10 Ranked Worldwide</Text>
      </HStack>

      <HStack  style={styles.trophyAchievementContainer} dataSet={{ media: ids.trophyAchievementContainer}} >
        {trophyIcon}
          <VStack style={styles.trophyAchievementTextsContainer} dataSet={{ media: ids.trophyAchievementTextsContainer}} >
            <Text style={styles.trophyAchievementMainText} dataSet={{ media: ids.trophyAchievementMainText}}>Thunder Smash 1</Text>
            <Text style={styles.trophyAchievementSubtext} dataSet={{ media: ids.trophyAchievementSubtext}}>1st place - 2019</Text>
          </VStack>
      </HStack>

    </VStack>
    
    <VStack style={styles.gameAchievementsContainer} dataSet={{ media: ids.gameAchievementsContainer}}>
      <Text style={styles.gameAchievementsHeading} dataSet={{ media: ids.gameAchievementsHeading}} >achievements</Text>

      <HStack  style={styles.crownAchievementContainer} dataSet={{ media: ids.crownAchievementContainer}} >
        {crownIcon}
        <Text style={styles.crownAchievementText} dataSet={{ media: ids.crownAchievementText}}>5x PGR Worldwide Ranking Top 5</Text>
      </HStack>

      <HStack  style={styles.trophyAchievementContainer} dataSet={{ media: ids.trophyAchievementContainer}} >
        {trophyIcon}
          <VStack style={styles.trophyAchievementTextsContainer} dataSet={{ media: ids.trophyAchievementTextsContainer}} >
            <Text style={styles.trophyAchievementMainText} dataSet={{ media: ids.trophyAchievementMainText}}>Civil War</Text>
            <Text style={styles.trophyAchievementSubtext} dataSet={{ media: ids.trophyAchievementSubtext}}>2nd place - 2017</Text>
          </VStack>
      </HStack>

    </VStack>

    <Button variant="unstyled" p={0} style={styles.achievementsButton} dataSet={{ media: ids.achievementsButton}} >
        <Text style={styles.achievementsButtonText} dataSet={{ media: ids.achievementsButtonText}} >view all</Text>
    </Button>

  </VStack>
  )
}


export default Achievements
// 