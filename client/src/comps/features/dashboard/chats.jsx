import React from 'react'
import Header from "./header";
import styles from './css/dashboardChats.module.css'

const Chats = () => {
  return (
    <>
    <Header />
    <div className={styles.chatsContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.title}>Your Active Chats</div> 
        <div className={styles.content}>
          
        </div>
      </div>
     
      <div className={styles.rightContainer}>
        <div className={styles.title}>
          <h1> Coming Soon... This feature will be provided in the future.</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chats