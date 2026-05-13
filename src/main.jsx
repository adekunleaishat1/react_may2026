import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import Home from './Home'
import Landingpage from './Landingpage'
import Variables from './Components/Variables'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <App></App> */}
    {/* <Home/>
    <Landingpage/> */}
    <Variables/>
  </StrictMode>,
)
