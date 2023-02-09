import {useTheme} from 'native-base'
import StyleSheet from 'react-native-media-query';
import {Dimensions} from 'react-native'

const makeStyles = () => {
  const theme = useTheme();

  const windowWidth = Dimensions.get('window').width;

  const styleSheet = StyleSheet.create({
    container: {
      width: '100%',
      flexGrow: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingBottom: theme.spacing[8]*50,
      '@media (min-width: 800px)': {
        paddingHorizontal: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      '@media (max-width: 800px)': {
        height: '100%',
      },
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
    containerWeb: {
      width: '100%',
      flexGrow: 1,  
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
    mainWeb: {
      width: '100%',
      flexGrow: 1,
      position: 'absolute',
      paddingHorizontal: 100,
      alignItems: 'flex-start'
    },
    BannerContainer: {
      
    },
    BannerBanner: {
      width: windowWidth ,
      height: 300,
      '@media (min-width: 800px)': {
      },
    },
    BannerBannerFade: {
      width: windowWidth ,
      height: 300,
      // backgroundColor: theme.colors.brandPrimary,
    },
    CustomSearchContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 'auto',
      marginVertical: theme.spacing[12],
      backgroundColor: theme.colors.brandSecondary,
      paddingStart: theme.spacing[12],
      borderRadius: theme.borderRadius[4],
      flexDirection: 'row',
    },
    CustomSearchLogo: {
      fontSize: theme.fontSize.xl,
      color: theme.colors.textPrimary,
    },
    CustomSearchBackIcon: {
      // size:  24,
      // color: colors.textPrimary,
      // // marginBottom: theme.spacing[12]
      // padding: theme.spacing[8]
    },
    CustomSearchSearchInput: {
      width: '100%',
      fontSize: theme.fontSize.xs,
      height: 48,
      paddingBottom: 6,
      backgroundColor: theme.colors.brandSecondary,
    },
    CustomSearchSearchIconBox: {
      backgroundColor: theme.colors.brandSecondary,
      height: 48,
      paddingStart: theme.spacing[8],
      borderLeftColor: theme.colors.yellow,
      borderLeftWidth: 1,
    },
    CustomSearchSearchIcon: {
      // fontSize: 20,
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
      '@media (min-width: 800px)': {
        padding: '5px 10px 3px 10px',
        borderRadius: 10,
        alignItems: 'center',
      },
    },
    infoTagIcon: {
      opacity: 0.6,
      marginTop: 5,
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
    },
    infoTagSubtext: {
      fontSize: theme.fontSize.xxs,
      color: theme.colors.textGrey,
      marginStart: theme.spacing[12]/3,
      marginTop: 1,
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
    },
    infoTagMainText: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textPrimary,
      marginTop: 3,
      '@media (min-width: 800px)': {
        marginTop: 0,
      },
    },
    coachInfoMainText: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.md,
    },
    splitInfoContainer: {
      marginTop: theme.spacing[16],
      justifyContent: 'space-between',
      width: '100%',
      '@media (min-width: 800px)': {
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },  
    },
    splitInfoMajorSection: {
      maxWidth: '75%',
      '@media (min-width: 800px)': {
        width: '100%',
      },  
    },
    splitInfoMinorSection: {
      width: '30%',
      '@media (min-width: 800px)': {
        marginTop: theme.spacing[24],
        width: '100%',
      },  
    },
    SplitInfoGameTag: {
      backgroundColor: theme.colors.brandSecondary,
      borderRadius: theme.borderRadius[8]*2,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: theme.spacing[12]/4,
      paddingHorizontal: theme.spacing[8],
      marginBottom: theme.spacing[8],
      marginTop: theme.spacing[8]/2,
      alignSelf: 'flex-start',
      '@media (min-width: 800px)': {
        marginTop: theme.spacing[12],
        marginBottom: 0,
      },  
    },
    SplitInfoGameTagImage: {
      width: 20,
      height: 20,
      borderRadius: 10000,
    },
    SplitInfoGameTagTitle: {
      fontSize: theme.fontSize.xxs,
      color: theme.colors.textPrimary,
      paddingStart: theme.spacing[8],
      paddingEnd: theme.spacing[8]/2,
    },
    SplitInfoLangSectionSubtext: {
      padding: theme.spacing[12]/4,
      paddingStart: 0,
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.md,
    },
    BannerWebBannerContainer: {
      position: 'relative'
      
    },
    BannerWebBannerImage: {
      width: windowWidth ,
      height: 200,
      '@media (min-width: 800px)': {
      },
    },
    BannerWebBannerFade: {
      width: windowWidth ,
      position: 'absolute',
      height: 200,
      // backgroundColor: theme.colors.brandPrimary,
    },
    achievementsContainer: {
      marginTop: theme.spacing[16],
      '@media (min-width: 800px)': {
        marginTop: theme.spacing[32]*2,
      }
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
      '@media (min-width: 800px)': {
        marginTop: 0,
        // backgroundColor: theme.colors.white,
      },  
      width: '100%',
    },
    coachInfoImage: {
      borderRadius: 10000,
      width: 60,
      height: 60,
      marginEnd: theme.spacing[16],
      // '@media (min-width: 800px)': {
      //   width: 50,
      //   height: 50,
      // },  
    },
    coachInfoTextsContainer: {
      // backgroundColor: theme.colors.white,
      justifyContent: 'center',
      marginTop: theme.spacing[8],  
      // '@media (min-width: 800px)': {
      //   justifyContent: 'space-around',
      // }, 
    },
    coachInfoSubtext: {
      color: theme.colors.textGrey,
      fontSize: theme.fontSize.sm,
      marginEnd: theme.spacing[16],
      '@media (min-width: 800px)': {
      marginTop: theme.spacing[8]/2,
      },  
    },
    CoachInfoAboutHeader: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    CoachInfoAboutBody: {
      fontSize: theme.fontSize.xs,
      color: theme.colors.textPrimary,
      alignSelf: 'flex-start',
      textOverflow: 'ellipsis'
    },
    CoachInfoAboutHeaderText: {
      fontSize: theme.fontSize.md,
      color: theme.colors.textSecondary,
      '@media (min-width: 800px)': {
        marginBottom: theme.spacing[8],
      }, 
    },
    CoachInfoAboutHeaderSocialsContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    CoachInfoAboutHeaderSocialsIconBox: {
      backgroundColor: theme.colors.brandPrimary,
      borderRadius: theme.borderRadius[4],
      padding: theme.spacing[12]/2,
      marginStart: theme.spacing[12]/2,
      marginBottom: theme.spacing[12],
    },
    CoachInfoAboutHeaderSocialsIcon: {
    },
    CoachInfoMoreButton: {
      alignSelf: 'flex-start',
      marginEnd: theme.spacing[8],
      marginTop: theme.spacing[12],
      // backgroundColor: theme.colors.textPrimary,
    },
    CoachInfoMoreButtonText: {
      color: theme.colors.textSecondary,
      fontSize: theme.fontSize.sm,
    },
  });

  return styleSheet
}

export default makeStyles