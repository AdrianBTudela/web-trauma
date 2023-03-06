import React from "react";
import style from './styles/BotonInicio.module.css';


function BotonInicio2 (props){
    
    return(

        <div className={style.portfolioexperiment} onClick={props.handleClick2}>
                <span className={style.text}>¿DÓNDE ENCONTRARNOS?</span>
                <span className={`${style.line} ${style.right}`}></span>
                <span className={`${style.line} ${style.top}`}></span>
                <span className={`${style.line} ${style.left}`}></span>
                <span className={`${style.line} ${style.bottom}`}></span>
        </div>
    );
}

export default BotonInicio2;