import { ThemeProvider } from '@mui/material'
import { theme } from '../lib/theme'

interface ColorModeProviderProps {
  children: React.ReactNode
}

const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ColorModeProvider
