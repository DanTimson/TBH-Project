import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './styles/tailwind.css';
//import App from './App.jsx'
//import InputPageExample from './index.jsx'
import { BrowserRouter } from 'react-router-dom'
import App2 from './App2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </StrictMode>,
)
