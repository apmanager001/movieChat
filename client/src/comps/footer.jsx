import React from 'react'
import {Link} from 'react-router-dom'
import styles from './css/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.footer}>

      <div className={styles.columnOne}>
        <ul>
          <li className={styles.footerItem}> F.A.Q </li>
          <li className={styles.footerItem}> Legal</li>
        </ul>
      </div>
      <div className={styles.columnTwo}>
        <ul>
          <Link to='/help'><li className={styles.footerItem}>Help</li></Link>
          <Link to="/contact"><li className={styles.footerItem}>Contact</li></Link>
          <Link to="/about"><li className={styles.footerItem}>About</li></Link>
        </ul>
      </div>
      <div className={styles.columnThree}>
        <ul>
          <Link to='/signIn'><li className={styles.footerItem}>Account</li></Link>
          <Link to='/movies'><li className={styles.footerItem}>Movies</li></Link>
          <li className={styles.footerItem}>Theater</li>
        </ul>
      </div>
      
      </div>

    </div>
  )
}

export default Footer