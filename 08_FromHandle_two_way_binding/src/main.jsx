import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='h-dvh w-full flex items-center justify-between'>
    <App />
  </div>
  
)
