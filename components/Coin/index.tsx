import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import millify from 'millify'
import useSWR from 'swr'
import axios from 'axios'

import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'

import CoinDescription from './CoinDescription'
import CoinPriceHistory from './CoinPriceHistory'
import { ICoinData } from '../../lib/types'
import { capitalize } from '../../lib/utils'
import Converter from '../../components/Converter'
import { COIN_RANKING_HEADERS } from '../../lib/constants'

interface CoinProps {
  id: string
}

const Coin: React.FC<CoinProps> = ({ id }) => {
  const url = `https://coinranking1.p.rapidapi.com/coin/${id}`

  const { data, error } = useSWR(id ? [url, COIN_RANKING_HEADERS] : null)
  const coin = data?.data?.coin as ICoinData

  const positiveChange = !coin?.change.includes('-')
  // const accent = Color(coin.color).alpha(0.9).lighten(0.9).hex()

  const isMdUp = useMediaQuery('(min-width:768px)')

  // if (isFetching) return <>Loading...</>
  if (error) return <>Error loading page</>

  if (id && coin)
    return (
      <Box>
        <Breadcrumbs aria-label="breadcrumb" sx={{ zIndex: 1 }}>
          <Link href="/coins" passHref>
            <MuiLink underline="hover" color="inherit" component="a">
              Coins
            </MuiLink>
          </Link>
          <Typography color="text.primary">{coin.name}</Typography>
        </Breadcrumbs>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            {/* MAIN CONTENT */}
            <Grid item xs={12} lg={8}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={coin.iconUrl}
                  alt={coin.name}
                  width={40}
                  height={35}
                />
                <Typography component="h1" variant="h3">
                  {coin.name}
                </Typography>
                <Chip
                  label={'Rank ' + coin.rank}
                  color={coin.rank <= 3 ? 'success' : 'primary'}
                  size="small"
                  variant="outlined"
                  sx={{ ml: 1 }}
                />
              </Box>

              {/* STATS */}
              <Typography variant="h6" className="coin-change">
                {parseFloat(coin.price).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                <span style={{ color: positiveChange ? '#69be28' : '#e06377' }}>
                  {positiveChange ? <TrendingUpIcon /> : <TrendingDownIcon />}
                  {coin.change}
                </span>
                <span>
                  ATH: $
                  {parseFloat(coin.allTimeHigh.price).toLocaleString('en-US')} (
                  {moment(coin.allTimeHigh.timestamp * 1000).format(
                    'MM/DD/YYYY'
                  )}
                  )
                </span>
              </Typography>
              <Grid
                container
                spacing={{ xs: 0, md: 2, lg: 0, xl: 2 }}
                sx={{ my: 2 }}
              >
                <Grid item xs={12} md={6} lg={12} xl={6}>
                  <StatItem
                    label="Market Cap"
                    value={`$${parseFloat(coin.marketCap).toLocaleString(
                      'en-US'
                    )}`}
                  />
                  <StatItem
                    label="24H Volume"
                    value={`$${parseFloat(coin['24hVolume']).toLocaleString(
                      'en-US'
                    )}`}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={12} xl={6}>
                  <StatItem
                    label={
                      <>
                        Total Supply{' '}
                        {isMdUp && (
                          <Tooltip
                            placement="right"
                            title={
                              coin.supply.confirmed
                                ? 'Confirmed by Coinranking API'
                                : 'Not confirmed by Coinranking API'
                            }
                          >
                            <InfoOutlinedIcon fontSize="small" />
                          </Tooltip>
                        )}
                      </>
                    }
                    value={millify(parseFloat(coin.supply.total))}
                  />
                  <StatItem
                    label="Circulating Supply"
                    value={millify(parseFloat(coin.supply.circulating))}
                  />
                </Grid>
              </Grid>
              <Box sx={{ width: '100%' }}>
                <Converter coin={coin} />
              </Box>
            </Grid>

            {/* INFO CONTENT */}
            <Grid item xs="auto">
              <Typography variant="h5" component="h5">
                Info
              </Typography>
              <Box sx={{ width: '100%' }}>
                {coin.links.map((link) => (
                  <Typography variant="body2" key={link.url}>
                    {capitalize(link.type)}:{' '}
                    <MuiLink
                      underline="hover"
                      color="inherit"
                      component="span"
                      sx={{ cursor: 'pointer' }}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Chip
                          size="small"
                          label={link.name}
                          key={link.name}
                          component="span"
                        />
                      </a>
                    </MuiLink>
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />
          <CoinPriceHistory coinId={id} coin={coin} />
          <Divider sx={{ my: 2 }} />
          <CoinDescription {...coin} />
        </Box>
      </Box>
    )

  return null
}

const StatItem = ({
  label,
  value,
  ...props
}: {
  label: string | React.ReactNode
  value: string | number | React.ReactNode
  sx?: { [key: string]: any }
}) => {
  return (
    <Grid item xs>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          ...props,
        }}
      >
        <Typography sx={{ height: 24 }}>{label}</Typography>
        <Typography>{value}</Typography>
      </Box>
    </Grid>
  )
}

export default Coin
