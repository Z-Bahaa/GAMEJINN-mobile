import { extendTheme } from 'native-base';


const theme = extendTheme({
  colors: {
    brandPrimary: "#1e0d2a",
    brandPrimaryHalf: "rgba(31, 13, 43, 0.5)",
    brandSecondary: "#3B2749",
    brandSecondaryHalf: "rgba(59, 39, 73, 0.5)",
    brandPrimaryVague: "rgba(30, 13, 42, .95)",
    textPrimary: "#ffffff",
    textSecondary: "#ffd68a",
    textGrey: "#919197",
    textBlack: "#000",
    componentBGLight: "#fff",
    brandLight: "#5f05a5",
    grey: "#919197",
    darkGrey: "#696A73",
    darkGreyHalf: "rgba(104, 105, 115, 0.5)",
    yellow: "#ffd68a",
  },
  fontSize: {
    xxs: 8,
    xs: 10,
    sm: 12,
    md: 14,
    regular: 16,
    lg: 24,
    xl: 32,
  },
  spacing: {
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
  },
  borderRadius: {
    4: 4,
    8: 8,
    16: 16,
  },
  fontConfig: {
    500: {
      normal: 'bungee',
    }
  },
  fonts: {
    heading: "bungee",
    body: "bungee",
    mono: "bungee",
  }
})


type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme
