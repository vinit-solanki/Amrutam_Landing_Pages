import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import DiscoverPage from './components/DiscoverPage'
import QuotesPage from './components/QuotesPage'
import BookingPage from './components/BookingPage'
import ApproachesPages from './components/ApproachesPages'
import ReviewsPage from './components/ReviewsPage'
import ExpertsPage from './components/ExpertsPage'
import MobileAppPage from './components/MobileAppPage'
import Footer from './components/Footer'
function App() {
  return (
    <div className='w-screen min-h-screen overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <DiscoverPage/>
      <QuotesPage/>
      <BookingPage/>
      <ApproachesPages/>
      <ReviewsPage/>
      <ExpertsPage/>
      <MobileAppPage/>
      <Footer/>
    </div>
  )
}

export default App