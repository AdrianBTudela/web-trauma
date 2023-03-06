import React from "react";
import style from './styles/BotonInicio.module.css';


function BotonInicio (props){
    
    return(

        <div className={style.portfolioexperiment} onClick={props.handleClick}>
                <span className={style.text}>¿QUE ES LA TRAUMATOLOGÍA?</span>
                <span className={`${style.line} ${style.right}`}></span>
                <span className={`${style.line} ${style.top}`}></span>
                <span className={`${style.line} ${style.left}`}></span>
                <span className={`${style.line} ${style.bottom}`}></span>
        </div>
    );
}

export default BotonInicio;