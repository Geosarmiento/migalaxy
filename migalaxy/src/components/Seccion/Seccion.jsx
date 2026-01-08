import React from 'react'
import "./seccion.css"
import { Card } from  "../Card/Card.jsx"
import { Card1 } from  "../Card/Card1.jsx"

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
              
              <Card/>
              <Card1/>
              <Card/>
          </div>

    </div>

    </div>
  )
}
