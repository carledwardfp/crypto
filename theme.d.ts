import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    palette: {
      mode: string
      background: {
        default: string
        paper: string
      }
      primary: {
        light: string
        main: string
        dark: string
        contrastText: string
      }
      secondary: {
        light: string
        main: string
        dark: string
        contrastText: string
      }
    }
    breakpoints: {
      values: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    palette?: {
      mode?: string
      background?: {
        default?: string
        paper?: string
      }
      primary?: {
        light?: string
        main?: string
        dark?: string
        contrastText?: string
      }
      secondary?: {
        light?: string
        main?: string
        dark?: string
        contrastText?: string
      }
    }
    breakpoints?: {
      values?: {
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
      }
    }
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme
}
