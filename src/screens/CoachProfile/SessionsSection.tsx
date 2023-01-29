import { HStack, useMediaQuery,Image, useTheme, Icon, Text, VStack, Button} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {MaterialIcons,  } from '@expo/vector-icons'


const makeStyles = () => {  
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
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
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
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
      '@media (min-width: 800px)': {
        marginBottom: theme.spacing[8],
      },
    },
    sessionsSectionServiceTypeOfferHeadToggleButton: {
      padding: -1,
      margin: -theme.spacing[12],
      marginBottom: -2,
      '@media (min-width: 800px)': {
      },
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
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
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

const SessionsSection = ({profile, activeProduct, setActiveProduct, activeProductAmount, setActiveProductAmount, toggleActive, decrement }) => {
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
}


export default SessionsSection
// 