import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

const drawerWidth = 256

interface LayoutProps {
  children: React.ReactNode
  appBar?: React.ReactNode | React.FC
}

const Layout: React.FC<LayoutProps> = ({ children, appBar }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMdUp = useMediaQuery('(min-width:1024px)')

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
        <Box
          component="nav"
          sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        >
          {isMdUp ? null : (
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              setMobileOpen={setMobileOpen}
            />
          )}
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { lg: 'block', xs: 'none' } }}
            onClose={handleDrawerToggle}
            setMobileOpen={setMobileOpen}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Navbar onDrawerToggle={handleDrawerToggle} />
          {appBar && (
            <AppBar
              color="default"
              position="sticky"
              elevation={0}
              sx={{
                top: 60,
                height: 60,
                width: '100%',
                backgroundColor: 'white',
              }}
            >
              <Toolbar>{appBar}</Toolbar>
            </AppBar>
          )}
          <Box component="main" sx={{ width: '100%', p: { xs: 2, sm: 3 } }}>
            {children}
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Layout
