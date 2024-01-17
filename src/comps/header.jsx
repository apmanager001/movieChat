import React from 'react'
import {Link} from 'react-router-dom'
import './css/header.css'

const Header = () => {
  return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid" >
                <h1><Link className="navbar-brand title" to="/">Movie Chat</Link></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarNavDropdown">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link" to="/signIn">Sign In</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Header;