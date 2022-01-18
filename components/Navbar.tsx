import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import { useTheme } from 'next-themes'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

interface NavbarProps {
  onDrawerToggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onDrawerToggle }) => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (mounted)
    return (
      <>
        <AppBar
          color="inherit"
          position="sticky"
          elevation={0}
          sx={{ height: 60, width: '100%', zIndex: 100 }}
        >
          <Toolbar>
            <Grid container spacing={1} alignItems="center">
              <Grid sx={{ display: { lg: 'none', xs: 'block' } }} item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  edge="start"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs />
              <Grid item>
                <Tooltip
                  title={`Switch to ${
                    resolvedTheme === 'dark' ? 'light' : 'dark'
                  } mode`}
                >
                  <IconButton
                    onClick={() =>
                      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
                    }
                  >
                    {resolvedTheme === 'dark' ? (
                      <DarkModeIcon />
                    ) : (
                      <LightModeIcon />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • No alerts">
                  <IconButton>
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton color="inherit" sx={{ p: 0.5 }}>
                  <Avatar alt="My Avatar" />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    )

  return <></>
}

export default Navbar
