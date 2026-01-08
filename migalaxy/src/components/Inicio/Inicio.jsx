import React from 'react'
import { Slider } from '../Slider/Slider'
import { Footer } from '../Footer/Footer'
import { Dedicado } from "../Dedicado/Dedicado"
import { Seccion } from "../Seccion/Seccion"

export const Inicio = () => {
  return (
    <div>
    <Slider/>
  <div >
    <Seccion/>
      </div>
    <Dedicado/>
    
    <Footer/>
    
    </div>

  )
}
