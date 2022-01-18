import Link from 'next/link'

import { Box, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import GlobalStats from './GlobalStats'
import Coins from '../../components/Coins'
import News from '../../components/News/News'

const Home = () => {
  return (
    <>
      <GlobalStats />
      <Box>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h4">Top Coins</Typography>
            <Link href="/coins">
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                See more <ArrowRightAltIcon />
              </Typography>
            </Link>
          </Box>
          <Coins />
        </Box>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h4">Latest News</Typography>
            <Link href="/news">
              <Typography
                variant="body1"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                See more <ArrowRightAltIcon />
              </Typography>
            </Link>
          </Box>
          <News />
        </Box>
      </Box>
    </>
  )
}

export default Home
