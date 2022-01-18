import type { NextPage } from 'next'
import News from '../components/News'
import Layout from '../components/Layout'

const NewsPage: NextPage = () => {
  return (
    <Layout>
      <News />
    </Layout>
  )
}

export default NewsPage
