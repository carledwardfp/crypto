import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const nftApiHeaders = {
  'x-rapidapi-host': 'nft-stats.p.rapidapi.com',
  'x-rapidapi-key': 'cd484d72d6mshc82a7c11a8ab623p134785jsna429cba131d6', // TODO: process.env
}

const baseUrl = 'https://nft-stats.p.rapidapi.com/NFT'

const createRequest = (url: string) => ({
  url,
  headers: nftApiHeaders,
})

export const nftApi = createApi({
  reducerPath: 'nftApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 3 * 60, // 3 minutes
  endpoints: (builder) => ({
    getNft: builder.query({
      query: (filter) => createRequest(`/topNFTs/?Filter=${filter || '7d'}`),
      // transformResponse: (response) => { return await axios.get(response)}
    }),
  }),
})

export const { useGetNftQuery } = nftApi
