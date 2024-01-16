import React from 'react';
import styles from './css/movies.module.css';

const Movies = () => {
  return (
    <div className={styles.moviesContainer}>
        
        <img src="./posters/barbie.jpg" alt="Barbie Movie Poster" width="250" height="350" />
        <img src="./posters/oppenheimer.png" alt="Oppenheimer Movie Poster" width="250" height="350" />
        <img src="./posters/godfather.jpg" alt="The Godfather Movie Poster" width="250" height="350" />

    </div>
  )
}

export default Movies