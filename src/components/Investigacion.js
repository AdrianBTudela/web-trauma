import React from "react";
import style from './styles/Investigacion.module.css';
import NavBar from './NavBar';
import SVG_Grupo from './SVG_Grupo'
import SVG_Premio from './SVG_Premio'

function Investigacion(){
    
    return(
        <>
        <div className={style.container}>
           <div className={style.bloc}>
                <div className={style.nuevo}>
                    <div className={style.svg}>
                        <SVG_Grupo className={style.grupo}/>
                    </div>
                    <div className={style.texto}>
                    <h1>Áreas prioritarias de investigación del grupo</h1>
                            <ul>
                                <li>Etiología de la Escoliosis idiopática.</li>
                                <li>Estudio de los pares de fricción metal-metal y cerámica-metal en prótesis total de cadera.</li>
                                <li>Factores psicológicos en el dolor y discapacidad en las enfermedades musculoesqueléticos.</li>
                                <li>Tratamiento del dolor lumbar.</li>
                                <li>Realidad virtual como herramienta de asistencia en planificación preoperatoria y ejecución intraoperatoria.</li>
                                <li>Fisiopatología y tratamiento del dolor femoropatelar.</li>
                                <li>Mejora de las competencias formativas en educación médica.</li>
                                <li>Estrategia big-data y redes neuronales en el estudio de imagen de la columna vertebral.</li>
                                <li>Uso de la impresión 3D por FDM para la generación de biomodelos mecánicos custom made.</li>
                            </ul>
                    </div>
                </div>
           </div>
           <div className={style.bloc2}>
                <div className={style.nuevo}>
                    <div className={style.svg}>
                        <SVG_Premio className={style.premio}/>
                    </div>
                    <div className={style.texto}>
                        <h1>Áreas prioritarias de investigación del grupo</h1>
                            <ul>
                                <li>Premio Best in class mejor Servicio COT 2008.</li>
                                <li>En dos ocasiones Best paper award EUROSPINE European Spine Society.</li>
                                <li>En ocho ocasiones Premio mejor comunicación Congreso Sociedad Española Columna vertebral GEER.</li>
                                <li>En cinco ocasiones Premio mejor comunicación en Congreso Sociedad Valenciana Cirugía Ortopédica y Traumatologia SOTOCAV.</li>
                                <li>En tres ocasiones premio Mejor comunicación Sociedad Española Investigación en Cirugia Ortopédica y Traumatologica INVESCOT.</li>
                                <li>Patellofemoral Lifetime Achievement Award (Dr V Sanchis) de la American Academy Orthopedic Surgeons (AAOS).</li>
                            </ul>
                    </div>
                </div>
           </div>
        </div>
        </>
    );

}

export default Investigacion;