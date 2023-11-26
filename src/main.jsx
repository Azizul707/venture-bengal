import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthProvider from './auth/AuthProvider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()




ReactDOM.createRoot( document.getElementById( 'root' ) ).render(

  <QueryClientProvider client={ queryClient }>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={ Routes }></RouterProvider>
      </React.StrictMode>,
    </AuthProvider>
  </QueryClientProvider>


)
