import React, {useState, useEffect} from 'react'

import Poster from './poster'
import Events from './events'
import Movies from './movies'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import styles from './css/home.module.css'


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a minimum loading time of 3 seconds
    const minLoadingTime = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Wait for all resources to be loaded
    window.addEventListener("load", () => {
      // Ensure the minimum loading time is respected
      const remainingTime = 3000 - (Date.now() - startTime);
      if (remainingTime <= 0) {
        setIsLoading(false);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    });

    // Record the start time
    const startTime = Date.now();

    return () => clearTimeout(minLoadingTime);
  }, []);



  return (
    <>
      {isLoading ? (
        <div
          className={styles.loadingScreen}
        >
          <div className={styles.loadingMessage}>
            
            <FontAwesomeIcon icon={faFilm} spin />
          </div>
        </div>
      ) : (
        <>
          
          <Poster />
          <Events />
          <Movies />
         
        </>
      )}
    </>
  );
}

export default Home