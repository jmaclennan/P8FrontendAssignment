// import chakraTheme from '@chakra-ui/theme'

import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from '@chakra-ui/react'


const colors = {
  'body-bg': '#E0E9F8',
  shadow: '#C5DFFB',
  'text-light': baseTheme.colors.gray[500],
  purple: {
    DEFAULT: '#4C3272',
    100: "#b488d6",
    200: "#9f67cb",
    300: "#8a46c1",
    400: "#7535b7",
    500: "#4C3272",
    600: "#582b59",
    700: "#622541",
    800: "#6c1e28",
    900: "#761612",
  }
}

export default colors