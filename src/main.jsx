import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from './components/ScrollTop.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ScrollToTop smooth />
      <ScrollTop/>
    <App />
  </BrowserRouter>,
)
