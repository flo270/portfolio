import React from 'react';

import styles from './Card.module.css'
function Card() {
  return (
    <div className="card bg-dark text-white">
    <img src="https://criptomonedaseico.com/wp-content/uploads/2019/02/Ubisoft-Mozilla-IA-para-codificar-750x430.jpg"
    className={`card-img ${styles.img}`} alt="Presentacion de fondo"/>
    <div className="card-img-overlay m-5">
        <h1 className="card-title d-flex justify-content-center p-0  ">¡Hola!, Soy Flavia Medina</h1>
        <h2 className="card-text  d-flex justify-content-center p-0">Ingeniera en sistemas de información</h2>
        <h3 className="card-text  d-flex justify-content-center p-0">Programadora Full stack</h3>
       
    </div>
</div>
  )
}

export default Card