import { configureStore } from '@reduxjs/toolkit'

import { globalDataApi } from '../services/globalDataApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
import { nftApi } from '../services/nftApi'
import { nftAssetApi } from '../services/nftAssetApi'

export default configureStore({
  reducer: {
    [globalDataApi.reducerPath]: globalDataApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [nftApi.reducerPath]: nftApi.reducer,
    [nftAssetApi.reducerPath]: nftAssetApi.reducer,
  },
})
