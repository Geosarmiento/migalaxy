 import React from 'react'
 import { Link } from "react-router-dom"
 import "./menu.css";
 import logo from "../../assets/img/logo.png"
 
 export const Menu= () =>{

    return(
     <div>

      <div className='logo'>
            <div className='logo_text'>
                <img  src={logo}  alt='logo'/>
                <p>+57 301 919 63 31</p>
             </div>     
      </div>
      
    <div className="menu">

        <nav className="menu_nav">
                <Link to="/">Inicio</Link>
                <Link to="/Empresa">Empresa</Link>
                <Link to="/Servicios">Servicios</Link>
                <Link to="/Contacto">Contacto</Link>
        </nav>
    </div>

    </div>
  )
}