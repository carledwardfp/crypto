import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer, { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SettingsIcon from '@mui/icons-material/Settings'
import NewspaperIcon from '@mui/icons-material/Newspaper'

import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TokenIcon from '@mui/icons-material/Token'
import HomeIcon from '@mui/icons-material/Home'

const categories = [
  {
    id: 'Menu',
    children: [
      { id: 'Home', icon: <HomeIcon />, active: true },
      {
        id: 'Coins',
        icon: <AttachMoneyIcon />,
      },
      { id: 'News', icon: <NewspaperIcon /> },
      { id: 'Exchanges', icon: <CompareArrowsIcon /> },
      { id: 'NFT', icon: <TokenIcon /> },
    ],
  },
  {
    id: 'Account',
    children: [
      { id: 'Portfolio', icon: <FolderSpecialIcon /> },
      { id: 'Settings', icon: <SettingsIcon /> },
    ],
  },
]

const item = {
  py: '2px',
  px: 3,
}

const logoStyle = {
  py: 1.5,
  px: 3,
  height: 60,
  fontSize: 40,
  fontFamily: 'Bebas Neue, cursive',
}

interface SidebarProps extends DrawerProps {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ setMobileOpen, ...props }: SidebarProps) => {
  const router = useRouter()
  const pathname = router.pathname.split('/')[1]

  return (
    <Drawer variant="permanent" {...props}>
      <List disablePadding>
        <ListItem sx={logoStyle}>cefpto</ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => (
              <ListItem disablePadding key={childId}>
                <Link
                  href={childId === 'Home' ? '/' : '/' + childId.toLowerCase()}
                >
                  <ListItemButton
                    sx={{ py: '2px', px: 3 }}
                    className={
                      pathname === '' && childId.toLowerCase() === 'home'
                        ? 'nav-link active'
                        : pathname === childId.toLowerCase()
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
