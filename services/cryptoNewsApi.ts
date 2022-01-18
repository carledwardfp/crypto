import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CRYPTO_NEWS_HEADERS } from '../lib/constants'

const baseUrl = 'https://latest-crypto-news.p.rapidapi.com/newsbtc'

const createRequest = (url: string) => ({
  url,
  headers: CRYPTO_NEWS_HEADERS,
})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 3 * 60, // 3 minutes
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/crypto/latest'),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
