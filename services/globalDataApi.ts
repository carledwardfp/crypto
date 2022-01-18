import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { COIN_RANKING_HEADERS } from '../lib/constants'

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({
  url,
  headers: COIN_RANKING_HEADERS,
})

export const globalDataApi = createApi({
  reducerPath: 'globalDataApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 3 * 60, // 3 minutes
  endpoints: (builder) => ({
    getGlobalData: builder.query({
      query: () => createRequest('/coins?limit=100'),
    }),
    getCoinData: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCoinPriceHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
})

export const {
  useGetGlobalDataQuery,
  useGetCoinDataQuery,
  useGetCoinPriceHistoryQuery,
} = globalDataApi
