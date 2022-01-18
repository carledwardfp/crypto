import React from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import { ICoinsData } from '../../lib/types'
import { simplifyNum } from '../../lib/utils'

import Color from 'color'

const CoinCard: React.FC<ICoinsData> = (coin) => {
  const accent = Color(coin.color).alpha(0.4).lighten(0).hex()
  const positiveChange = !coin.change.includes('-')

  const isSmUp = useMediaQuery('(min-width:600px)')

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        borderLeft: '3px solid ' + accent,
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="coin icon"
            alt={coin.name}
            src={coin.iconUrl}
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {coin.name[0]}
          </Avatar>
        }
        title={
          <Typography variant="h6" fontSize={{ xs: 16, sm: 18 }}>
            {!isSmUp && (
              <Avatar
                aria-label="coin icon"
                alt={coin.name}
                src={coin.iconUrl}
                sx={{ width: 25, height: 25, mb: 1 }}
              >
                {coin.name[0]}
              </Avatar>
            )}{' '}
            {coin.name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.primary">
            {simplifyNum(coin.price)}{' '}
            <span style={{ color: positiveChange ? 'green' : 'red' }}>
              ({coin.change})
            </span>
          </Typography>
        }
        sx={{ pl: { xs: 0, sm: 2 } }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          24h Vol: {simplifyNum(coin['24hVolume'])}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Market Cap: {simplifyNum(coin.marketCap)}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CoinCard
