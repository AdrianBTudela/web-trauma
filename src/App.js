import { Component } from 'react';
import './assets/css/App.css';
import ComponenteInicio from './components/ComponenteInicio'
import {BrowserRouter,Routes,Route} from "react-router-dom";


import Quienes from './components/Quienes';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <NavBar/>
    {/* <div className='container'>
      <ComponenteInicio></ComponenteInicio>
    </div> */}
    </>
  );
}

export default App;
