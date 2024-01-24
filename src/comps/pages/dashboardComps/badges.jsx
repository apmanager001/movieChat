import React from 'react'
import styles from '../../css/badges.module.css'
import badge from '../../assets/badge.jpeg'

const Badges = () => {
    const imageSources = Array.from({ length: 20 }, (_, index) => badge);
  return (
    <div className={styles.badgesContainer}>
       <div className={styles.title}>
            Badges
        </div> 
        <div className={styles.badges}>
            {imageSources.map((source, index) => (
            <img key={index} src={source} alt={`Image ${index + 1}`} />
        ))}
        </div>
    </div>
  )
}

export default Badges