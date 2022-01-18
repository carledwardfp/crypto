import React, { useState, useMemo } from 'react'
import { AxisOptions, Chart, UserSerie } from 'react-charts'
import axios from 'axios'
import moment from 'moment'
import Color from 'color'
import useSWR from 'swr'

import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { ICoinData, ICoinPriceHistoryData, ITimePeriod } from '../../lib/types'
import { COIN_RANKING_HEADERS } from '../../lib/constants'
import { useTheme } from '@mui/material/styles'

interface CoinPriceHistoryProps {
  coinId: string
  coin: ICoinData
}

const CoinPriceHistory: React.FC<CoinPriceHistoryProps> = ({
  coinId,
  coin,
}) => {
  const theme = useTheme()
  const [timePeriod, setTimePeriod] = useState<ITimePeriod>('24h')
  const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}/history?timePeriod=${timePeriod}`

  const { data: coinData, error } = useSWR(
    coinId ? [url, COIN_RANKING_HEADERS] : null
  )

  const accent = Color(coin.color).alpha(0.4).lighten(0).hex()
  const lineData = coinData?.data?.history

  const data = useMemo(
    () => [
      {
        label: 'Price',
        data: lineData,
      },
    ],
    [lineData]
  ) as UserSerie<ICoinPriceHistoryData>[]

  const primaryAxis = useMemo<AxisOptions<ICoinPriceHistoryData>>(
    () => ({
      getValue: (datum) => {
        const utcOffset = moment().utcOffset() // to get local time difference vs GMT
        return moment.unix(datum.timestamp).add(utcOffset, 'minutes').toDate()
      },
      elementType: 'line',
      showGrid: false,
    }),
    []
  )

  const secondaryAxes = useMemo<AxisOptions<ICoinPriceHistoryData>[]>(
    () => [
      {
        getValue: (datum) => parseFloat(datum.price) as number,
        elementType: 'line',
      },
    ],
    []
  )

  const handleTimePeriod = (
    _event: React.MouseEvent<HTMLElement>,
    newTimePeriod: ITimePeriod
  ) => {
    if (newTimePeriod !== null) {
      setTimePeriod(newTimePeriod)
    }
  }

  if (error) return null

  return (
    <Box>
      <ToggleButtonGroup
        value={timePeriod}
        onChange={handleTimePeriod}
        size="small"
        exclusive
      >
        {['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'].map((s) => (
          <ToggleButton value={s} aria-label={`${s} view`} key={s}>
            {s}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box
        sx={{
          mt: 2,
          height: { xs: 200, md: 400 },
          background: 'background.primary',
        }}
      >
        {!coinData && (
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ borderRadius: 2, height: { xs: 200, md: 400 } }}
          />
        )}
        {coinData && (
          <Chart
            about={`${coin.name} price history`}
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              defaultColors: [accent],
              dark: theme.palette.mode === 'dark',
            }}
          />
        )}
      </Box>
    </Box>
  )
  return null
}

export default CoinPriceHistory
