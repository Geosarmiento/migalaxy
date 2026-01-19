import React from 'react'
import mujer from "../../assets/img/mujer.png"
import "./slider.css"


export const Slider = () => {
  return (
    <div className='slider'>

        <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                < div className='img1' class="carousel-inner">
                    <div  class="carousel-item active">

                          <div className='container_banner'>
                            <div className='imgg'>
                                <div className='titulo'>
                                    <h1 className='subtitulo'>PÁSATE</h1>
                                    <h1 className='subtitulo'>AL NUEVO</h1>
                                    <h1 className='subtitulo2'>INTERNET</h1>
                                    <h1 className='subtitulo2'>ILIMITADO </h1>
                                    <h1 className='subtitulo3'>+ TV DIGITAL</h1>
                                </div>
                                <img src={mujer} alt='mujer'/>
                          </div>
                          </div>
                    </div>

                    <div class="carousel-item">
                        <img src=""class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                    </div>


                    </div>
                        <div  className= "img2" class="carousel-item">
                        <img src=""class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                    </div>
                    </div>
                </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    </div>
  )
}
