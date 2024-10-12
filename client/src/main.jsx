import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto px-6'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </StrictMode>
  </div>
)