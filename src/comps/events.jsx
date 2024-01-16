import React from 'react'
import styles from './css/events.module.css'

const Events = () => {
  return (
    <div className={styles.container}>

        <div className={styles.event1}>March 30th</div>
        <div className={styles.event2}>April 15th</div>
        <div className={styles.event3}>April 30th</div>

        <div className={`${styles.eventText1} ${styles.text}`}>We are watching Blackberry as a community. Come join!</div>
        <div className={`${styles.eventText2} ${styles.text}`}>Come join us to watch Tetris.</div>
        <div className={`${styles.eventText3} ${styles.text}`}>Amazing movie, come join us to watch Oppenheimer</div>
    </div>
  )
}

export default Events