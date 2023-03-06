import React from "react";
import style from './styles/Quienes.module.css';
import NavBar from './NavBar';
import SVG_User from './SVG_User'
import SVG_Service from "./SVG_Service";
import SVG_Valors from "./SVG_Valors";
import SVG_Vision from "./SVG_Vision";

function Quienes(){
    
    return(
        <>
            <div className={style.orden}>
                <div className={style.container}>
                    <div className={style.svg}>
                        <SVG_User className={style.user}/>
                    </div>
                    <div className={style.texto}>
                        La plantilla del Servicio de Cirugía Ortopédica y Traumatología está compuesta por 27 facultativos: 1 Jefe de Servicio, 2 Jefes de Sección y 24 médicos especialistas en COT. El Servicio de COT da formación MIR en COT a 2 residentes por año que están plenamente integrados en las labores asistenciales e investigadoras.
                    </div>
                </div>  
                <div className={style.container}>
                    <div className={style.svg}>
                        <SVG_Service className={style.service}/>
                    </div>
                    <div className={style.texto}>
                        El Servicio de Cirugía Ortopédica y Traumatología (COT) del Departamento Valencia Arnau-Lliria esta integrado en dos hospitales públicos, el H Arnau de Vilanova y el H de Lliria, pertenecientes a la Agencia Valenciana de Salud. El Servicio de COT presta atención sanitaria universal, integral, personalizada y en régimen comunitario, de urgencia, ambulatorio, hospitalización y domiciliario. Aplica medios preventivos, diagnósticos, curativos, quirúrgicos, ortopédicos y rehabilitadores, garantizando la continuidad asistencial con el fin de alcanzar el máximo índice de salud de su población. Como Servicio Clínico, desarrolla investigación y docencia pre y post grado en el ámbito de las ciencias de la salud. Todas sus actividades se orientan a satisfacer las necesidades y expectativas de la población, con criterios de equidad y máxima eficiencia, apoyándose para ello en el compromiso activo e implicación de todo su equipo de personas.
                    </div>
                </div>  
                <div className={style.container}>
                    <div className={style.svg}>
                        <SVG_Vision className={style.vision}/>
                    </div>
                    <div className={style.texto}>
                        <div className={style.entrada}>Queremos un Servicio que:</div>
                            <ul>
                                <li>Reconozca a las personas como elemento clave para ofrecer una atención de calidad.</li>
                                <li>Integre el trabajo en equipo interdisciplinar como respuesta a las diversas necesidades de los enfermos y sus familias.</li>
                                <li>Genere Medicina basada en la evidencia, desde estrategias de investigación y de formación continuada.</li>
                                <li>Atienda las demandas sociales y respete el entorno medioambiental.</li>
                            </ul>
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.svg}>
                        <SVG_Valors className={style.valor}/>
                    </div>
                    <div className={style.texto}>
                        Nuestros valores surgen de una concepción humanista, integral y ética de la atención sanitaria, y por tanto asumimos, como base para conseguir nuestros objetivos y garantizar una respuesta adecuada a las demandas de la sociedad:
                            <ul>
                                <li>El respeto a las personas y la escucha activa de todos aquellos que la necesiten.</li>
                                <li>El trabajo en equipo interdisciplinar.</li>
                                <li>La Medicina basada en la evidencia.</li>
                                <li>El compromiso social y medioambiental.</li>
                            </ul>
                    </div>
                </div>       
            </div>
        </>
    );

}

export default Quienes;