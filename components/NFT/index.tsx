import React, { useState } from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import NFTCard from './NFTCard'
import { useGetNftQuery } from '../../services/nftApi'
import { INFTData } from '../../lib/types'

const NFTPage = () => {
  const [filter, setFilter] = useState<'24h' | '7d' | '30d'>('24h')

  const { data: nfts, isFetching } = useGetNftQuery(filter)

  if (isFetching) return <>Loading...</>

  return (
    <Box>
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

        {nfts?.map((nft: INFTData, index: number) => {
          const asset = nft.link.split('/assets/')[1]
          const assetAddress = asset.split('/')[0]
          const tokenId = asset.split('/')[1]

          return (
            <Grid item xs={6} md={4} xl={2} key={nft.name + index}>
              <Link href={`/nft/${assetAddress}?tokenId=${tokenId}`} passHref>
                <a>
                  <NFTCard {...nft} />
                </a>
              </Link>
            </Grid>
          )
        })}
      </Grid>
      <Paper className="table-container" elevation={3}>
        <Table size="small" aria-label="coins data table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Token Name</TableCell>
              <TableCell>Collection</TableCell>
              <TableCell>Price ({filter})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nfts?.map((nft: INFTData, index: number) => {
              const asset = nft.link.split('/assets/')[1]
              const assetAddress = asset.split('/')[0]
              const tokenId = asset.split('/')[1]

              const TableCellValue = ({
                children,
              }: {
                children: React.ReactNode
              }) => {
                return (
                  <TableCell sx={{ flex: 1 }}>
                    <Link href={`/nft/${assetAddress}?tokenId=${tokenId}`}>
                      {children}
                    </Link>
                  </TableCell>
                )
              }

              return (
                <TableRow key={nft.name + index}>
                  <TableCellValue>{nft.place}</TableCellValue>
                  <TableCellValue>{nft.name}</TableCellValue>
                  <TableCellValue>{nft.collection}</TableCellValue>
                  <TableCellValue>{nft.price}</TableCellValue>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}

export default NFTPage
