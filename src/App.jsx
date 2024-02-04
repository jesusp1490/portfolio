import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutMe from './pages/AboutMePage/AboutMe';
import Services from './pages/ServicesPage/Services';
import Portfolio from './pages/PortfolioPage/Portfolio';
import Contact from './pages/ContactPage/Contact';
import { ThemeProvider } from '@mui/material/styles';
import theme from './data/theme'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
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

export default App
