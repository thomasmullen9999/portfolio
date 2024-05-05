import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from '../components/Header'
import Home from '../components/Home'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

function App() {

  return (
    <div id="app">
      <Header/>
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
