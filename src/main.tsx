import React from 'react'
import ReactDOM from 'react-dom/client'
import CountApp from './CountApp.tsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountApp/>
  </React.StrictMode>,
)
