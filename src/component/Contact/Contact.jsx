import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={`${styles.bgImg}`}>
      <div className={`card ${styles.bgImg}`}>
        <div className="card-header">
          ¿Quieres contactarme? Mandame un mensaje!👇
        </div>
        <div className="card-body">
          <h5 className="card-title">Puedes enviarme un mail o buscarme por mis redes sociales</h5>
          <p className="card-text">Clickea para enviarme un mail. Mi mail:flomedina07gmail.com</p>
          <a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser" className="btn btn-dark m-1">📧Enviar mail</a>
          <a href="https://www.linkedin.com/in/flavia-alejandra-medina-72b365115/ " className= " btn btn-dark text-white m-1" >LinkedIn</a>
        </div>
        <a className="d-flex justify-content-center" href="https://www.linkedin.com/in/flavia-alejandra-medina-72b365115/overlay/1635494587100/single-media-viewer/"><button className="btn btn-dark">Descarga Mi curriculum</button></a>
      </div>
    </div>
    
  )
}

export default Contact