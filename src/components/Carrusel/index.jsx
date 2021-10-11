import "./carrusel.css";
import imagenDos from "../../assets/images/Testimonios2.jpg"

function Carrusel() {
    return (
        <section className="col-sm-12-mb-12-lg-12 carrusel-min">
            <div className="row">
                <div className="col medidas">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">      
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
        
                        <div className="carousel-inner ">
                            

                            <div className="carousel-item active h-5 ">                               
                                <img src={imagenDos} className="  d-block w-100 " alt="..." id="img-carrusel"></img>
                                <div className="carousel-caption  d-md-block"> 
                                <h1 className="text text-titulo"  id="testi">Testimonios</h1>
                          
                          <p className=" text-tamaño text-texto" id="texto">Me pareció genial este curso,porque te explican como hacer
cada ejercicio y además que tiene la posibilidad de descargar
los vídeos es genial porque te facilita mucho los entrenamientos.

                         
                          </p> 
                          <span className="t5 text-muted  text-titulo ">-Sara Ortiz</span> 
                                    
                                    
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <img src={imagenDos} className="d-block w-100" alt="..."  id="img-carrusel"></img>
                                <div className="carousel-caption  d-md-block">
                                <h1 className="text text-titulo"  id="testi">Testimonios</h1>
                           
                          <p className=" text-tamaño text-texto" id="texto">  Me pareció que los ejercicios estaban bien explicados, me gustó mucho, puede hacer ejercicio a mi propio ritmo.

                          
                          </p>
                          <span className=" t5 text-muted  text-titulo ">-Pedro Muñoz</span> 
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <img src={imagenDos} className="d-block w-100" alt="..."  id="img-carrusel"></img>
                                <div className="carousel-caption  d-md-block">
                                <h1 className="text text-titulo"  id="testi">Testimonios</h1>
                         
                         
                          <p className=" text-tamaño text-texto" id="texto">Es lo que estaba buscando ya que esta completo.
                           
                          </p>
                          <span className="t5 text-muted  text-titulo " >-Santiago Gomez</span>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <img src={imagenDos} className="d-block w-100" alt="..."  id="img-carrusel"></img> 
                                <div className="carousel-caption  d-md-block">
                                <h1 className="text text-titulo"  id="testi">Testimonios</h1>
                        
                          <p className=" text-tamaño text-texto" id="texto">Genial, me encanta por que tiene la posibilidad de descarga y ademas que es flexible y totalmente virtual.

                          
                          </p>
                          <span className="t5 text-muted  text-titulo ">-Maria Diaz</span> 
                                </div>
                            </div>

                        </div>

                        {/*<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>*/}
                    </div>
                </div> 
            </div>
        
        </section>
    );
}

export default Carrusel;