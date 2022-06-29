import React from 'react'
import styles from './Skill.module.css'
function Skill() {
  return (
    <div className={`conteiner-fluid m-1 ${styles.bgImg} `}>
      <h2 className="text-white">Skills</h2>
       <table className={`table ${styles.bgColor}`}>
        <tbody>
          <tr>
            <th scope="row">Soft Skill</th>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Resolución de problemas y toma de decisiones.</td>
            <td>Capacidad de liderazgo</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Capacidad de comunicación.</td>
            <td>Trabajo en equipo</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Capacidad organizativa.</td>
            <td>Curiosidad y autoaprendisaje</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Capacidad trabajo en equipo</td>
            <td>motivacion</td>
          </tr>
        </tbody>
       {/* tabla 2 */}
      </table>
      <table className={`table ${styles.bgColor}`}>
        <tbody>
          <tr>
            <th scope="row">Hard Skill</th>
          </tr>
          <tr>
            <th scope="row"></th>
            <td> Herramientas ofimáticas</td>
            <td>Office, office 365. Word, Avanzado. Excel, Avanzado. Power Point, 
              Avanzado</td>
            
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Programación</td>
            <td>C#, Java, Python, CSS3, HTML5, JavaScript, C, C++, Prolog, 
              Haskell, SQL.
              Base de datos SQL Server, Post</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Base de datos</td>
            <td>SQL Server, PostgreSQL, MySQL, MongoDB</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Sistemas operativos</td>
            <td>Windows (XP, 7, 10), Linux (Ubuntu), Android.</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Frameworks y librerias</td>
            <td>Bootstrap 3 and 4, .NET Framework (2.0., 3.0, 3.5),React JS, 
            APS.Net MVC Framework, Entity Framework ADO.Net.</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Herramientas e IDE`s</td>
            <td>NetBeans IDE (v6.5.2 en adelante), Visual Studio Code, VirtualBox, 
            VMware Workstation, QlikSense, Visual Studio (v2017, v2019), UML 
            Microsoft Visio, Lucidchart, Cocoa, Balsamiq, Proto.io,Trello, Slack, 
            Azure Gateway(AppService, Azure SQL, Azure synapse 
            analitycs).Git,GitHub,Trello, AWS data Análitycs, AWS Architected.</td>
            </tr>
          <tr>
            <th scope="row"></th>
            <td>Metodologias de trabajo</td>
            <td>Metodología ágil: Scrum y Kanban. Metodologías tradicionales. 
            Metodología y documentación PMO.
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Tecnologia en analisis de datos</td>
            <td>Power BI. Tableau. Google Analitics</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Otros</td>
            <td>Soporte técnico. Creación e implementación de 
            red, armado de cableado. Inteligencia artificial, Business 
            intelligence, Data analytics.</td>
          </tr>
        </tbody>
      </table>
    </div>
   
  )
}

export default Skill