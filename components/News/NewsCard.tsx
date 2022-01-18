import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { INewsData } from '../../lib/types'

const NewsCard: React.FC<INewsData> = (news) => {
  return (
    <a href={news.articleUrl} target="_blank" rel="noopener noreferrer">
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          height={150}
          image={news.articleImage}
          alt={news.articleTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" className="news-title">
            {/* {news.articleTitle.length > 50
              ? news.articleTitle.slice(0, 47) + '...'
              : news.articleTitle} */}
            {news.articleTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="right">
            {news.articleDate}
          </Typography>
        </CardContent>
      </Card>
    </a>
  )
}

export default NewsCard
