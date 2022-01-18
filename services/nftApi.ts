import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { NFT_STATS_HEADERS } from '../lib/constants'

const baseUrl = 'https://nft-stats.p.rapidapi.com/NFT'

const createRequest = (url: string) => ({
  url,
  headers: NFT_STATS_HEADERS,
})

export const nftApi = createApi({
  reducerPath: 'nftApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 3 * 60, // 3 minutes
  endpoints: (builder) => ({
    getNft: builder.query({
      query: (filter) => createRequest(`/topNFTs/?Filter=${filter || '7d'}`),
    }),
  }),
})

export const { useGetNftQuery } = nftApi
