import React from 'react'
import "./seccion.css"



import Newcard from  "../Card/Newcard.jsx"



export const Seccion = () => {
  return (
    <div>
    <div className='seccion'>

      <div className='planes_ilimitados'>
      
        <h2>Planes Ilimitados</h2>
        <h4>Todos nuestros planes son instalados utilizando
            Fibra Optica de alta velocidad</h4>

      </div>
    </div>



    <div className='seccion_card'>
            <div className='seccioni'>
              <Newcard
                titulo="PLAN BRONCE"
                precio="$ 45.000"
                m1="100"
                descripcion="1 PUNTO DE TV DIGITAL HD"
                precio_final="$ 84.900/MES"
               />

               <Newcard
                titulo="PLAN ORO"
                precio="$ 62.430"
                m1="300"
               descripcion="3 PUNTOS DE TV DIGITAL HD"
                 descripcion1="2 PANTALLAS TV APP"
                 descripcion2="WIFI 5G"
                precio_final="$ 124.900/MES"
               />

               
               <Newcard
                titulo="PLAN PLATA"
                precio="$ 75.900"
                m1="200"
                 descripcion="2 PUNTOS DE TV DIGITAL HD"
                 descripcion3="1  PANTALLA TV APP" 

                precio_final="$ 104.900/MES"
               />
               
               
            
            
            </div>

    </div>

    </div>
  )
}
