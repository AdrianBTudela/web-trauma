import React from "react";
import style from './styles/OrganizacionButton.module.css';



const OrganizacionButton = ({type, variant, className, id, onClick, children}) => {

    return(
        <>
        <div className={style.wrap}>
            <button className={style.button} onClick={onClick}>{children}</button>
        </div>
        </>

    );
};


export default OrganizacionButton;
