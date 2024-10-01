import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './componets/Recipi/recipi.css'
import {BrowserRouter} from 'react-router-dom'
import GlobalState from './componets/Recipi/Context.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   
    <GlobalState>
    <App />
    </GlobalState>
    
  </BrowserRouter>
)
