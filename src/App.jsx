import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Brands from './pages/Brands'
import LogoPreloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'  // Import the new component
import { AnimatePresence } from 'framer-motion'

function App() {
  const [pageLoaded, setPageLoaded] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    // Reset the page loaded state on route change
    setPageLoaded(false)
    
    // Set page as loaded after a delay to allow preloader to work
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 1100) // Adjusted to match preloader duration (1000ms) + small buffer
    
    return () => clearTimeout(timer)
  }, [location.pathname])
  
  return (
    <div className="flex flex-col min-h-screen">
      <LogoPreloader />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      
      <AnimatePresence mode="wait">
        <div 
          style={{ 
            opacity: pageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out' // Faster fade-in transition
          }}
          className="flex flex-col min-h-screen"
        >
          <Navbar />
          <main className="flex-grow">
            
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/brands" element={<Brands />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App