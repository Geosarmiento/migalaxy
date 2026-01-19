import React from 'react'
import "./card.css"


export const Card1 = () => {
  return (

    <div className='contenedor_general'>
      
      <div className='card_container'>

          <div className='name_plan'>
            
            <div className='plan'> 
              <h5>PLAN ORO</h5>
            </div>
          
          </div>

          <div className='precio_promo'>
            $ 62.430
            
          </div>
          <p className='textp'>EL PRIMER MES</p>

<div className='contenedori'>

          <div className='description'>
            <p className='incluye'> INCLUYE</p>

            
            <div className='megas'>
              <span className='check'>✔</span> 
              <p className='m1'>400</p>
              <p className='m2'> MEGAS</p>
            </div>
            
            
            <p> <span className='check'>✔</span> 3 PUNTOS DE TV DIGITAL HD</p>
            <p> <span className='check'>✔</span> 2 PANTALLAS TV APP</p>
            <p> <span className='check'>✔</span> WIFI 5G</p>
          </div>

          <div className='precio_promo'>
            $ 124.900/MES
          </div>

          <><div>
            <p className='textp'>VALOR A CANCELAR A PARTIR DEL 
              <p className='textpS'>SEGUNDO MES</p></p></div></>

      </div>
</div>
</div> 

)
}
