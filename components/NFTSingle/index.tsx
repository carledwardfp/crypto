import Link from 'next/link'

import Appbar from '@mui/material/Appbar'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { INFTAssetData } from '../../lib/types'
import { useGetNftAssetQuery } from '../../services/nftAssetApi'
import Image from 'next/image'

interface NFTProps {
  address: string
  tokenId: string
}

const NFT: React.FC<NFTProps> = ({ address, tokenId }) => {
  const { data, isFetching } = useGetNftAssetQuery({
    address,
    tokenId,
  })
  const token: INFTAssetData = data
  console.log(token)

  if (isFetching) return <>Loading...</>

  return (
    <>
      <Appbar
        color="default"
        position="sticky"
        elevation={0}
        sx={{
          height: 60,
          width: '100%',
          top: 56,
          backgroundColor: 'white',
          zIndex: 50,
        }}
      >
        <Toolbar>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              zIndex: 5,
            }}
          >
            <Link href="/nft" passHref>
              <MuiLink underline="hover" color="inherit" component="a">
                NFT
              </MuiLink>
            </Link>
            <Typography color="text.primary">
              {token.name || token.asset_contract.name + ' #' + tokenId}
            </Typography>
          </Breadcrumbs>
        </Toolbar>
      </Appbar>
      <Box>
        <Grid container>
          <Grid
            item
            xs
            sx={{
              position: 'sticky',
              top: 120,
              left: 200,
              width: '100%',
              display: 'inline-block',
            }}
          >
            <Box
              sx={{ maxWidth: 600, display: 'inline-block' }}
              className="nft-image"
            >
              <Image
                src={token.image_url}
                alt="Live from space album cover"
                layout="fill"
              />
            </Box>
            <Box
              sx={{
                flexDirection: 'column',
                width: '100%',
                display: 'inline-block',
              }}
            >
              <Typography variant="body2"></Typography>
            </Box>
          </Grid>
          <Grid item xs="auto" sx={{ minHeight: '100vh' }}>
            <Box></Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default NFT
