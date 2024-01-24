import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../header'
import Footer from '../footer'
import styles from '../css/dashboard.module.css'
import Profile from './dashboardComps/profile'
import Settings from './dashboardComps/settings'

const Dashboard = () => {
    const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  }
  return (
     <>
      <Header />

      <div className={styles.dashboardContainer}>
        <div className={styles.navBar}>
            <h3>Welcome ...!</h3>
          <a href="#profile"  onClick={() => handleLinkClick('profile')}><FontAwesomeIcon icon={faUser} />
            Profile
          </a>
          <a href="#settings" onClick={() => handleLinkClick('settings')}><FontAwesomeIcon icon={faGear} />
            Settings
          </a>
        </div>
        <div className={styles.mainContent}>
          {selectedLink === 'profile' && <Profile />}
          {selectedLink === 'settings' && <Settings />}
        </div>
      </div>

      <Footer />
    </>
    
  )
}

export default Dashboard
