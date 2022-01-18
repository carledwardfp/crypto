import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

import NewsCard from './NewsCard'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'
import { INewsData } from '../../lib/types'

interface NewsProps {
  all?: boolean
}

const News: React.FC<NewsProps> = ({ all = false }) => {
  const { data: news, isFetching } = useGetCryptoNewsQuery({})

  let newsList = news

  if (!all) {
    newsList = news?.slice(0, 6)
  }

  return (
    <>
      <Box
        color="secondary"
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Grid container spacing={2} alignItems="stretch">
          {isFetching &&
            Array.from({ length: all ? 18 : 6 }).map((_, index) => (
              <Grid item xs={6} md={4} xl={2} key={index}>
                <Skeleton
                  variant="rectangular"
                  height={260}
                  sx={{ borderRadius: 1 }}
                />
              </Grid>
            ))}
          {!isFetching &&
            newsList?.map((news: INewsData) => (
              <Grid item xs={6} md={4} xl={2} key={news.articleTitle}>
                <NewsCard {...news} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default News
