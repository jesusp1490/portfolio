import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import './data/i18n';
import theme from './data/theme';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Lazy load page components
const Home = lazy(() => import('./pages/HomePage/Home'));
const AboutMe = lazy(() => import('./pages/AboutMePage/AboutMe'));
const Services = lazy(() => import('./pages/ServicesPage/Services'));
const Portfolio = lazy(() => import('./pages/PortfolioPage/Portfolio'));
const Contact = lazy(() => import('./pages/ContactPage/Contact'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className='content'>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path='/' element={<Home isMenuOpen={isMenuOpen} />} />
              <Route path='/about' element={<AboutMe />} />
              <Route path='/services' element={<Services />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;