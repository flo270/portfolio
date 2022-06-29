import React from 'react'
import { Link } from "react-router-dom";
import styles from './Footer.module.css'
function Footer() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light position-fixie start-0 end-0 ${styles.bgColor}`}>
    <div className="container-fluid">
        <ul className='nav'>
            <li className="nav-item">
            <a href="https://www.linkedin.com/in/flavia-alejandra-medina-72b365115/ " className= " text-white m-1" >  LinkedIn |</a> 
            </li>
            <li className="nav-item">
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox " className= " text-white m-1" > flomedina07@gmail.com |</a>
            </li>
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
  </nav>
  )
}

export default Footer