import './App.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutMe from './pages/AboutMePage/AboutMe';
import Services from './pages/ServicesPage/Services';
import Portfolio from './pages/PortfolioPage/Portfolio';
import Contact from './pages/ContactPage/Contact';
function App() {

  return (
    <Router>
      <div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
