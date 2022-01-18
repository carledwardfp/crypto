import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const globalDataApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'cd484d72d6mshc82a7c11a8ab623p134785jsna429cba131d6', // TODO: process.env
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({
  url,
  headers: globalDataApiHeaders,
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
