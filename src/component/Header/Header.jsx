import React from 'react';
import {Link} from 'react-router-dom'
import styles from './header.module.css'
function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.bgColor}`}>
      <div className="container-fluid text-light">
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center alling-item-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/main' className='nav-link text-light'>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to='/About' className='nav-link text-light'>Resume</Link>
            </li>
            <li className="nav-item">
              <Link to='/Contact' className='nav-link text-light'>Contactame</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header