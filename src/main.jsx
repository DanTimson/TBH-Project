import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './styles/tailwind.css';
//import App from './App.jsx'
import InputPageExample from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InputPageExample />
  </StrictMode>,
)
