import About from './comps/pages/about'
import SignIn from './comps/pages/signIn'
import Contact from './comps/pages/contact'
import Test from './comps/test'

import { Route, Routes } from "react-router-dom"
import Home from './comps/pages/home'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        
      </Routes>
    </>
  )
}

export default App
