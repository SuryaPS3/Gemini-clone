import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './context/context.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
