import React from 'react';
import styles from './css/poster.module.css';
import {Link} from 'react-router-dom'

const Poster = () => {
  return (
  <div className={styles.container}>  
    <div className="row-fluid">
    <div className="col-lg-12 col-md-10 ">
        <div className={styles.coverContainer}>
            
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/beekeeper.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/blackberry.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/Tetris.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/meangirls.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/napolean.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/lift.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/nohardfeelings.jpg)'}}></div>
            <div className={styles.coverItem} style={{ backgroundImage: 'url(./posters/equalizer3.jpg)'}}></div>
            <Link to='/signIn'><button type="button" className={styles.buttonSignUp}>Sign Up / Sign In</button></Link>
              
            </div>
    </div>
    </div>
  </div>


  );
};

export default Poster;
