import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import Quienes from './components/Quienes'
import Servicios from './components/Servicios'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {HashRouter as Router} from "react-router-dom";
import Investigacion from './components/Investigacion';
import Organizacion from './components/Organizacion';
import Contacto from './components/Contacto';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode basename={"/proyectoreact"}>
      <Router>
        {/* <Route path="/" element={ <App /> }></Route>
        <Route path="/App.js" element={ <App /> }></Route>
        <Route path="/Quienes.js" element={ <Quienes/> }></Route>
        <Route path="/Servicios.js" element={ <Servicios/> }></Route>
        <Route path="/Investigacion.js" element={ <Investigacion/> }></Route>
        <Route path="/Organizacion.js" element={ <Organizacion/> }></Route>
        <Route path="/Contacto.js" element={ <Contacto/> }></Route> */}
        <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
