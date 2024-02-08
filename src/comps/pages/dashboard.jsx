import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser, faUsers, faMessage, faCertificate, faCalendar } from '@fortawesome/free-solid-svg-icons';
import profile from '../assets/profile.jpeg'
import Header from '../header'
import Footer from '../footer'
import styles from '../css/dashboard.module.css'
import Profile from './dashboardComps/profile'
import Friends from './dashboardComps/friends'
import Chats from './dashboardComps/chats'
import Events from './dashboardComps/events'
import Badges from './dashboardComps/badges'
import Settings from './dashboardComps/settings'

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('profile');
  const [name, setName] = useState("Loading...");
  const [username, setUsername] = useState("Loading...");
  const [dob, setDob] = useState("Loading...");
  const [profileImage, setProfileImage] = useState(null);

  const api = import.meta.env.backend_url;

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  }

  useEffect(() => {
    fetch({ api })
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setDob(date.dob);
        setUsername(data.username);
        setProfileImage(data.profileImage)
      });
  }, []);


  return (
    <>
      <Header />

      <div className={styles.dashboardContainer}>
        <div className={styles.topMain}>
          <div className={styles.image}>
            <img
              src={profileImage ? profileImage : profile}
              alt="Profile Image"
            />
          </div>
          <div className={styles.info}>
            <h2>Welcome {name}!</h2>
            <h3>{username}</h3>
            <h3>{dob}</h3>
          </div>
          <div className={styles.logout}>
            <input href="" id={styles.logout} type="submit" value="Logout" />
          </div>
        </div>
        <div className={styles.navBar}>
          <a href="#profile" onClick={() => handleLinkClick("profile")}>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            Profile
          </a>
          <a href="#friends" onClick={() => handleLinkClick("friends")}>
            <FontAwesomeIcon className={styles.icon} icon={faUsers} />
            Friends
          </a>
          <a href="#chats" onClick={() => handleLinkClick("chats")}>
            <FontAwesomeIcon className={styles.icon} icon={faMessage} />
            Chats
          </a>
          <a href="#events" onClick={() => handleLinkClick("events")}>
            <FontAwesomeIcon className={styles.icon} icon={faCalendar} />
            Events
          </a>
          <a href="#badges" onClick={() => handleLinkClick("badges")}>
            <FontAwesomeIcon className={styles.icon} icon={faCertificate} />
            Badges
          </a>
          <a href="#settings" onClick={() => handleLinkClick("settings")}>
            <FontAwesomeIcon className={styles.icon} icon={faGear} />
            Settings
          </a>
        </div>

        <div className={styles.mainContent}>
          {selectedLink === "profile" && <Profile />}
          {selectedLink === "friends" && <Friends />}
          {selectedLink === "settings" && <Settings />}
          {selectedLink === "chats" && <Chats />}
          {selectedLink === "events" && <Events />}
          {selectedLink === "badges" && <Badges />}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard
