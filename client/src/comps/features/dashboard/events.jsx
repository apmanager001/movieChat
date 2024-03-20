import React from 'react'
import Header from "./header";
import styles from './css/dashboardEvents.module.css'

const Events = () => {
  return (
    <>
    <Header />
    <div className={styles.eventsContainer}>
      <div className={styles.title}>
        <h1> Coming Soon... This feature will be provided in the future.</h1>
      </div>
    </div>
    </>
  );
}

export default Events