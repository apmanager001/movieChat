import React, { useState } from 'react';
import styles from '../css/signIn.module.css';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const [isSignIn, setSignIn] = useState(true);

  const handleToggleClick = () => {
    setSignIn((prev) => !prev);
  };

  return (
    <>
      <Header />

      <div className={styles.signInContainer}>
        <div className={styles.container}>
          <div className={`${styles.formContainer} ${!isSignIn ? ' ' + styles.signIn : ''}`}>
            <form>
              <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
              <div className={styles.socialIcons}>
                <Link to='/' className={styles.icon}><FontAwesomeIcon icon={faGoogle} /></Link>
                <Link to='/' className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link to='/' className={styles.icon}><FontAwesomeIcon icon={faGithub} /></Link>
                <Link to='/' className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></Link>
              </div>
              {isSignIn ? (
                <>
                  <span>or use your email and password</span>
                  <input type="text" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <div className={styles.forgotPassword}>
                  <Link  to='/'>Forgot Your Password?</Link></div>
                  <button>Sign In</button>
                </>
              ) : (
                <>
                  <span>or use your email to register</span>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="text" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Repeat Password" />
                  <label for='dob'>Date of Birth:</label>
                  <input type="date" id='dob'></input>
                  <button>Sign Up</button>
                </>
              )}
            </form>
          </div>

          <div className={styles.toggleContainer}>
            <div className={styles.toggle}>
              <div className={`${styles.togglePanel} ${isSignIn ? styles.toggleLeft : styles.toggleRight}`}>
                <h1>{isSignIn ? 'Welcome Back!' : 'Get Started!'}</h1>
                <p>{isSignIn ? 'Already have an account? Click here to log in! ': 'Already have an account? Click here to Sign In!'}</p>
                <button id={styles.toggleButton} className={styles.hidden} onClick={handleToggleClick}>
                  {isSignIn ? 'Create Your Account' : 'Sign In'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignIn;
