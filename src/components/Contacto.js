import React, {useState} from "react";
import NavBar from './NavBar';
import style from './styles/Contacto.module.css';
import SVG_Ubicacion from "./SVG_Ubicacion";
import SVG_Numero from "./SVG_Numero";

function Contacto(){
    
    return(
        <>
        <NavBar/>
        <div className={style.orden}>
                <div className={style.container}>
                    <div className={style.svg}>
                        <SVG_Ubicacion className={style.ubi}/>
                    </div>
                    <div className={style.texto}>
                        <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=hospital%20arnau%20de%20vilanova+(Hospital%20Arnau%20de%20Vilanova)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a>
                        </iframe>
                    </div>
                </div>  

                <div className={style.container2}>
                <div className={style.svg2}>
                        <SVG_Numero className={style.numero}/>
                    </div>
                    <div className={style.texto2}>
                        <div className={style.num}>
                            <a className={style.numa}href="tel:961-976-000">961976000</a>
                        </div>
                    </div>
                </div>
        </div> 
        </>
    );

}

export default Contacto;