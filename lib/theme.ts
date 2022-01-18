import createCache from '@emotion/cache'
import { PaletteOptions, createTheme, css } from '@mui/material/styles'

export type AllowedTheme = NonNullable<PaletteOptions['mode']>

export const DEFAULT_THEME: AllowedTheme = 'dark'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
})

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #121212;
    }
  }
  [data-theme='dark'] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`

export const theme = createTheme({
  // palette: {
  //   // mode: 'light',
  //   // background: {
  //   //   default: '#121212',
  //   //   paper: '#313131',
  //   // },
  //   // primary: {
  //   //   light: accentBlue,
  //   //   main: primaryBlue,
  //   //   dark: darkBlue,
  //   //   contrastText: '#fff',
  //   // },
  //   // secondary: {
  //   //   light: accentGreen,
  //   //   main: primaryGreen,
  //   //   dark: darkGreen,
  //   //   contrastText: '#fff',
  //   // },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
})

export const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true })
}
