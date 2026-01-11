import React from 'react'
import "./newcard.css"

const Newcard = ({ titulo, precio, m1, descripcion, precio_final,
                                        descripcion1, descripcion2,descripcion3

}) => {
  return (
    <div className='conta'>

        <div className='card_container'>

            <div className='card_titulo'>{titulo}</div>

            <div className='precio'>
                {precio}
                <h6>EL PRIMER MES</h6>
            </div>



            <div className='detalles'>
                
                <p className='incluye'> INCLUYE</p>

                <div className='megas'>
                    <span className='check'>✔</span> 
                    <p className='m1'>{m1}</p>
                    <p className='m2'> MEGAS</p>

                </div>
                <div>
                    <p> <span className='check'>✔</span> {descripcion} </p>
      {descripcion1 &&     <p> <span className='check'>✔</span> {descripcion1}</p>}
  {descripcion2 &&  <p> <span className='check'>✔</span> {descripcion2}</p>}
 {descripcion3 &&   <p> <span className='check'>✔</span> {descripcion3}</p>}
                </div>
            </div>
            {/* detalles */}



            <div className='precio_final'>

                    {precio_final}
                <div>
                    <h6>VALOR A CANCELAR A PARTIR DEL SEGUNDO MES</h6>
                </div>
                
            </div>


            </div>
    </div>
  )
}

export default Newcard