import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './css/header.module.css';

const Header = () => {
  

  useEffect(() => {
    const menuIcon = document.getElementById('toggleMenu');
    const mobileLinksContainer = document.getElementsByClassName(styles.mobileLinks);

    const handleMenuToggle = () => {
      // Iterate over the collection and toggle the class for each element
      for (let i = 0; i < mobileLinksContainer.length; i++) {
        mobileLinksContainer[i].classList.toggle(styles.show);
      }
      menuIcon.classList.toggle(styles.open);
    };

    menuIcon.addEventListener('click', handleMenuToggle);

    return () => {
      menuIcon.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="./logo.svg" alt="Logo" />
        </div>
        <div className={styles.title}>
          <Link to='/'>Movie Chat</Link>
        </div>

        <div className={styles.hamburger}>
          <a className={styles.icons} id='toggleMenu'>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        
          <div className={`${styles.home} ${styles.mobileLinks}`}>
            <Link to='/'>Home</Link>
          </div>
          <div className={`${styles.movies} ${styles.mobileLinks}`}>
            <Link to="/about">Movies</Link>
          </div>
          <div className={`${styles.about} ${styles.mobileLinks}`}>
            <Link to="/about">About</Link>
          </div>
          <div className={`${styles.contact} ${styles.mobileLinks}`}>
            <Link to='/contact' >Contact</Link>
          </div>
          <div className={`${styles.account} ${styles.mobileLinks}`}>
            <Link to="/signIn"><FontAwesomeIcon className={styles.icon} icon={faUser} />
              Account
            </Link>
          </div>
          <div className={`${styles.test} ${styles.mobileLinks}`}>
            <Link to="/test">Test</Link>
          </div>
        
      </div>
    </>
  );
};

export default Header;
