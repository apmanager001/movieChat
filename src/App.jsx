import About from './comps/pages/about'
import { Route, Routes } from "react-router-dom"
import Home from './comps/pages/home'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
