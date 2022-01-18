import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { INFTAssetData } from '../../lib/types'
import Layout from '../../components/Layout'
import TraitContainer from '../../components/NFTSingle/TraitContainer'
import CollectionDescription from '../../components/NFTSingle/CollectionDescription'

const NFTPage: NextPage = () => {
  const router = useRouter()
  const address = router.query.address! as string
  const tokenId = router.query.tokenId! as string

  const url = `https://api.opensea.io/api/v1/asset/${address}/${tokenId}`

  const { data, error } = useSWR(address && tokenId ? url : null)

  // const { data, isFetching } = useGetNftAssetQuery({
  //   address,
  //   tokenId,
  // })
  const token: INFTAssetData = data

  const MyAppBar: React.FC = () => {
    return (
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
        {token && (
          <Typography color="text.primary">
            {token.name || token.asset_contract.name + ' #' + tokenId || ''}
          </Typography>
        )}
      </Breadcrumbs>
    )
  }

  if (error) return <>Error</>

  return (
    <Layout appBar={<MyAppBar />}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Box
            sx={{ maxWidth: 600, display: 'inline-block' }}
            className="nft-image"
          >
            {token && (
              <Image
                src={token.image_url}
                alt="Live from space album cover"
                layout="fill"
                objectFit="contain"
              />
            )}
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
        <Grid item xs={12} md={8} xl={10} sx={{}}>
          <Box>
            {token && (
              <>
                <Typography variant="h5" component="h1">
                  {token.name || token.asset_contract.name}
                </Typography>
                <Typography>
                  Collection: {token.collection.name} (
                  {token.asset_contract.symbol})
                </Typography>
                <Typography>ID: {tokenId}</Typography>
                <CollectionDescription {...token} />
                <TraitContainer {...token} />
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default NFTPage
