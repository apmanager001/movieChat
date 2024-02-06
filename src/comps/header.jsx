import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import "./css/header.css"

const Header = () => {
  const toggleMenu = () => {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


  return (
    <>
      <div className="header">
                <div className="topnav">
                  <img src="./logo.svg" alt="Logo" />
                  <Link to="/" className="active">Movie Chat</Link>
                  <div className="headerLinks">
                    <Link to="/" >Home</Link>
                    
                    <Link to="/movies" >Movies</Link>
                    <Link to="/events" >Events</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/contact" >Contact</Link>
                    <Link to="/test" >Test</Link>
                    
                  </div>
                  <div className='account'>
                      <Link to="/signIn"> <FontAwesomeIcon className='icon' icon={faUser} />My Account</Link>
                    </div>
                </div>
                <div className='hamburger'>
                  <a className="icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                  </a>
                  <div id="myLinks">
                    <Link to="/signIn" onClick={toggleMenu}> <FontAwesomeIcon className='icon' icon={faUser} /> My Account</Link>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/movies" onClick={toggleMenu}>Movies</Link>
                    <Link to="/events" onClick={toggleMenu}>Events</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    <Link to="/test" onClick={toggleMenu}>Test</Link>
                  </div>
                
              </div> 
       </div>
    </>
  );
};

export default Header;
