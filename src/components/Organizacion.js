import React, {useState} from "react";
import style from './styles/Organizacion.module.css';
import NavBar from './NavBar';
import OrganizacionButton from "./OrganizacionButton";
import SVG_Organizacion from "./SVG_Organizacion";
import { Plantilla } from "./Plantilla";
import { Asistencia } from "./Asistencia";

function Organizacion(){
    

    const contenido = ["plantilla", "asistencia"];
    const [myContenido, setMyContenido] = useState('');

    return(
        <>
        <div className={style.container}>
            <div>
                <SVG_Organizacion className={style.org}></SVG_Organizacion>
            </div>
            <div className={style.text}>
                <p className={`${style.animateReveal} ${style.animateThird}`}>El Servicio de COT presta atención especializada en el Hospital Arnau de Vilanova y en el Hospital de Liria 
                a una plobación asignada de 320.000 habitantes. La organización y protocolos de asistencia son comunes en ambas sedes.</p>
            </div>

            <div className={style.text2}>
                {contenido.map (contenido =>(
                    <OrganizacionButton onClick={() => setMyContenido(contenido)}>
                        {contenido}
                    </OrganizacionButton>
                ))}
            </div>
            <div>
                {myContenido == "plantilla" && (<><Plantilla></Plantilla></>)}
                {myContenido == "asistencia" && (<><Asistencia></Asistencia></>)}
            </div> 
        </div>
        </>
    );

}


export default Organizacion;