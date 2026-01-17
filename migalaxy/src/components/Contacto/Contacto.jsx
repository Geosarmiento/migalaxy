import React, { useState } from 'react'
import "./Contacto.css"




export const Contacto = () => {

        const [formulario, setFormulario ] = useState({
          nombre:"",
          email:"",
          mensaje:""
        });


        const handleSubmit = (e) => {
          e.preventDefault(); // evita recarga de la página

              if (!formulario.nombre || !formulario.email || !formulario.mensaje) {
                alert("Todos los campos son obligatorios");
                return;
              }
              if(!validarFormulario()) return;

        console.log("Datos enviados:", formulario);

        // limpiar formulario
        setFormulario({
          nombre: "",
          email: "",
          mensaje: ""
        });
       };


      // Validacion de formulario
      const [errores, setErrores]= useState({})
      const validarFormulario = ()=>{
          const nuevoserrores = {};

          if(!formulario.nombre.trim()) {
            nuevoserrores.nombre = "El nombre es Obligatorio"
          }

          if (!formulario.email.trim()) {
            nuevoserrores.email = "El email es obligatorio";
          } else if (!/\S+@\S+\.\S+/.test(formulario.email)) {
            nuevoserrores.email = "Email no válido";
          }

          if (!formulario.mensaje.trim()) {
            nuevoserrores.mensaje = "El mensaje es obligatorio";
          }

          setErrores(nuevoserrores);

          return Object.keys(nuevoserrores).length === 0;

        
        };  
        
        
        
        return (
    <div className='formulario'>

      <h2>Formulario de Contacto </h2>
      <h4>Dejanos tus comentarios y <br />pronto estaremos en contacto</h4>


      
      <div className='formulario_container'>


        <form onSubmit={handleSubmit}>
          <div>
          <div className='campo'>
          <input 
              type="text"
              placeholder='Nombre' 
              value={formulario.nombre}
              onChange={(e)=>{
                setFormulario({...formulario, nombre: e.target.value })
              }}/>
            {errores.nombre && <p className='error'>{errores.nombre}</p>}
              </div> 
          

          <div className='campo'>
          <input 
              type="email"
              placeholder='Email' 
              value={formulario.email}
              onChange={(e)=>{
                setFormulario({...formulario, email: e.target.value })
              }}/>    
            {errores.email && <p className='error'>{errores.email}</p>}
          </div>


              <div className='campo'>
          <textarea 
              name="mensaje" 
              id=""
              value={formulario.mensaje}
              onChange={(e)=>{
                setFormulario ({...formulario, mensaje: e.target.value})
              }}
              ></textarea>
             {errores.mensaje && <p className='error'>{errores.mensaje}</p>}
</div>

            <button 
              type='submit'>Enviar

          </button>

              </div>
          </form>


          


      </div>
      




    
    
    
    </div>
  )
}
