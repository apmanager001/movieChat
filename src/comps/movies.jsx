import React from 'react';
import styles from './css/movies.module.css';

const Movies = () => {
  return (
    <div className={styles.moviesContainer}>
        
        <div class="card" className={styles.cards} style={{width: "250px"}}>
          <img src="./posters/barbie.jpg" class="card-img-top" alt="Barbie Movie Poster" />
          <div className="card-body">
            <h5 className="card-title">Barbie</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Take Me there</a>
          </div>
        </div>

        <div class="card" className={styles.cards} style={{width: "250px"}}>
          <img src="./posters/oppenheimer.png" class="card-img-top" alt="Oppenheimer Movie Poster" />
          <div className="card-body">
            <h5 className="card-title">Oppenheimer</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Take Me there</a>
          </div>
        </div>

        <div class="card" className={styles.cards} style={{width: "250px"}}>
          <img src="./posters/godfather.jpg" class="card-img-top" alt="The Godfather Movie Poster" />
          <div className="card-body">
            <h5 className="card-title">The Godfather</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Take Me there</a>
          </div>
        </div>

        <div class="card" className={styles.cards} style={{width: "250px"}}>
          <img src="./posters/Tetris.jpg" class="card-img-top" alt="Tetris Movie Poster" />
          <div className="card-body">
            <h5 className="card-title">Barbie</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Take Me there</a>
          </div>
        </div>

        <div class="card" className={styles.cards} style={{width: "250px"}}>
          <img src="./posters/napolean.jpg" class="card-img-top" alt="Napolean Movie Poster" />
          <div className="card-body">
            <h5 className="card-title">Oppenheimer</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Take Me there</a>
          </div>
        </div>

        <div class="card" className={styles.cards} style={{width: "250px"}}>
          <img src="./posters/nohardfeelings.jpg" class="card-img-top" alt="No Hard Feelings Movie Poster" />
          <div className="card-body">
            <h5 className="card-title">No Hard Feelings</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Take Me there</a>
          </div>
        </div>
    </div>
  )
}

export default Movies