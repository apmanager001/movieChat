import React, {useState, useEffect} from 'react'
import styles from '../../css/settings.module.css'

const Settings = () => {
  const [memberSince, setMemberSince] = useState("Loading...");
  const [dob, setDob] = useState("Loading...");

  const api = ""

  useEffect(() => {
    fetch({ api })
      .then((response) => response.json())
      .then((data) => {
        setMemberSince(data.memberSince);
        setDob(data.dob)
      });
  }, []);


  return (
    <div className={styles.settingsContainer}>
      <div className={styles.title}>
        Settings
      </div>
      <div className={styles.membership}>
        You have been a member since {memberSince}
      </div>
      <div className={styles.dob}>
        Your date of Birth is {dob}
      </div>
      <div className={styles.delete} >
        Delete my account
        <input type="submit" value="Delete" className={styles.deleteButton} />
      </div>
    </div>
  )
}

export default Settings