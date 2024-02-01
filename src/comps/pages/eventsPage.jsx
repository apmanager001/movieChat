import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from '../css/eventsPage.module.css'

const EventsPages = () => {

  return (
    <>
    <Header />
    
        <div className={styles.eventsPageContainer}>
            <div className={styles.title} >
            Coming Soon ...
            </div>
            <div className={styles.event1}>
              
            </div>

        </div>

    <Footer />
    </>

    
  )
}

export default EventsPages