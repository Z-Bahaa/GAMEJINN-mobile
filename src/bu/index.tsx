import { useState, useEffect} from 'react'
import { VStack,ZStack, Text, useTheme, HStack, Center,  useMediaQuery, Icon, Button, Box, Image, Divider, Input} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

import {profile} from '../../dummyData/CoachProfile'

import CustomSearch from './CustomSearch'
import SearchHeader from '../../components/SearchHeader'

const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-start',
      // justifyContent: 'space-between',
      paddingBottom: theme.spacing[8]*50,
      // paddingStart: theme.spacing[16],
      // paddingEnd: theme.spacing[12],
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
      },
      '@media (max-width: 800px)': {
        height: '100%',
      },
    },
    banner: {
      width: windowWidth ,
      height: 300,
    },
    bannerFade: {
      width: windowWidth ,
      height: 300,
      // backgroundColor: theme.colors.brandPrimary,
    },
    main: {
      zIndex: 1000,
      paddingStart: theme.spacing[16],
      paddingEnd: theme.spacing[12],
      paddingTop: theme.spacing[8],
      flex: 1,
      justifyContent: "flex-start",
      alignItems: 'flex-start',
      width: '100%',
    },
    coachInfoContainer: {
      // backgroundColor: theme.colors.white,
      width: '100%',
      marginBottom: theme.spacing[8],
    },
    coachInfoCard: {
      marginTop: theme.spacing[24]*4,
      backgroundColor: theme.colors.brandSecondary,
      padding: theme.spacing[16],
      paddingEnd: theme.spacing[16],
      borderRadius: theme.borderRadius[8],
      width: '100%',
    },
    coachInfoImage: {
      borderRadius: 10000,
      width: 60,
      height: 60,
      marginEnd: theme.spacing[16],
    },
    coachInfoTextsContainer: {
      // backgroundColor: theme.colors.white,
      justifyContent: 'center',
      marginTop: theme.spacing[12],
    },
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    coachInfoSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    primaryButton: {
      marginBottom: 0,
      width: '100%',
      backgroundColor: theme.colors.textSecondary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius[8],
      justifySelf: 'flex-end',
      '@media (min-width: 800px)': {
        marginBottom: theme.spacing[16],
      },
    },
    primaryButtonText: {
      marginTop: theme.spacing[12]/2,
      margin: theme.spacing[12]/6,
      width: '100%',
      fontSize: theme.fontSize.regular,
      '@media (min-width: 800px)': {
        fontSize: theme.fontSize.md,
      },
    },
    aboutHeader: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    aboutBody: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textPrimary,
      alignSelf: 'flex-start'
    },
    aboutHeaderText: {
      fontSize: theme.fontSize.md,
      color: theme.colors.textSecondary,
    },
    aboutHeaderSocialsContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    aboutHeaderSocialsIconBox: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[4],
      padding: theme.spacing[12]/2,
      marginStart: theme.spacing[12]/2,
      marginBottom: theme.spacing[12],
    },
    aboutHeaderSocialsIcon: {
    },
    infoTagsContainer: {
      marginTop: theme.spacing[8],
    },
    infoTag: {
      backgroundColor: theme.colors.brandSecondary,
      padding: theme.spacing[12]/3,
      borderRadius: theme.borderRadius[4],
      // paddingTop: theme.spacing[8],
      paddingVertical: 0,
      marginEnd: theme.spacing[12],
      paddingEnd: theme.spacing[8],
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'center',
    },
    infoTagIcon: {
      opacity: 0.6,
      marginTop: 5,
    },
    infoTagSubtext: {
      fontSize: theme.fontSize.xxs,
      color: theme.colors.textGrey,
      marginStart: theme.spacing[12]/3,
      marginTop: 1,
    },
    infoTagMainText: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textPrimary,
      marginTop: 3,
    },
    splitInfoContainer: {
      marginTop: theme.spacing[16],
      justifyContent: 'space-between',
      width: '100%',
    },
    splitInfoMajorSection: {
      maxWidth: '75%',
    },
    splitInfoMinorSection: {
      width: '30%',
    },
    gameTag: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8]*2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: theme.spacing[12]/4,
      paddingHorizontal: theme.spacing[8],
      marginBottom: theme.spacing[8],
      marginTop: theme.spacing[8]/2,
      alignSelf: 'flex-start'
    },
    gameTagImage: {
      width: 20,
      height: 20,
      borderRadius: 10000,
    },
    gameTagTitle: {
      fontSize: theme.fontSize.xxs,
      color: theme.colors.textPrimary,
      paddingStart: theme.spacing[8],
      paddingEnd: theme.spacing[8]/2,
    },
    langSectionSubtext: {
      padding: theme.spacing[12]/4,
      paddingStart: 0,
      color: theme.colors.textGrey,
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
    sessionsSectionContainer: {
      width: '100%',
      marginTop: theme.spacing[16],
    },
    sessionsSectionGameHeader: {
      marginTop: theme.spacing[12],
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: theme.borderRadius[8],
      padding: theme.spacing[12],
      paddingTop: theme.spacing[12]/2,
    },
    sessionsSectionGameHeaderGradient: {
      marginTop: theme.spacing[12],
      borderRadius: theme.borderRadius[8],
    },
    sessionsSectionGameHeaderSubContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    sessionsSectionGameHeaderImage: {
      width: 50,
      height: 50,
      borderRadius: 10000,
      marginEnd: theme.spacing[8],
    },
    sessionsSectionGameHeaderHeading: {
      marginTop: theme.spacing[12]/2,
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.sm,
    },
    sessionsSectionGameHeaderTag: {
      backgroundColor: theme.colors.darkGreyHalf,
      paddingTop: theme.spacing[12]/3,
      paddingHorizontal: theme.spacing[12]/2,
      color: theme.colors.textPrimary,
      borderRadius: theme.borderRadius[4],
      fontSize: theme.fontSize.xs,
    },
    sessionsSectionServiceTypeContainer: {
      marginTop: theme.spacing[16],
    },
    sessionsSectionServiceTypeHeading: {
      fontSize: theme.fontSize.md,
      color: theme.colors.yellow,
    },
    sessionsSectionserviceTypeOffersContainer: {
      marginTop: theme.spacing[12],
      width: '100%',
    },
    sessionsSectionserviceTypeOfferContainer: {
      padding: theme.spacing[12],
      width: '100%',
      // backgroundColor: theme.colors.darkGreyHalf,
    },
    sessionsSectionserviceTypeOfferContainerActive: {      
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8],

    },
    sessionsSectionServiceTypeOfferHead: {
      width: '100%',
      alignItems: 'flex-start',
      // backgroundColor: theme.colors.darkGreyHalf,
      justifyContent: 'space-between',
    },
    sessionsSectionServiceTypeOfferHeadTextsContainer: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',

    },
    sessionsSectionServiceTypeOfferHeadHeading: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md -1,
      marginTop: theme.spacing[8],
    },
    sessionsSectionServiceTypeOfferHeadSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
    },
    sessionsSectionServiceTypeOfferHeadPriceContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginEnd: -6,
    },

    sessionsSectionServiceTypeOfferHeadPrice: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md -1,
      marginEnd: 4,
    },
    sessionsSectionServiceTypeOfferHeadToggleButton: {
      padding: -1,
      margin: -theme.spacing[12],
      marginBottom: -2,
      
    },
    sessionsSectionServiceTypeOfferBody: {
      
    },
    sessionsSectionServiceTypeOfferBodyDescription: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.xs,
    },
    sessionsSectionServiceTypeOfferBodyPriceSection: {
      width: '100%',
      alignItems: 'flex-end',
      // backgroundColor: theme.colors.darkGreyHalf,
      marginBottom: theme.spacing[16],
      justifyContent: 'space-between',
    },
    sessionsSectionServiceTypeOfferBodyPriceSectionButton: {
      color: theme.colors.textPrimary,
      marginTop: theme.spacing[8],
    },
    sessionsSectionServiceTypeOfferBodyPriceSectionButtonsContainer: {
      backgroundColor: theme.colors.brandPrimaryHalf,
      borderRadius: theme.borderRadius[8],
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    sessionsSectionServiceTypeOfferBodyPrice: {
      marginBottom: theme.spacing[12]/4,
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.lg,
    },
    sessionsSectionServiceTypeOfferBodyTotalPrice: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.lg,
      
    },

  });

  return styleSheet
}

