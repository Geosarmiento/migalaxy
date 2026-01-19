import React from 'react'
import "./card.css"


export const Card = () => {
  return (

    <div className='contenedor_general'>
      
      <div className='card_container'>

          <div className='name_plan'>
            
            <div className='plan'> 
              <h5>PLAN BRONCE</h5>
            </div>
          
          </div>

          <div className='precio_promo'>
            $ 42.450
            
          </div>
          <p className='textp'>EL PRIMER MES</p>

<div className='contenedori'>

          <div className='description'>
            <p className='incluye'> INCLUYE</p>

            
            <div className='megas'>
              <span className='check'>✔</span> 
              <p className='m1'>100</p>
              <p className='m2'> MEGAS</p>
            </div>
            
            
            <p> <span className='check'>✔</span> 1 PUNTO DE TV DIGITAL HD</p>
          </div>

          <div className='precio_promo'>
            $ 84.900
          </div>

          <><div>
            <p className='textp'>VALOR A CANCELAR A PARTIR DEL 
              <p className='textpS'>SEGUNDO MES</p></p></div></>

      </div>
</div>
</div> 

)
}
