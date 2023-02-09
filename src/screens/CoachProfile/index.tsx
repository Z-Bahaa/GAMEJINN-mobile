import { useState, useEffect} from 'react'
import { VStack, useTheme, HStack, Center,  useMediaQuery, Box, ScrollView, Image, ZStack, Icon , Input, Pressable, Text, Button, Divider } from 'native-base'
import {LinearGradient} from 'expo-linear-gradient'
import { MaterialIcons, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'

import {profile} from '../../dummyData/CoachProfile'

import SearchHeader from '../../components/SearchHeader';

import makeStyles from './styles'


const CoachProfile = ({navigation}: any) => {
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

  const Banner = ({url}: any) => (<ZStack>
    <Image alt='hello' source={{uri: url}}  style={styles.BannerBanner} dataSet={{ media: ids.BannerBanner}} />
    <LinearGradient colors={[colors.brandPrimaryHalf,colors.brandPrimary]} style={styles.BannerBannerFade} dataSet={{ media: ids.BannerBannerFade}} />
  </ZStack>
  )

  const CustomSearch = ({navigation}: any) => (<Pressable  onPress={() => navigation.navigate('Search')}
    style={styles.CustomSearchContainer} dataSet={{ media: ids.CustomSearchContainer}} >
        <Icon as={MaterialIcons} name="arrow-back-ios" size='26px' color={colors.textPrimary}  />
        <Input 
            isDisabled
            style={styles.CustomSearchSearchInput} dataSet={{ media: ids.CustomSearchSearchInput}}
            placeholder={'search by the coach or the game'}
            variant='unstyled'
            flex={1}
            InputLeftElement={
              <Center style={styles.CustomSearchSearchIconBox}  dataSet={{ media: ids.CustomSearchSearchIconBox}}>
                <Icon as={AntDesign} name="search1" size='20px' />
              </Center>
            }
            
          />
      </Pressable>
  )

  const InfoTags = () => (<HStack style={styles.infoTagsContainer} dataSet={{ media: ids.infoTagsContainer}}>

    <HStack style={styles.infoTag} dataSet={{ media: ids.infoTag}}>
      <Icon as={AntDesign } name='calendar' size='12px' color={colors.textPrimary} 
        style={styles.infoTagIcon} dataSet={{ media: ids.infoTagIcon}} />
      <Text style={styles.infoTagSubtext} dataSet={{ media: ids.infoTagSubtext}}>
        {"available "}
      </Text>
      <Text style={styles.infoTagMainText} dataSet={{ media: ids.infoTagMainText}}>
        2:30 today
      </Text>
    </HStack>

    <HStack style={styles.infoTag} dataSet={{ media: ids.infoTag}}>
      <Icon as={MaterialIcons } name='attach-money' size='14px' color={colors.textPrimary} 
        style={styles.infoTagIcon} dataSet={{ media: ids.infoTagIcon}} />
      <Text style={styles.infoTagSubtext} dataSet={{ media: ids.infoTagSubtext}}>
        {"sessions starting at "}
      </Text>
      <Text style={styles.infoTagMainText} dataSet={{ media: ids.infoTagMainText}}>
        360EGP
      </Text>
    </HStack>

  </HStack>
  )

  const SplitInfo = () => (<HStack style={styles.splitInfoContainer} dataSet={{ media: ids.splitInfoContainer}} >

    <VStack style={styles.splitInfoMajorSection} dataSet={{ media: ids.splitInfoMajorSection}}>
      <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >offered games</Text>
  
      <HStack style={styles.SplitInfoGameTag} dataSet={{ media: ids.SplitInfoGameTag}}>
        <Image alt='coach image' style={styles.SplitInfoGameTagImage} dataSet={{ media: ids.SplitInfoGameTagImage}} 
            source={{uri: 'https://www.citypng.com/public/uploads/preview/-41603132788rzosdsitdt.png'}}
            />
        <Text style={styles.SplitInfoGameTagTitle} dataSet={{ media: ids.SplitInfoGameTagTitle}}>
        Super Smash bros. Ultimate Ultimate
        </Text>
      </HStack>
  
      <HStack style={styles.SplitInfoGameTag} dataSet={{ media: ids.SplitInfoGameTag}}>
        <Image alt='coach image' style={styles.SplitInfoGameTagImage} dataSet={{ media: ids.SplitInfoGameTagImage}} 
            source={{uri: 'https://preview.redd.it/rqassez3kc591.png?width=841&format=png&auto=webp&s=a2035dca162b77fb88961464e73a1c57efe95cca'}}
            />
        <Text style={styles.SplitInfoGameTagTitle} dataSet={{ media: ids.SplitInfoGameTagTitle}}>
        Super Smash bros. Ultimate
        </Text>
      </HStack>
  
    </VStack>
  
    <VStack style={styles.splitInfoMinorSection} dataSet={{ media: ids.splitInfoMinorSection}}>
      <Text style={styles.coachInfoMainText} dataSet={{ media: ids.coachInfoMainText}} >languages</Text>
      <Text style={styles.SplitInfoLangSectionSubtext} dataSet={{ media: ids.SplitInfoLangSectionSubtext}} >english</Text>
      <Text style={styles.SplitInfoLangSectionSubtext} dataSet={{ media: ids.SplitInfoLangSectionSubtext}} >arabic</Text>
    </VStack>
    </HStack>
    )

  const BannerWeb = ({url}: any) => (<Box  style={styles.BannerWebBannerContainer} dataSet={{ media: ids.BannerWebBannerContainer}} >
      <Image alt='hello' source={{uri: url}}  style={styles.BannerWebBannerImage} dataSet={{ media: ids.BannerWebBannerImage}} />
      <LinearGradient colors={['transparent',colors.brandPrimary]} style={styles.BannerWebBannerFade} dataSet={{ media: ids.BannerWebBannerFade}} />
    </Box>
  )

  const [showMore, setShowMore] = useState(false)

  const description = "Every lesson will be recorded, just ask me for the VOD and I will upload it & send it right away! There is a twitch sub discount and maybe something in the FAQ! I have been competing in Smash tournaments for over 10 years & coaching for over 5 years.I have beaten the best players in the world, won nationals, and made my mark on the scene as THE analytical pro player :) Probably the Ultimate/ Smash 4 player who";

  const CoachInfo = () => (
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

    <HStack style={styles.CoachInfoAboutHeader} dataSet={{ media: ids.CoachInfoAboutHeader}}>
      <Text style={styles.CoachInfoAboutHeaderText} dataSet={{ media: ids.CoachInfoAboutHeaderText}}>
        about
      </Text>
      <HStack style={styles.CoachInfoAboutHeaderSocialsContainer} dataSet={{ media: ids.CoachInfoAboutHeaderSocialsContainer}}>
        {['twitter','youtube','twitter','youtube'].map( (v, i) => 
        (<Center style={styles.CoachInfoAboutHeaderSocialsIconBox} dataSet={{ media: ids.CoachInfoAboutHeaderSocialsIconBox}} key={i}>
          <Icon as={AntDesign } name={v} size='21px' color={colors.textPrimary} 
          style={styles.CoachInfoAboutHeaderSocialsIcon} dataSet={{ media: ids.CoachInfoAboutHeaderSocialsIcon}} 
          />
        </Center>))
        }
      </HStack>
    </HStack>

    <Text style={styles.CoachInfoAboutBody} dataSet={{ media: ids.CoachInfoAboutBody}}>
    {(description.length > 180) ? showMore  ? description : description.slice(0, 180) + '...' : description}
    </Text>

    {(description.length > 180) ? <Button variant="unstyled" p={0} style={styles.CoachInfoMoreButton} dataSet={{ media: ids.CoachInfoMoreButton}} onPress={() => setShowMore(!showMore)} >
        <Text style={styles.CoachInfoMoreButtonText} dataSet={{ media: ids.CoachInfoMoreButtonText}} >{!showMore ? 'read more' : 'read less'}</Text>
    </Button>: null}

    <Divider backgroundColor={colors.grey} opacity={0.6} mt={4} mb={4} /> 

    <Button style={styles.primaryButton} dataSet={{ media: ids.primaryButton}}>
      <Text style={styles.primaryButtonText} dataSet={{ media: ids.primaryButtonText}}>book a session</Text>
    </Button>
  </Box>
  )

    const SessionsSection =  ({profile, activeProduct,  activeProductAmount, setActiveProductAmount, toggleActive, decrement }: any) => (
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
          profile.serviceTypes.map((s: any) => (
            <VStack key={s.id} style={styles.sessionsSectionServiceTypeContainer} dataSet={{ media: ids.sessionsSectionServiceTypeContainer}} >
              <Text style={styles.sessionsSectionServiceTypeHeading} dataSet={{ media: ids.sessionsSectionServiceTypeHeading}} >{s.title}</Text>
              <VStack  style={styles.sessionsSectionserviceTypeOffersContainer} dataSet={{ media: ids.sessionsSectionserviceTypeOffersContainer}}>
              {
                s.offers.map((o: any) => (
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
    )

    const crownIcon = (<Icon as={MaterialCommunityIcons  } name='crown' size='24px' color={colors.textPrimary} 
   style={styles.crownAchievementIcon} dataSet={{ media: ids.crownAchievementIcon}} />)

   const trophyIcon = (<Icon as={MaterialCommunityIcons  } name='trophy-variant' size='34px' color={colors.textPrimary} 
   style={styles.trophyAchievementIcon} dataSet={{ media: ids.trophyAchievementIcon}} />)

   const Achievements = () => (<VStack style={styles.achievementsContainer} dataSet={{ media: ids.achievementsContainer}}>
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

  if(isSmallScreen) {
    return (
      <ScrollView w={isSmallScreen ? '100%' : '100%'}  h='100%'>
        <VStack  style={styles.container} dataSet={{ media: ids.container}} >
            <Banner url={profile.backgroundImage.url} />

            <Center style={styles.main} dataSet={{ media: ids.main}} >
              <CustomSearch navigation={navigation} />
              <CoachInfo />
              <InfoTags />
              <SplitInfo />
              <Achievements />
              <SessionsSection profile={profile} activeProduct={activeProduct} setActiveProduct={setActiveProduct} 
              activeProductAmount={activeProductAmount} setActiveProductAmount={setActiveProductAmount}
              decrement={decrement} toggleActive={toggleActive}
              />
            </Center>
        </VStack>
      </ScrollView>
    )
  } else {
    return (
      <ScrollView w={isSmallScreen ? '100%' : '100%'}  h='100%'><VStack  style={styles.containerWeb} dataSet={{ media: ids.containerWeb}} >
        <Box style={styles.searchContainer} dataSet={{ media: ids.searchContainer}} >
          <SearchHeader navigation={navigation} />
        </Box>
        <BannerWeb url={profile.backgroundImage.url} />
        <Center style={styles.mainWeb} dataSet={{ media: ids.mainWeb}} >
            <HStack mt={200}>
              <VStack w='70%'>
                <CoachInfo />
                <InfoTags />
            <SessionsSection profile={profile} activeProduct={activeProduct} setActiveProduct={setActiveProduct} 
             activeProductAmount={activeProductAmount}
             decrement={decrement} toggleActive={toggleActive}
            />
              </VStack>
              <VStack w='35%' margin={spacing[8]} mt={spacing[8]/2} mb={0}>
                <SplitInfo />
            <Achievements />
              </VStack>
            </HStack>
          </Center>
      </VStack>
    </ScrollView>)
  }

}


export default CoachProfile