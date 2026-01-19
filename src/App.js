import {Routes, Route, Navigate } from "react-router-dom";
import {Inicio} from "./components/Inicio/Inicio.jsx"
import {Empresa} from "./components/Empresa/Empresa.jsx"
import {Servicios} from "./components/Servicios/Servicios.jsx"
import {Contacto} from "./components/Contacto/Contacto.jsx"
import {Menu} from "./components/Menu/Menu"
import "./App.css";


function App() {
  return (
    <div className="App">
  <Menu/>

     <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Empresa" element={<Empresa/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
     </Routes>

   

      
    </div>
  );
}

export default App;
