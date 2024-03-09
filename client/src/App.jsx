import react, {useState} from 'react'
import About from "./comps/pages/about";
import SignIn from "./comps/pages/signIn";
import Contact from "./comps/pages/contact";
import Test from "./comps/test";
import Movies from "./comps/pages/movies";
import EventsPage from "./comps/pages/eventsPage";
import Help from "./comps/pages/help";
import Dashboard from "./comps/features/dashboard/dashboard";
import { Route, Routes } from "react-router-dom";
import Home from "./comps/mainpage/home";
import Header from "./comps/header";
import Footer from "./comps/footer";
import Sidebars from "./sidebar";
import styles from './sidebar.module.css'
import Settings from './comps/features/dashboard/settings';
import Chats from './comps/features/dashboard/chats';
import Events from './comps/features/dashboard/events';
import Friends from './comps/features/dashboard/friends';
import Profile from './comps/features/dashboard/profile';
import Badges from './comps/features/dashboard/badges';
import "./App.css";

function App() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = (value) => {
      setCollapsed(value);
    };
  return (
    <>
      <Sidebars collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

      <div className={collapsed ? styles.collapsed : styles.notCollapsed}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/help" element={<Help />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
