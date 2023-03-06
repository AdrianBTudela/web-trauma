import React, {useEffect, useState} from "react";
import './styles/NavBar.css';
import BurguerButton from './BurguerButton'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import Quienes from "./Quienes";
import Servicios from "./Servicios";
import Investigacion from "./Investigacion";
import Organizacion from "./Organizacion";
import App from "../App";
import ComponenteInicio from "./ComponenteInicio";
import useScreenSize from "./useScreenSize";


function NavBar(){

    const [clicked,setClicked] = useState(false);
    const handleClick = () =>{
        setClicked(!clicked)
    }

    const width = useScreenSize();

    console.log(`width: ${width}`);
    
        return(
            <>
            <nav>
                <img id="LogoNav" src={require('./images/LogoNav.png')} alt=""></img>
                <div className={`links ${clicked ? 'active' : ''}`}>
                {/* <React.StrictMode basename={"/proyectoreact"}>
                    <Link className="nav-link" to='/App.js'>INICIO</Link>
                    <Link className="nav-link" to="/Quienes.js" element={<Quienes/>}>¿QUIÉNES SOMOS?</Link>
                    <Link className="nav-link" to='/Servicios.js'>CARTERA SERVICIOS</Link>
                    <Link className="nav-link" to='/Investigacion.js'>INVESTIGACIÓN</Link>
                    <Link className="nav-link" to='/Organizacion.js'>ORGANIZACION</Link>
                </React.StrictMode> */}
                    <Link className="nav-link" onClick={width < 868 ? handleClick : null} to='/'>INICIO</Link> 
                    <Link className="nav-link" onClick={width < 868 ? handleClick : null} to='/quienes'>¿QUIÉNES SOMOS?</Link>
                    <Link className="nav-link" onClick={width < 868 ? handleClick : null} to='/servicios'>CARTERA SERVICIOS</Link>
                    <Link className="nav-link" onClick={width < 868 ? handleClick : null} to='/investigacion'>INVESTIGACIÓN</Link>
                    <Link className="nav-link" onClick={width < 868 ? handleClick : null} to='/organizacion'>ORGANIZACION</Link>
                </div> 
                <div className="burguer">
                    <BurguerButton clicked={clicked} handleClick={handleClick} ></BurguerButton>
                </div>
                <div className={`initial ${clicked ? 'active' : ''}`}>
                </div>
            </nav>
            <Routes>
                    <Route path="/" element={<ComponenteInicio/>}></Route>
                    <Route path="/quienes" element={<Quienes/>}></Route>
                    <Route path="/servicios" element={<Servicios/>}></Route>
                    <Route path="/investigacion" element={<Investigacion/>}></Route>
                    <Route path="/organizacion" element={<Organizacion/>}></Route>
            </Routes>
            </>
        );
    }
export default NavBar;