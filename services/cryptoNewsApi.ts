import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
  'x-rapidapi-host': 'latest-crypto-news.p.rapidapi.com',
  'x-rapidapi-key': 'cd484d72d6mshc82a7c11a8ab623p134785jsna429cba131d6', // TODO: process.env
}

const baseUrl = 'https://latest-crypto-news.p.rapidapi.com/newsbtc'

const createRequest = (url: string) => ({
  url,
  headers: cryptoNewsApiHeaders,
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
