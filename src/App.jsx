/* eslint-disable no-unused-vars */
import React, {lazy, Suspense} from 'react'
import './App.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './pages/About/AboutPage'
// import HomePage from './pages/Home/HomePage'
// import ServicesPage from './pages/Services/ServicesPage'
// import EventsPage from './pages/Events/EventsPage'
// import ContactPage from './pages/Contact/ContactPage'
import {Route, Routes} from 'react-router-dom'
import Donate from './pages/Donate/Donate';


const loadingStyle = {
  color: '#000',
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'center'
}


const HomePage = lazy(() => import("./pages/Home/HomePage"))
const ServicesPage = lazy(() => import("./pages/Services/ServicesPage"))
const EventsPage = lazy(() => import("./pages/Events/EventsPage"))
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"))

function App() {


  return (
    <>

      <Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/events' element={<EventsPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/donate' element={<Donate/>}/>
        </Routes>
      </Suspense>
      
    </>
  )
}

export default App
