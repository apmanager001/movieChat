import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from '../css/about.module.css'

const About = () => {
  return (
    <>
    <Header />
    <div className={styles.aboutContainer}>
      
      <div className={styles.about}>
        <div className={styles.section}>
          <div className={styles.image}></div>
          <div className={styles.text}>
              <h2>About Us</h2>
              <span>Our Goal is to provide help people connect over their love of movies. We provide the ability to watch great movies and chat in realtime when others were watching the same movie. </span>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
    
  )
}

export default About