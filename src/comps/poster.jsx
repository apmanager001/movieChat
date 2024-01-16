import React from 'react';
import styles from './css/poster.module.css';

const Poster = () => {
  return (
    <div className={styles.posterContainer}>
      <img src="./posters/beekeeper.jpg" alt="The Beekeeper Movie Poster" width="500" height="700" />
      <img src="./posters/blackberry.jpg" alt="Blackberry Movie Poster" width="500" height="700" />
      <img src="./posters/Tetris.jpg" alt="Tetris Movie Poster" width="500" height="700" />
      <img src="./posters/meangirls.jpg" alt="Mean Girls Movie Poster" width="500" height="700" />
    </div>
  );
};

export default Poster;
