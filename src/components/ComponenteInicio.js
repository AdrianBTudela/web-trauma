import React, {useState} from "react";
import BotonInicio from "./BotonInicio";
import BotonInicio2 from "./BotonInicio2";
import BotonInicio3 from "./BotonInicio3";
import style from './styles/ComponenteInicio.module.css';

function ComponenteInicio(){
    
    const [clicked,setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(!clicked)
    }

    const [clicked2,setClicked2] = useState(false);
    const handleClick2 = () =>{
        setClicked2(!clicked2)
    }

    const [clicked3,setClicked3] = useState(false);
    const handleClick3 = () =>{
        setClicked3(!clicked3)
    }

    return(
        <>
        <div className={style.container}>
            <div className={style.titulo}>
                <h5 className={`${style.animateReveal} ${style.animateFirst} ${style.glow}`}>SERVICIO DE CIRUGÍA ORTOPÉDICA Y TRAUMATOLOGÍA</h5>
            </div>

            <div className={style.cont}>
                <div className={style.text}>
                    <BotonInicio clicked={clicked} handleClick={handleClick}></BotonInicio>
                    {clicked == true && (<><p className={`${style.animateReveal} ${style.animateThird}`}>La Cirugía Ortopédica y Traumatología se define como “la especialidad que incluye la prevención, la valoración clínica, el diagnóstico, el tratamiento quirúrgico y no quirúrgico, y el seguimiento hasta el restablecimiento de la función y trastornos funcionales adquiridos del aparato locomotor y de sus estructuras definitivo, por los medios adecuados definidos por la lex artis de la comunidad de especialistas, de los procesos congénitos, traumáticos, infecciosos, tumorales, metabólicos, degenerativos y de las deformidades asociadas”</p></>)}
                    {/* <p className={`${style.animateReveal} ${style.animateThird}`}>La Cirugía Ortopédica y Traumatología se define como “la especialidad que incluye la prevención, la valoración clínica, el diagnóstico, el tratamiento quirúrgico y no quirúrgico, y el seguimiento hasta el restablecimiento de la función y trastornos funcionales adquiridos del aparato locomotor y de sus estructuras definitivo, por los medios adecuados definidos por la lex artis de la comunidad de especialistas, de los procesos congénitos, traumáticos, infecciosos, tumorales, metabólicos, degenerativos y de las deformidades asociadas”</p> */}
                </div>
                <div className={style.text}>
                    <BotonInicio2 clicked2={clicked2} handleClick2={handleClick2}></BotonInicio2>
                    {clicked2 == true && (<>
                    <p className={`${style.animateReveal} ${style.animateThird}`}>
                    El Servicio de Cirugía Ortopédica y Traumatología del Hospital Arnau de Vilanova-Lliria desarrolla 
                    su actividad asistencial en:
                    <ul>
                        <li>Hospital Arnau de Vilanova</li>
                        <li>Hospital de Lliria</li>
                        <li>Centro de Especialidades de Burjasot</li>
                        <li>Centro de Salud Integrado de Lliria.</li>
                    </ul></p></>)}
                    {/* El Servicio de Cirugía Ortopédica y Traumatología del Hospital Arnau de Vilanova-Lliria desarrolla 
                    su actividad asistencial en:
                    <ul>
                        <li>Hospital Arnau de Vilanova</li>
                        <li>Hospital de Lliria</li>
                        <li>Centro de Especialidades de Burjasot</li>
                        <li>Centro de Salud Integrado de Lliria.</li>
                    </ul> */}
                </div>
            </div>  
            <div className={style.trab}>
                <div className={style.btn3}><BotonInicio3 clicked3={clicked3} handleClick3={handleClick3}></BotonInicio3></div>
                {clicked3 == true && (<>
                    <div className={`${style.pan} ${style.animateReveal} ${style.animateThird}`}>
                        <div className={style.blo1}>
                            <h1>Área quirúrgica</h1>
                            <div className={style.txt}>
                                <p>
                                    Primando el objetivo de mantener la excelencia en la técnica quirúrgica incorporando aquellas novedades que una especialidad en constante evolución requiere, para resolver los problemas simples y difíciles. Manteniendo las directrices de cirugía segura.
                                    Con 18 quirófanos de Ortopedia y 8 de Traumatología de Urgencias diferidas a la semana. En el año 2021, aún con restricciones y suspensiones por Covid, se realizaron más de 2300 intervenciones quirúrgicas, más de 750 por cirugía ambulatoria.
                                    En 2021, aún con las restricciones de Covid, se realizaron 2350 intervenciones, 760 fueron intervenidos por cirugía sin ingreso. Se realizaron 172 artroplastias de rodilla, y se intervinieron 372 fracturas de cadera.
                                </p>
                            </div>         
                        </div>
                        <div className={style.blo2}>
                            <h1>Hospitalización</h1>
                            <div className={style.txt}>
                                <p>Realizamos nuestra actividad coordinados antes y después de la cirugía con Medicina Interna, Radiología y Rehabilitación. Nos ayuda esto a acelerar la recuperación y reincorporación a la vida habitual de los pacientes.</p>
                            </div>
                        </div>
                        <div className={style.blo1}>
                            <h1>Interconsultas Hospitalarias</h1>
                            <div className={style.txt}>
                                <p>Convencidos de que la atención multidisciplinaria con otros servicios permite un mejor manejo del paciente. Atendimos 500 interconsultas hospitalarias en 2021</p>
                            </div>
                        </div>
                        <div className={style.blo2}>
                            <h1>Urgencias hospitalarias</h1>
                            <div className={style.txt}>
                                <p>Actuando como consultores en pacientes traumatológicos leves y como responsables de fracturas y traumatismos graves.
                                Se ingresaron 700 pacientes</p>
                             </div>
                        </div>
                        <div className={style.blo1}>
                            <h1>Consultas Externas</h1>
                            <div className={style.txt}>
                                <p>La asistencia basada en la medicina basada en la evidencia buscando en cualquier caso lo mejor para el paciente.
                                En 2021 se realizaron 33.800 asistencias.</p>
                            </div>
                        </div>
                    </div>
                </>)}
                {/* <div className={style.pan}>
                    <div className={style.blo1}>
                        <h1>Área quirúrgica</h1>
                        <div className={style.txt}>
                            <p>
                                Primando el objetivo de mantener la excelencia en la técnica quirúrgica incorporando aquellas novedades que una especialidad en constante evolución requiere, para resolver los problemas simples y difíciles. Manteniendo las directrices de cirugía segura.
                                Con 18 quirófanos de Ortopedia y 8 de Traumatología de Urgencias diferidas a la semana. En el año 2021, aún con restricciones y suspensiones por Covid, se realizaron más de 2300 intervenciones quirúrgicas, más de 750 por cirugía ambulatoria.
                                En 2021, aún con las restricciones de Covid, se realizaron 2350 intervenciones, 760 fueron intervenidos por cirugía sin ingreso. Se realizaron 172 artroplastias de rodilla, y se intervinieron 372 fracturas de cadera.
                            </p>
                        </div>         
                    </div>
                    <div className={style.blo2}>
                        <h1>Hospitalización</h1>
                        <div className={style.txt}>
                            <p>Realizamos nuestra actividad coordinados antes y después de la cirugía con Medicina Interna, Radiología y Rehabilitación. Nos ayuda esto a acelerar la recuperación y reincorporación a la vida habitual de los pacientes.</p>
                        </div>
                    </div>
                    <div className={style.blo1}>
                        <h1>Interconsultas Hospitalarias</h1>
                        <div className={style.txt}>
                            <p>Convencidos de que la atención multidisciplinaria con otros servicios permite un mejor manejo del paciente. Atendimos 500 interconsultas hospitalarias en 2021</p>
                        </div>
                    </div>
                    <div className={style.blo2}>
                        <h1>Urgencias hospitalarias</h1>
                        <div className={style.txt}>
                            <p>Actuando como consultores en pacientes traumatológicos leves y como responsables de fracturas y traumatismos graves.
                            Se ingresaron 700 pacientes</p>
                        </div>
                    </div>
                    <div className={style.blo1}>
                        <h1>Consultas Externas</h1>
                        <div className={style.txt}>
                            <p>La asistencia basada en la medicina basada en la evidencia buscando en cualquier caso lo mejor para el paciente.
                            En 2021 se realizaron 33.800 asistencias.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        </>
    );

}

export default ComponenteInicio;