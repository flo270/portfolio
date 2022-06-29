import React from 'react'
import styles from './Formacion.module.css'
function Formacion() {
  return (
    <div className="card">
        <div className={`card-header ${styles.bgImg}`}>
        <h2 className="text-white" >Formacion Academica</h2>
        </div>
        <div className={`card-body ${styles.bgColor}`}>
        <h5 className="card-title">📚UTN-FRT. Ingeniería en sistemas de información. Cursado finalizado en 2020- Recibida el 13-08-2021.Titulo en trámite.</h5>
        </div>
        <div className={`card-body ${styles.bgColor}`}>
        <h5 className="card-title">📚Rolling Code School. Full Stack Developer. (Cursando) 29-11-2021-Actualidad</h5>
        </div>
        <div className={`card-body ${styles.bgColor}`}>
        <h5 className="card-title">📚Investigación UTN-FRT. Formación de investigador mediante proyecto Agroindustria perteneciente a GIITNI.</h5>
        </div>
    </div>
  )
}

export default Formacion