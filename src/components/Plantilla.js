import React from 'react'
import style from './styles/Plantilla.module.css';
import SVG_Plantilla from './SVG_Plantilla';

export const Plantilla = () => {


  return (
    <div>
        <div className={style.cont}>
            <div className={style.d1}><SVG_Plantilla className={style.hos}/></div>   
            <div className={style.pan}>
                <div className={style.blo1}>
                    <h1>Jefe de Servicio</h1>
                    <div className={style.txt}>
                    <ul>
                        <li>Julio Domenech Fernández.</li>
                    </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Jefes de Sección</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Antonio Darder Prats.</li>
                            <li>María José Sanguesa Nebot.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Médicos especialistas en COT</h1>
                    <div className={style.txt}>
                    <ul>
                            <li>Alejandro Álvarez LLanas.</li>
                            <li>Javier Colado Domínguez.</li>
                            <li>Javier Coloma Saiz.</li>
                            <li>Rafael Fernández Gabarda.</li>
                            <li>Joan Ferrás Tarragó.</li>
                            <li>Javier García Laguarta.</li>
                            <li>Elena Gallego Márquez.</li>
                            <li>Víctor Gómez Cambronero.</li>
                            <li>Daniel Herrero Mediavilla.</li>
                            <li>Marcos López Vega.</li>
                            <li>Francisco López Viñas.</li>
                            <li>José María Martínez Costa.</li>
                            <li>Ignacio Miranda Gómez.</li>
                            <li>Inmaculada Montón Martínez.</li>
                            <li>Marta Moreno Vadillo.</li>
                            <li>Susana Moro Martín.</li>
                            <li>Isabel Olmo Valeriano.</li>
                            <li>Belén Porcar Vilar.</li>
                            <li>Juan Redín Huarte.</li>
                            <li>Alejandro Roselló Añón.</li>
                            <li>Vicente Sanchis Alfonso.</li>
                            <li>Esteban Tortosa Sipán.</li>
                            <li>Laura Vila Cabrera.</li>
                            <li>Emilio Villanueva García.</li>
                    </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Médicos internos residentes</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Ana Monis García</li>
                            <li>Jorge Sanz Romera.</li>
                            <li>Caterina Chiappe.</li>
                            <li>Rocío Valverde.</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}
