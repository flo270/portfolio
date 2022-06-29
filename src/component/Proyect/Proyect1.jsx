import React from 'react';
import inicio from '../../image/inicio.PNG';
import iniciogl from '../../image/gcInicio.PNG';
import lp from '../../image/lp.PNG';
import loginGC from '../../image/loginGC.PNG';
import ri from '../../image/ri.PNG';
import esmision from '../../image/esmision.PNG';
import ecMas from '../../image/ecMas.PNG';
import clienteGC from '../../image/clienteGC.PNG'
import styles from './Proyect.module.css';

function Proyect1() {
  return (
    <div className={`conteiner-fluid ${styles.bgColor}`}>
        <h1 className={`${styles.bgImg}`}>Algunos proyectos</h1>
        <div className={`card-group ${styles.bgColor}`}>
        <div className={`card ${styles.bgColor}`}>
            <img src={inicio} className="card-img-top" alt="proyecto1"/>
            <div className="card-body">
            <h5 className="card-title">Sistema de gestion y monitoreo inteligente, articulado a smart band y a la implementacion de inteligencia de negocios.</h5>
            <p className="card-text">🔗Descripcion:
                <br />-Sistema creado para el manejo de pacientes neonatos del hospital nuestra señora de la merced en San Miguel de Tucuman, Tucuman, Argentina.
                <br />-El SISTEMA DE GESTIÓN Y MONITOREO INTELIGENTE es un sistema que permitirá dar seguimiento las constante vitales (presión arterial, frecuencia cardiaca, oxígeno en sangre, temperatura, etcétera) de los pacientes internados en terapia intensiva. Su función principal es ayudar al personal de la salud a recabar información y a perdurar la misma, con el fin de llevar un monitoreo constante del paciente.
            </p>
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Leer mas </button>
            
                {/* <!-- Modal --> */}
                <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark" id="exampleModalLabel">Mas detalle</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-dark">
                       <p>🔗Principales caracteristicas:
                        <br /> -Permitia el alta,baja y modificacion de pacientes.(CRUD).
                        <br /> -Manejo de historia clinica.
                        <br /> -Manejo de internacion en terapia intensiba UTIN.
                        <br /> -Gestion de medicacion, Control medico y de estudios.
                        <br /> -Gestion y monitoreo de signos vitales articulado con smart band y aplicativo para las mediciones en sistema android.
                        <br />🔗 Mi rol: 
                        <br />-Creador del sistema, lider y desarrollador, asi tambien como despliegue y testing (debido a falta de personal)
                        <br />🔗Mi responsabilidad:
                        <br />-Liderar al equipo, inspirarlos y organizarlos para el manejo de las tareas.
                        <br />-Multitarea en remplazos por baja de participantes.
                        <br />-Colaboradora en el analisis y documentacion asi como en testing y codificacion.
                        <br />-Implementacion absoluta de reportes e informes con inteligencia de negocio en tiempo real.
                        <br />🔗 Mis entregables:
                        <br />-Desarrollo del sistema de gestion y monitoreo inteligente.
                        <br /> -Testing y despliegue.
                        <br /> -Armado de informes acorde a la calidad y solicitud del ministerio de salud de la provincia.
                        <br />-Capacitacion para el manejo del sistema.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
        <div className={`card ${styles.bgColor}`}>
            <img src={iniciogl} className="card-img-top " alt="proyecto2"/>
            <img src={clienteGC} alt="imgABMcliente" />
            <div className="card-body">
            <h5 className="card-title">Modulo Gestion de Cliente para Estudio Contable M&C</h5>
            <p className="card-text"><br />🔗Descripcion:
          <br />Modulo de gestion de cliente para el manejo interno de estudio contable M&C.
           <br /> Permite el alta,baja y modificacion de clientes, 
          segun categoria. Regimen impositivo: alta,baja y modoficacion, pagos, montos y fechas. </p>
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal2">
                Ver Mas
                </button>
            </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="modal2Label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark" id="modal2Label">Mas detalle</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body bg-dark">
                       <img src={loginGC} alt="loginGC" className="w-75 h-75"/>
                       <p>Módulo de gestión de clientes.
                           <br /> -Manejo de clientes. (CRUD): Se permite ingresar un cliente según su categoría en la AFIP, modificar su estado, así como detallar o eliminar al mismo.
                           <br /> -Manejo de diferentes impuestos(CRUD): Ingreso de impuesto acorde a la categizacion y fechas de pago, así como la necesidad del cliente.
                           <br /> -Manejo de fechas límites para pago: para recordatorio del contador y sus asociados.</p>
                        <img src={ri} alt="loginGC" className="w-75 h-75"/>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                       
                    </div>
                    </div>
                </div>
                </div>
        </div>
        <div className={`card ${styles.bgColor}`}>
            <img src={lp} className="card-img-top" alt="proyecto3"/>
            <div className="card-body">
            <h5 className="card-title">Pagina presentacion Estudio Contable M&C</h5>
            <p className="card-text"> <br />🔗Descripcion:
          <br />Realizacion de una pagina de presentacion para el estudio contable M&C.Lading Page.</p>
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalLP">
                Ver Mas
                </button>
            </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="modalLP" tabindex="-1" aria-labelledby="modalLPLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark" id="modalLPLabel">Mas detalle</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body bg-dark">
                       <img src={esmision} alt="loginGC" className="w-75 h-75"/>
                       <p>Descripcion de la mision,vision,valores y objetivos del estudio contable</p>
                        <img src={ecMas} alt="loginGC" className="w-75 h-75"/>
                        <p>Presentacion breve de las actividades que realizan.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>  
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
    </div>
    
  )
}

export default Proyect1