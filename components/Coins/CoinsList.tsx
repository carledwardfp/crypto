import React from 'react'
import Link from 'next/link'
import Color from 'color'

import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import Sparklines from './Sparklines'
import { ICoinsData } from '../../lib/types'

interface CoinsListProps {
  data: any
  isFetching: boolean
}

const CoinsList: React.FC<CoinsListProps> = ({ data, isFetching }) => {
  return (
    <Paper className="table-container" elevation={3}>
      <Table size="small" aria-label="coins data table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Coin</TableCell>
            <TableCell>Price (24h change)</TableCell>
            <TableCell>24h vol</TableCell>
            <TableCell>Market cap</TableCell>
            <TableCell sx={{ textAlign: 'center' }}>Sparkline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isFetching &&
            Array.from({ length: 24 }).map((_, index) => (
              <TableRow key={index}>
                <TableCellSkeleton />
              </TableRow>
            ))}
          {data?.data.coins.map((coin: ICoinsData) => {
            const accent = Color(coin.color).hex()
            const positiveChange = !coin.change.includes('-')

            return (
              <TableRow key={coin.uuid}>
                <TableCell sx={{ borderLeft: '2px solid ' + accent }}>
                  {coin.rank}
                </TableCell>
                <TableCell valign="middle">
                  <Link href={`/coin/${coin.uuid}`} passHref>
                    <a>
                      <img
                        src={coin.iconUrl}
                        alt={coin.name}
                        width={20}
                        height={20}
                        style={{ objectFit: 'contain' }}
                      />{' '}
                      {coin.name}
                    </a>
                  </Link>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  ${parseFloat(coin.price).toLocaleString('en-US')} (
                  <span
                    style={{ color: positiveChange ? '#69be28' : '#e06377' }}
                  >
                    {coin.change}
                  </span>
                  )
                </TableCell>
                {/* <TableCell>{millify(parseFloat(coin['24hVolume']))}</TableCell> */}
                {/* <TableCell>{millify(parseFloat(coin.marketCap))}</TableCell> */}
                <TableCell>
                  ${parseFloat(coin['24hVolume']).toLocaleString('en-US')}
                </TableCell>
                <TableCell>
                  ${parseFloat(coin.marketCap).toLocaleString('en-US')}
                </TableCell>
                <TableCell>
                  <Sparklines data={coin.sparkline} change={coin.change} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

const TableCellSkeleton = () => {
  return (
    <>
      <TableCell sx={{ height: { xs: 40, xl: 45 } }}>
        <Skeleton variant="text" sx={{ borderRadius: 1 }} />
      </TableCell>
      <TableCell sx={{ height: { xs: 40, xl: 45 } }}>
        <Skeleton variant="text" sx={{ borderRadius: 1 }} />
      </TableCell>
      <TableCell sx={{ height: { xs: 40, xl: 45 } }}>
        <Skeleton variant="text" sx={{ borderRadius: 1 }} />
      </TableCell>
      <TableCell sx={{ height: { xs: 40, xl: 45 } }}>
        <Skeleton variant="text" sx={{ borderRadius: 1 }} />
      </TableCell>
      <TableCell sx={{ height: { xs: 40, xl: 45 } }}>
        <Skeleton variant="text" sx={{ borderRadius: 1 }} />
      </TableCell>
      <TableCell sx={{ height: { xs: 40, xl: 45 } }}>
        <Skeleton variant="text" sx={{ borderRadius: 1 }} />
      </TableCell>
    </>
  )
}

export default CoinsList
