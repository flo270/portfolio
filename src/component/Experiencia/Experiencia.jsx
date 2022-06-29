import React from 'react';
import styles from './Experiencia.module.css'

function Experiencia() {

    return (
      <div className='conteiner.fluid row '>
           <div className="card col-9 bg-dark p-1">
              <div className={`card-header   ${styles.bgImg}`}>
              <h2 className={`text-white d-flex justify-content-center`}>Un poco de mi Curriculum</h2>
              <h2 className={`text-white`}>Experiencia Laboral</h2>
              </div>
              <div className={`card-body  ${styles.bgColor}`}>
                <h5 className="card-title">👩‍💻01.04.2022-Presente |Investigadora graduada UTN-FRT en Agroindustria</h5>
                <p className="card-text">➢ Planificación, investigación, búsqueda de información para la agroindustria.</p>
                <p>➢ Desarrollo y confección de Papers de investigación acorde a tema asignado.</p>
                <p>➢ Participación en eventos de investigación.</p> 
              </div>
              <div className={`card-body ${styles.bgColor}`}>
                <h5 className="card-title">👩‍💻01.04.2022-Presente |Docente adjunta de práctica UTN-FRT en Investigación Operativa</h5>
                <p className="card-text">➢ Programar, coordinar las clases prácticas.</p>
                <p>➢ Armar, dictar, y planificar las actividades acordes al plan anual de la materia.</p>
                <p>➢ Corrección y calificación de los trabajos y actividades de la materia.</p>
                <p>➢ Acompañar la formación de investigación del alumno.</p>
              </div>
              <div className={`card-body ${styles.bgColor}`}>
                <h5 className="card-title">👩‍💻04.04.2017-Presente. |Empleada. Ministerio de Interior de la Comuna de Sacrificio</h5>
                <p className="card-text">➢ Promover la cooperación entre las comunas.</p>
              <p>➢ Documentación administrativa.</p>
              <p>➢ Entendimiento en la formulación de planes y acciones de apoyo.</p>
              <p>➢ Ayuda en la documentación e implementación de estrategias, políticas y mecanismos de desarrollo integral</p>
              </div>
              <div className={`card-body ${styles.bgColor}`}>
                <h5 className="card-title">👩‍💻1-10-2020 - 15-01-2021(4 meses) | Practica supervisada. Estudio contable M&C.</h5>
                  <p className="card-text">➢ Instalación HW y SW.</p>
                  <p>➢ Análisis e implementación de página web de presentación.</p>
                  <p>➢ Análisis e implementación de módulo de sistema de gestión de clientes.</p>
              </div>
              <div className={`card-body ${styles.bgColor}`}>
                <h5 className="card-title">👩‍💻03.2016 - 03.2017 (12 meses) |Empleada. UTN FRT Área TIC’S</h5>
                  <p className="card-text">➢ Soporte técnico y mantenimiento a las redes y hardware instalado</p>
                  <p>➢ Ayuda a los otros departamentos, manejo, instalación y programación de software y soporte al 
                  área de seguridad y mantenimiento de software.</p>
              </div>
          </div>
          <div className={`card col-3 p-1 ${styles.bgCard}`}>
           </div>
      </div>
   
  )
}

export default Experiencia