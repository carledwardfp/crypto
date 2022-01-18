import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

import CoinCard from './CoinCard'
import { ICoinsData } from '../../lib/types'

interface CoinsProps {
  all?: boolean
  isFetching: boolean
  data: any
}

const Coins: React.FC<CoinsProps> = ({ all = false, data, isFetching }) => {
  let coins = data?.data?.coins as ICoinsData[]

  if (!all) {
    coins = coins?.slice(0, 6)
  }

  return (
    <>
      <Box
        color="secondary"
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Grid container spacing={2}>
          {isFetching &&
            Array.from({ length: 6 }).map((_, index) => (
              <Grid item xs={6} md={4} xl={2} key={index}>
                <Skeleton
                  variant="rectangular"
                  height={150}
                  sx={{ borderRadius: 1 }}
                />
              </Grid>
            ))}
          {!isFetching &&
            coins?.map((coin: ICoinsData) => (
              <Grid item xs={6} md={4} xl={2} key={coin.uuid}>
                <Link href={`/coin/${coin.uuid}`} passHref>
                  <a>
                    <CoinCard {...coin} />
                  </a>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default Coins
