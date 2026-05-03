import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

import LandingPage from './pages/LandingPage/LandingPage';
import ServicePage from './pages/ServicePage/ServicePage';
import ProductionPage from './pages/ProductionPage/ProductionPage';
import NewsPage from './pages/NewsPage/NewsPage';
import CoursePage from './pages/CoursePage/CoursePage';
import BookingPage from './pages/BookingPage/BookingPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path = '/' element ={<LandingPage />} />
        <Route path = '/service' element ={<ServicePage />} />
        <Route path = '/product' element ={<ProductionPage />} />
        <Route path = '/news' element ={<NewsPage />} />
        <Route path = '/course' element ={<CoursePage />} />
        <Route path = '/booking' element ={<BookingPage />} />
      </Route>
    </Routes>
    
  )
}

export default App
