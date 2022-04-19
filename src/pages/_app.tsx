import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { PrismicPreview } from '@prismicio/next'
// import { repositoryName } from '../services/prismicio'
// import '@fontsource/poppins/400.css'
// import "@fontsource/poppins";

import '../styles/slider.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <PrismicPreview repositoryName={process.env.PRISMIC_ENDPOINT}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    // </PrismicPreview>
  )
}

export default MyApp
