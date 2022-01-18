import { useRouter } from 'next/router'
import Coin from '../../components/Coin'
import Layout from '../../components/Layout'

const CoinPage = () => {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <Layout>
      <Coin id={id} />
    </Layout>
  )
}

export default CoinPage
