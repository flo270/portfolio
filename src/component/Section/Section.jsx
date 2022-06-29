import React from 'react'
import{Link} from 'react-router-dom';
import perfil from '../../image/perfil.jpg';
import styles from './Section.module.css';

function Section() {
  return (
    <div className={`row m-0 `}>
        <div className={`col-sm-3 `}>
            <div className="card">
            <div className={`card-body ${styles.bgColor}`}>
            <img src={perfil} class={`mx-auto d-block ${styles.img}`} alt="..."/>
            </div>
            </div>
        </div>
        <div className={`col-sm-9`}>
            <div className="card">
            <div className={`card-body ${styles.bgColor}`}>
            <h5 class="card-title text-white">Perfil</h5>
            <p class="card-text text-white">
            Soy Ingeniera en sistemas de información. Mi perfil se enfoca tanto en el área de desarrollo, 
            análisis como en la gestión, ya sea análisis de datos e inteligencia de negocio.
            Soy una persona emprendedora, que me encanta aprender e investigar y aplicar tanto mis conocimientos, 
            así como desarrollarme profesionalmente.
            Mis roles siempre van de la mano del trabajo en equipo, siendo capaz de cumplir cualquier rol. dentro de 
            mi curricula cumplí responsabilidades como el análisis funcional, programación y desarrollo web y de 
            escritorio, así como también testing y análisis y gestión de reportes de datos.
            Considero que puedo aportar valor y crecimiento en una compañía con mis mismos valores y expectativas.
            </p>
            <Link to='/About' className="btn btn-dark">Más sobre mi</Link>
            <Link to='/Proyect1' className={`btn m-3 p-4 ${styles.boton}`}>Mis proyectos</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section