import React from 'react'
import Header from './header'
import Footer from './footer'
import styles from './css/test.css'

const Test = () => {

    const tmdbKey = 'api_key=1fc53c33be744b8cd2b702107b8e336e';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const popMovies = '/discover/movie?sort_by=popularity.desc&'
    const popBase = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1fc53c33be744b8cd2b702107b8e336e'
    //const popBase = tmdbBaseUrl+popMovies+tmdbKey

    const imageBase = 'https://image.tmdb.org/t/p/w500'

    const main = document.getElementById('main')

    getMovies(popBase)

    function getMovies(url) {
        
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.results)
           showMovies(data.results);
        })
    }

    function showMovies(data) {
        main.innerHTML = ``;
        data.forEach(movie => {
            const {title,poster_path, vote_average, overview} = movie;
            const movie1 = document.createElement('div');
            movie1.classList.add('movie');
            movie1.innerHTML = `
            
                <img src='${imageBase+poster_path}' alt='${title}' />
            
                <div class='movie-info'>
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average} </span>
                </div>
                <div class='overview'>
                    <h3>Summary</h3>
                ${overview}
                </div>
            
            `
            main.appendChild(movie1);
        })
    }

    function getColor(vote) {
        if(vote>=8){
            return `green`
        } else if(vote>=5){
            return 'orange'
        } else {
            return 'red'
        }
    }
    


  return (
    <>
    <Header />
    
    <header>
        <form  id="form">
            <input type="text" placeholder="Search" id="search" class="search" />
        </form>
    </header>

    <div id="tags"></div>
    <div id="myNav" class="overlay">

        
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      
        
        <div class="overlay-content" id="overlay-content"></div>
        
        <a href="javascript:void(0)" class="arrow left-arrow" id="left-arrow">&#8656;</a> 
        
        <a href="javascript:void(0)" class="arrow right-arrow" id="right-arrow" >&#8658;</a>

      </div>
    <main id="main">




    </main>
    <div class="pagination">
        <div class="page" id="prev">Previous Page</div>
        <div class="current" id="current">1</div>
        <div class="page" id="next">Next Page</div>

    </div>
    

    <Footer />
    </>
    
  )
}

export default Test