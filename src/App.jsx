import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutMe from './pages/AboutMePage/AboutMe';
import Services from './pages/ServicesPage/Services';
import Portfolio from './pages/PortfolioPage/Portfolio';
import Contact from './pages/ContactPage/Contact';
import Navbar from './components/Navbar/Navbar'; 
import { ThemeProvider } from '@mui/material/styles';
import './data/i18n';
import theme from './data/theme';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> 
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home isMenuOpen={isMenuOpen} />} /> 
            <Route path='/about' element={<AboutMe />} />
            <Route path='/services' element={<Services />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;