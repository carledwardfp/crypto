import type { NextPage } from 'next'
import Layout from '../components/Layout'

import Box from '@mui/material/Box'

const ErrorPage: NextPage = () => {
  return (
    <Layout>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ xs: 'calc(100vh - 92px)', sm: 'calc(100vh - 108px)' }}
      >
        Page Coming soon
      </Box>
    </Layout>
  )
}

export default ErrorPage
