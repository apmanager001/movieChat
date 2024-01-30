import React, {useState} from 'react'
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

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  }
  return (
     <>
      <Header />

      <div className={styles.dashboardContainer}>
        <div className={styles.topMain}>
          <div className={styles.image}> 
            <img src={profile} alt='Profile Image'/>
          </div>
          <div className={styles.info}>
            <h2>Welcome ...!</h2>
              <h3>Username:</h3>
              <h3>DOB:</h3>
          </div>
            
        </div>
        <div className={styles.navBar}>
          <a href="#profile"  onClick={() => handleLinkClick('profile')}><FontAwesomeIcon className={styles.icon} icon={faUser} />
            Profile
          </a>
          <a href="#friends" onClick={() => handleLinkClick('friends')}><FontAwesomeIcon className={styles.icon} icon={faUsers} />
            Friends
          </a>
          <a href="#chats" onClick={() => handleLinkClick('chats')}><FontAwesomeIcon className={styles.icon} icon={faMessage} />
            Chats
          </a>
          <a href="#events" onClick={() => handleLinkClick('events')}><FontAwesomeIcon className={styles.icon} icon={faCalendar} />
            Events
          </a>
          <a href="#badges" onClick={() => handleLinkClick('badges')}><FontAwesomeIcon className={styles.icon} icon={faCertificate} />
            Badges
          </a>
          <a href="#settings" onClick={() => handleLinkClick('settings')}><FontAwesomeIcon className={styles.icon} icon={faGear} />
            Settings
          </a>
        </div>
        
        <div className={styles.mainContent}>
          {selectedLink === 'profile' && <Profile />}
          {selectedLink === 'friends' && <Friends />}
          {selectedLink === 'settings' && <Settings />}
          {selectedLink === 'chats' && <Chats />}
          {selectedLink === 'events' && <Events />}
          {selectedLink === 'badges' && <Badges />}
        </div>
      </div>

      <Footer />
    </>
    
  )
}

export default Dashboard
