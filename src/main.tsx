import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { HeaderHeightProvider } from './contexts/headerHeightContext';

const theme = extendTheme({
  components: {
    Box: {
      baseStyle: {
        fontFamily: 'Roboto, sans-serif',
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HeaderHeightProvider>
        <RouterProvider router={router} />
      </HeaderHeightProvider>
    </ChakraProvider>
  </React.StrictMode>
)
