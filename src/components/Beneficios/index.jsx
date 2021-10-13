import "./beneficios.css";
import Salud from "../../assets/images/salud.png"

function Beneficios() {
    return (
        <section >
            <div className="container" id="beneficio">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-12" >
                        <img  src={Salud} className="salud "    alt=""/>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 caja-beneficios">
                    <h2 className="titulo1 mt-4 ml-3 mb-3 text-center text-titulo">Beneficios</h2>
                     <p className=" titulo2 mb-3 text-muted  text-center text-texto">
                       <li className="li-1">Entrena en el horario que desees. </li> 
                       <li className="li-2">Videos de entrenamiento con facilidad de descarga. </li> 
                       <li className="li-3">Tres calendarios de entrenamiento diferente
                            (Principiante,Intermedio,Experto). </li> 
                       <li className="li-4">Al momento de inscribirte tendrás losvideos de
                            entrenamiento para realizarlos con quien quieras. </li> 
                       <li className="li-5">Mejoramiento de estado físico.  </li> </p>
                    </div>
                </div>
            </div>
      
                       
        </section>
    );
}

export default Beneficios;