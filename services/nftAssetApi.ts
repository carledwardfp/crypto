import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.opensea.io/api/v1/asset'

const createRequest = (url: string) => ({
  url,
})

export const nftAssetApi = createApi({
  reducerPath: 'nftAssetApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 3 * 60, // 3 minutes
  endpoints: (builder) => ({
    getNftAsset: builder.query({
      query: ({ address, tokenId }) => createRequest(`/${address}/${tokenId}`),
      // transformResponse: (response) => { return await axios.get(response)}
    }),
  }),
})

export const { useGetNftAssetQuery } = nftAssetApi
