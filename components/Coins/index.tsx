import React, { useState } from 'react'

import Box from '@mui/material/Box'
import GridViewIcon from '@mui/icons-material/GridView'
import ListIcon from '@mui/icons-material/List'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import Coins from './Coins'
import CoinsList from './CoinsList'
import GlobalStats from '../../components/Home/GlobalStats'
import { COIN_RANKING_HEADERS } from '../../lib/constants'
import useSWR from 'swr'

interface CoinsProps {
  all?: boolean
}

const CoinsPage: React.FC<CoinsProps> = ({ all = false }) => {
  const url = `https://coinranking1.p.rapidapi.com//coins?limit=100`

  const { data, error } = useSWR([url, COIN_RANKING_HEADERS])
  const [view, setView] = useState<'grid' | 'list' | null>('list')

  const handleChangeView = (
    _event: React.MouseEvent<HTMLElement>,
    newView: 'grid' | 'list' | null
  ) => {
    if (newView !== null) {
      setView(newView)
    }
  }

  if (error) return <>Error</>

  if (!all) {
    return <Coins data={data} isFetching={!data && !error} />
  }

  return (
    <>
      <GlobalStats />
      <Box sx={{ my: 2, width: '100%' }}>
        <Box sx={{ textAlign: 'right', mb: 2 }}>
          <ToggleButtonGroup
            value={view}
            onChange={handleChangeView}
            size="small"
            exclusive
          >
            <ToggleButton value="list" aria-label="list view">
              <ListIcon />
            </ToggleButton>
            <ToggleButton value="grid" aria-label="grid view">
              <GridViewIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {view === 'list' && (
          <CoinsList data={data} isFetching={!data && !error} />
        )}
        {view === 'grid' && (
          <Coins all data={data} isFetching={!data && !error} />
        )}
      </Box>
    </>
  )
}

export default CoinsPage
