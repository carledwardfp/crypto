import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import millify from 'millify'

import { useGetGlobalDataQuery } from '../../services/globalDataApi'

const GlobalStatsLoader = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <Chip
          key={index}
          label={`. `.repeat(15)}
          variant="outlined"
          color="primary"
          size="small"
        />
      ))}
    </>
  )
}

const GlobalStats = () => {
  const { data, isFetching } = useGetGlobalDataQuery({})

  const globalStatsData = data?.data?.stats

  return (
    <Box
      color="secondary"
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        pb: { xs: 1, lg: 2 },
      }}
    >
      {isFetching && <GlobalStatsLoader />}
      {globalStatsData && (
        <>
          <Chip
            label={`Coins: ${globalStatsData.totalCoins}`}
            variant="outlined"
            color="primary"
            size="small"
          />
          <Chip
            label={`Exchanges: ${globalStatsData.totalExchanges}`}
            variant="outlined"
            color="primary"
            size="small"
          />
          <Chip
            label={`Market Cap: ${millify(globalStatsData.totalMarketCap, {
              precision: 3,
              space: true,
            })}`}
            variant="outlined"
            color="primary"
            size="small"
          />
          <Chip
            label={`24h Vol: ${millify(globalStatsData.total24hVolume, {
              precision: 3,
              space: true,
            })}`}
            variant="outlined"
            color="primary"
            size="small"
          />
        </>
      )}
    </Box>
  )
}

export default GlobalStats
