import React, { useState, useMemo } from 'react'
import { AxisOptions, Chart, UserSerie } from 'react-charts'
import moment from 'moment'
import Color from 'color'

import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { useGetCoinPriceHistoryQuery } from '../../../services/globalDataApi'
import {
  ICoinData,
  ICoinPriceHistoryData,
  ITimePeriod,
} from '../../../lib/types'

interface CoinPriceHistoryProps {
  coinId: string
  coin: ICoinData
}

const CoinPriceHistory: React.FC<CoinPriceHistoryProps> = ({
  coinId,
  coin,
}) => {
  const [timePeriod, setTimePeriod] = useState<ITimePeriod>('24h')

  const {
    data: coinData,
    isFetching,
    isError,
  } = useGetCoinPriceHistoryQuery({
    coinId,
    timePeriod,
  })
  const accent = Color(coin.color).alpha(0.4).lighten(0).hex()

  const lineData = coinData?.data?.history as ICoinPriceHistoryData[]

  const data = useMemo(
    () => [
      {
        label: 'Price',
        data: lineData,
      },
    ],
    [coinData]
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

  if (isError) return null

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
          // background: 'rgba(0, 27, 45, 0.9)', // dark
        }}
      >
        {isFetching && (
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ borderRadius: 2, height: { xs: 200, md: 400 } }}
          />
        )}
        {!isFetching && data && (
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              defaultColors: [accent],
              // dark: true,
            }}
            about={`${coin.name} price history`}
          />
        )}
      </Box>
    </Box>
  )
  return null
}

export default CoinPriceHistory
