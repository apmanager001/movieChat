import React, {useState} from 'react'
import profile from "../../assets/profile.jpeg";
import styles from './css/header.module.css'

const Header = () => {
   const [username, setUsername] = useState("Loading...");
   const [dob, setDob] = useState("Loading...");
   const [profileImage, setProfileImage] = useState(null);

  return (
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
    </div>
  )
}

export default Header