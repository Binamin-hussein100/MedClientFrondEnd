import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'

// import './styles/tailwind.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <NextUIProvider>
      <App />
    </NextUIProvider>
  </Router>
    
)
