import About from './comps/pages/about'
import SignIn from './comps/pages/signIn'
import Contact from './comps/pages/contact'
import Test from './comps/test'
import Movies from './comps/pages/movies'
import EventsPage from './comps/pages/eventsPage'
import Help from './comps/pages/help'
import Dashboard from './comps/pages/dashboard'
import { Route, Routes } from "react-router-dom"
import Home from './comps/pages/home'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
