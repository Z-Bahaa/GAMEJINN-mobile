import { extendTheme } from 'native-base';


const primaryTheme = extendTheme({
  colors: {
    brandPrimary: "#1e0d2a",
    brandSecondary: "#3B2749",
    brandPrimaryVague: "rgba(30, 13, 42, .95)",
    textPrimary: "#ffffff",
    textSecondary: "#ffd68a",
    textGrey: "#919197",
    textBlack: "#000",
    white: "#fff",
    brandLight: "#5f05a5",
    grey: "#919197",
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


type CustomThemeType = typeof primaryTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default primaryTheme
