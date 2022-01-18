import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { INFTData } from '../../lib/types'

const NFTCard: React.FC<INFTData> = (nft) => {
  return (
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardHeader
        title={<Typography variant="h6">{nft.name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.primary">
            {nft.collection}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Price (24h) Vol: {nft.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NFTCard
