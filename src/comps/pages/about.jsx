import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from '../css/about.module.css'

const About = () => {
  return (
    <>
    <Header />
    <div className={styles.aboutContainer}>About</div>
    <Footer />
    </>
    
  )
}

export default About