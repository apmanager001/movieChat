import { useState } from 'react';
import api from '../api';
import styles from '../css/signIn.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGoogle,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const navigate = useNavigate();
  const [isSignIn, setSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    console.log('Trying post request');
    try {
      const response = await api.post('signin/', { email, password });
      console.log('Response status from signin: ', response.status);
      if (response.status === 200) {
        navigate('/dashboard');
      } else if (response.status === 400) {
        navigate('');
      }
    } catch (error) {
      console.log('Caught error\n', error.response);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('signup/', {
        username,
        firstName,
        lastName,
        email,
        password,
      });
      console.log('Response status from signup: ', response.status);
    } catch (error) {
      console.log('Caught error\n', error.response);
    }
  };

  const handleToggleClick = () => {
    setSignIn((prev) => !prev);
  };

  return (
    <>
      <div className={styles.signInContainer}>
        <div className={styles.container}>
          <div
            className={`${styles.formContainer} ${
              !isSignIn ? ' ' + styles.signIn : ''
            }`}
          >
            <form onSubmit={isSignIn ? handleSignIn : handleSignUp}>
              <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
              <div className={styles.socialIcons}>
                <Link
                  to='/'
                  className={styles.icon}
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </Link>
                <Link
                  to='/'
                  className={styles.icon}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  to='/'
                  className={styles.icon}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  to='/'
                  className={styles.icon}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
              {isSignIn ? (
                <>
                  <span>or use your email and password</span>
                  <input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className={styles.forgotPassword}>
                    <Link to='/'>Forgot Your Password?</Link>
                  </div>
                  <button>Sign In</button>
                </>
              ) : (
                <>
                  <span>or use your email to register</span>
                  <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Repeat Password'
                  />
                  <label htmlFor='dob'>Date of Birth:</label>
                  <input
                    type='date'
                    id='dob'
                  ></input>
                  <button>Sign Up</button>
                </>
              )}
            </form>
          </div>

          <div className={styles.toggleContainer}>
            <div className={styles.toggle}>
              <div
                className={`${styles.togglePanel} ${
                  isSignIn ? styles.toggleLeft : styles.toggleRight
                }`}
              >
                <h1>{isSignIn ? 'Welcome Back!' : 'Get Started!'}</h1>
                <p>
                  {isSignIn
                    ? 'Already have an account? Click here to log in! '
                    : 'Already have an account? Click here to Sign In!'}
                </p>
                <button
                  id={styles.toggleButton}
                  className={styles.hidden}
                  onClick={handleToggleClick}
                >
                  {isSignIn ? 'Create Your Account' : 'Sign In'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