const CoachProfile = () => {
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


    const [activeProduct, setActiveProduct] = useState(0) 
    const [activeProductAmount, setActiveProductAmount] = useState(1) 

    useEffect(() => {
      setActiveProductAmount(1)
    },[activeProduct])

    const toggleActive = (id: number) => {
      (id === activeProduct) ? setActiveProduct(0) : setActiveProduct(id)
    }

    const decrement = () => {
      if (activeProductAmount !== 1) {
        setActiveProductAmount(activeProductAmount -1)
      }
    }

   const crownIcon = (<Icon as={MaterialCommunityIcons  } name='crown' size='24px' color={colors.textPrimary} 
   style={styles.crownAchievementIcon} dataSet={{ media: ids.crownAchievementIcon}} />)

   const trophyIcon = (<Icon as={MaterialCommunityIcons  } name='trophy-variant' size='34px' color={colors.textPrimary} 
   style={styles.trophyAchievementIcon} dataSet={{ media: ids.trophyAchievementIcon}} />)




  return (
    <VStack  style={styles.container} dataSet={{ media: ids.container}} >
        <ZStack>
          <Image alt='hello' source={{uri: profile.backgroundImage.url}}  style={styles.banner} dataSet={{ media: ids.banner}} />
          <LinearGradient colors={[colors.brandPrimaryHalf,colors.brandPrimary]} style={styles.bannerFade} dataSet={{ media: ids.bannerFade}} />
        </ZStack>
        <Center style={styles.main} dataSet={{ media: ids.main}} >
          <CustomSearch />

          <Box style={styles.coachInfoCard} dataSet={{ media: ids.coachInfoCard}}>
            <Box style={styles.coachInfoContainer} dataSet={{ media: ids.coachInfoContainer}}>
              <HStack >
                  <Image alt='coach image' style={styles.coachInfoImage} dataSet={{ media: ids.coachInfoImage}} 
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'}}
                  />

                <VStack style={styles.coachInfoTextsContainer} dataSet={{ media: ids.coachInfoTextsContainer}} >
                  <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >islam mohareb</Text>
                  <Text style={styles.coachInfoSubtext} dataSet={{ media: ids.coachInfoSubtext}} >Ultimate Professional & Coach</Text>
                </VStack>
              </HStack>

            </Box>

            <HStack style={styles.aboutHeader} dataSet={{ media: ids.aboutHeader}}>
              <Text style={styles.aboutHeaderText} dataSet={{ media: ids.aboutHeaderText}}>
                about
              </Text>
              <HStack style={styles.aboutHeaderSocialsContainer} dataSet={{ media: ids.aboutHeaderSocialsContainer}}>
                {['twitter','youtube','twitter','youtube'].map( (v, i) => 
                (<Center style={styles.aboutHeaderSocialsIconBox} dataSet={{ media: ids.aboutHeaderSocialsIconBox}} key={i}>
                  <Icon as={AntDesign } name={v} size='21px' color={colors.textPrimary} 
                  style={styles.aboutHeaderSocialsIcon} dataSet={{ media: ids.aboutHeaderSocialsIcon}} 
                  />
                </Center>))
                }
              </HStack>
            </HStack>

            <Text style={styles.aboutBody} dataSet={{ media: ids.aboutBody}}>
              Every lesson will be recorded, just ask me for the VOD and I will upload it & send it right 
              away! There is a twitch sub discount and maybe something in the FAQ! I have been ...
            </Text>

            <Divider backgroundColor={colors.grey} opacity={0.6} mt={4} mb={4} /> 

            <Button style={styles.primaryButton} dataSet={{ media: ids.primaryButton}}>
              <Text style={styles.primaryButtonText} dataSet={{ media: ids.primaryButtonText}}>book a session</Text>
            </Button>
          </Box>

          <HStack style={styles.infoTagsContainer} dataSet={{ media: ids.infoTagsContainer}}>

            <HStack style={styles.infoTag} dataSet={{ media: ids.infoTag}}>
              <Icon as={AntDesign } name='calendar' size='12px' color={colors.textPrimary} 
                style={styles.infoTagIcon} dataSet={{ media: ids.infoTagIcon}} />
              <Text style={styles.infoTagSubtext} dataSet={{ media: ids.infoTagSubtext}}>
                {'available '}
              </Text>
              <Text style={styles.infoTagMainText} dataSet={{ media: ids.infoTagMainText}}>
                2:30 today
              </Text>
            </HStack>

            <HStack style={styles.infoTag} dataSet={{ media: ids.infoTag}}>
              <Icon as={MaterialIcons } name='attach-money' size='14px' color={colors.textPrimary} 
                style={styles.infoTagIcon} dataSet={{ media: ids.infoTagIcon}} />
              <Text style={styles.infoTagSubtext} dataSet={{ media: ids.infoTagSubtext}}>
                {'sessions starting at '}
              </Text>
              <Text style={styles.infoTagMainText} dataSet={{ media: ids.infoTagMainText}}>
                360EGP
              </Text>
            </HStack>

          </HStack>

          <HStack style={styles.splitInfoContainer} dataSet={{ media: ids.splitInfoContainer}} >

            <VStack style={styles.splitInfoMajorSection} dataSet={{ media: ids.splitInfoMajorSection}}>
              <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >offered games</Text>

              <HStack style={styles.gameTag} dataSet={{ media: ids.gameTag}}>
                <Image alt='coach image' style={styles.gameTagImage} dataSet={{ media: ids.gameTagImage}} 
                    source={{uri: 'https://www.citypng.com/public/uploads/preview/-41603132788rzosdsitdt.png'}}
                    />
                <Text style={styles.gameTagTitle} dataSet={{ media: ids.gameTagTitle}}>
                Super Smash bros. Ultimate Ultimate
                </Text>
              </HStack>

              <HStack style={styles.gameTag} dataSet={{ media: ids.gameTag}}>
                <Image alt='coach image' style={styles.gameTagImage} dataSet={{ media: ids.gameTagImage}} 
                    source={{uri: 'https://preview.redd.it/rqassez3kc591.png?width=841&format=png&auto=webp&s=a2035dca162b77fb88961464e73a1c57efe95cca'}}
                    />
                <Text style={styles.gameTagTitle} dataSet={{ media: ids.gameTagTitle}}>
                Super Smash bros. Ultimate
                </Text>
              </HStack>

            </VStack>

            <VStack style={styles.splitInfoMinorSection} dataSet={{ media: ids.splitInfoMinorSection}}>
              <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >languages</Text>
              <Text style={styles.langSectionSubtext} dataSet={{ media: ids.langSectionSubtext}} >english</Text>
              <Text style={styles.langSectionSubtext} dataSet={{ media: ids.langSectionSubtext}} >arabic</Text>
            </VStack>
          </HStack>

          <VStack style={styles.achievementsContainer} dataSet={{ media: ids.achievementsContainer}}>
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

          <VStack style={styles.sessionsSectionContainer} dataSet={{ media: ids.sessionsSectionContainer}} >
          <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >sessions</Text>

          <LinearGradient colors={[colors.brandSecondary,colors.brandPrimary]} style={styles.sessionsSectionGameHeaderGradient} dataSet={{ media: ids.sessionsSectionGameHeaderGradient}} >
            <HStack  style={styles.sessionsSectionGameHeader} dataSet={{ media: ids.sessionsSectionGameHeader}} >
              <HStack  style={styles.sessionsSectionGameHeaderSubContainer} dataSet={{ media: ids.sessionsSectionGameHeaderSubContainer}} >
                <Image alt='coach image' style={styles.sessionsSectionGameHeaderImage} dataSet={{ media: ids.sessionsSectionGameHeaderImage}} 
                source={{uri: 'https://i.pinimg.com/236x/2c/67/80/2c678002e587299b3511cec86382daf1.jpg'}}
                />
                <Text style={styles.sessionsSectionGameHeaderHeading} dataSet={{ media: ids.sessionsSectionGameHeaderHeading}} >Super Smash Bros. Ultimate</Text>
              </HStack>
              <Text style={styles.sessionsSectionGameHeaderTag} dataSet={{ media: ids.sessionsSectionGameHeaderTag}} >5 lessons</Text>
            </HStack>
          </LinearGradient>

          
          {
              profile.serviceTypes.map((s) => (
                <VStack key={s.id} style={styles.sessionsSectionServiceTypeContainer} dataSet={{ media: ids.sessionsSectionServiceTypeContainer}} >
                  <Text style={styles.sessionsSectionServiceTypeHeading} dataSet={{ media: ids.sessionsSectionServiceTypeHeading}} >{s.title}</Text>
                  <VStack  style={styles.sessionsSectionserviceTypeOffersContainer} dataSet={{ media: ids.sessionsSectionserviceTypeOffersContainer}}>
                  {
                    s.offers.map((o) => (
                      <VStack key={o.id} 
                      style={[styles.sessionsSectionserviceTypeOfferContainer,(activeProduct !== o.id ? "" : styles.sessionsSectionserviceTypeOfferContainerActive)]} 
                      dataSet={{ media: [ids.sessionsSectionserviceTypeOfferContainer, (activeProduct !== o.id ? "" : ids.sessionsSectionserviceTypeOfferContainerActive)]}}>

                      <HStack style={styles.sessionsSectionServiceTypeOfferHead} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHead}}>
                        <VStack style={styles.sessionsSectionServiceTypeOfferHeadTextsContainer} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadTextsContainer}}>
                          <Text style={styles.sessionsSectionServiceTypeOfferHeadHeading} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadHeading}} >{o.title}</Text>
                          <Text style={styles.sessionsSectionServiceTypeOfferHeadSubtext} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadSubtext}} >{o.duration}</Text>
                        </VStack>
                        <HStack  style={styles.sessionsSectionServiceTypeOfferHeadPriceContainer} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadPriceContainer}} >
                          <Text style={styles.sessionsSectionServiceTypeOfferHeadPrice} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadPrice}}
                           >{o.pricePerHour.amount.toString() + o.pricePerHour.currency + '/hr'}</Text>
                          <Button variant='unstyled' 
                          style={styles.sessionsSectionServiceTypeOfferHeadToggleButton}  dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadToggleButton}} onPress={() => toggleActive(o.id)} >
                            {
                              (activeProduct === o.id) ? 
                              (
                                <Icon as={MaterialIcons } name='keyboard-arrow-up' size='32px' color={colors.yellow} 
                                padding={-1} bg={colors.brandPrimary} borderRadius={borderRadius[8]}
                                />
                              ) : 
                              (
                                <Icon as={MaterialIcons } name='keyboard-arrow-down' size='32px' color={colors.yellow} 
                                />
                              )
                            }
                          </Button>
                        </HStack>
                      </HStack>
                      
                      
                      {
                        (activeProduct !== o.id) ? "" : 
                        (
                          <VStack style={styles.sessionsSectionServiceTypeOfferBody} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBody}}>
                          <Text style={styles.sessionsSectionServiceTypeOfferBodyDescription} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyDescription}} >{o.description}</Text>

                          <HStack  style={styles.sessionsSectionServiceTypeOfferBodyPriceSection} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPriceSection}}>

                            <VStack>
                              <Text style={styles.sessionsSectionServiceTypeOfferHeadHeading} dataSet={{ media: ids.sessionsSectionServiceTypeOfferHeadHeading}} >enter your quantity</Text>

                              <HStack style={styles.sessionsSectionServiceTypeOfferBodyPriceSectionButtonsContainer} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPriceSectionButtonsContainer}}>
                                <Button variant="unstyled"
                                style={styles.sessionsSectionServiceTypeOfferBodyPriceSectionButton} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPriceSectionButton}}
                                onPress={() => setActiveProductAmount(activeProductAmount + 1)}
                                >
                                  <Text 
                                style={styles.sessionsSectionServiceTypeOfferBodyPrice} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPrice}} 
                                >+</Text>
                                  </Button>
                                <Text 
                                style={styles.sessionsSectionServiceTypeOfferBodyPrice} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPrice}} 
                                >{activeProductAmount}</Text>
                                <Button variant="unstyled"
                                style={styles.sessionsSectionServiceTypeOfferBodyPriceSectionButton} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPriceSectionButton}}
                                onPress={() => decrement()}
                                >
                                  <Text 
                                style={styles.sessionsSectionServiceTypeOfferBodyPrice} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyPrice}} 
                                >-</Text>
                                  </Button>
                              </HStack>

                            </VStack>
                            
                            <Text 
                              style={styles.sessionsSectionServiceTypeOfferBodyTotalPrice} dataSet={{ media: ids.sessionsSectionServiceTypeOfferBodyTotalPrice}} 
                              >{activeProductAmount* o.pricePerHour.amount.toString() + o.pricePerHour.currency }</Text>
                          </HStack>

                          <Button style={styles.primaryButton} dataSet={{ media: ids.primaryButton}}>
                            <Text style={styles.primaryButtonText} dataSet={{ media: ids.primaryButtonText}}>proceed to buy</Text>
                          </Button>

                          </VStack>
                        )
                      }
                      </VStack>
                    ))
                  }
                  </VStack>
                </VStack>
              ))
            } 

          </VStack>
          



        </Center>
    </VStack>
  )
}


export default CoachProfile
// 