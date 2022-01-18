import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { EmotionCache } from '@emotion/react'
import { Provider } from 'react-redux'
import { SWRConfig } from 'swr'
import axios from 'axios'

import store from '../lib/store'
import PageProvider from '../contexts/PageProvider'

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: React.FC<MyAppProps> = ({
  Component,
  pageProps,
  emotionCache,
}) => {
  return (
    <SWRConfig
      value={{
        dedupingInterval: 60 * 1000, // 60 seconds
        refreshInterval: 60 * 1000, // 60 seconds
        fetcher: (url, headers) =>
          axios.get(url, { headers: headers }).then((res) => res.data),
      }}
    >
      <Provider store={store}>
        <PageProvider emotionCache={emotionCache}>
          <Component {...pageProps} />
        </PageProvider>
      </Provider>
    </SWRConfig>
  )
}

export default MyApp
