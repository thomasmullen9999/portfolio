import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PortfolioList from '../components/PortfolioList'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'
import AboutMe from '../components/AboutMe'

function App() {

  return (
    <div id="app">
      <Header/>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/portfolio" element={<PortfolioList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      <Footer/>
    </div>
  )
}

export default App
