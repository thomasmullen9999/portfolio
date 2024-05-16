import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'

function App() {

  return (
    <div id="app">
      <Header/>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      <Footer/>
    </div>
  )
}

export default App
