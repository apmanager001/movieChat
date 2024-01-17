import About from './comps/pages/about'
import SignIn from './comps/pages/signIn'
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
      </Routes>
    </>
  )
}

export default App
