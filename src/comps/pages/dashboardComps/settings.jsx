import React from 'react'
import styles from '../../css/settings.module.css'

const Settings = () => {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.title}>
        Settings
      </div>
      <div className={styles.membership}>
        You have been a member since ...
      </div>
      <div className={styles.dob}>
        Your date of Birth is ...
      </div>
      <div className={styles.delete} >
        Delete my account
        <input type="submit" value="Delete" className={styles.deleteButton} />
      </div>
    </div>
  )
}

export default Settings