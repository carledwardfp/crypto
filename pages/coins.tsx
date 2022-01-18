import type { NextPage } from 'next'
import Coins from '../components/Coins'
import Layout from '../components/Layout'

const CoinsPage: NextPage = () => {
  return (
    <Layout>
      <Coins all />
    </Layout>
  )
}

export default CoinsPage
