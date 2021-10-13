import "./descripcion.css";
import video from "../../assets/video/video.mp4";

function Descripcion() {
    return (
        <section className="s2" id="acerca">
           
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
                        <ul className="l1 text-texto text-white">Somos un curso online donde te podrás empezar a ejercitarte de una manera muy sencilla y práctica, sin necesidad de dirigirte a un gym, lo podrás hacer desde la comodidad de tu casa y a la hora que desees.</ul>
                        <ul className="l2 text-texto text-white">Solo tendrás que seleccionar el calendario de entrenamiento que más se adapte a ti.</ul>
                        <ul className="l3 text-texto text-white">Puedes adquirir nuestro producto desde computador, celular o Tablet.</ul>
                       
            
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 text-center mt-lg-5">
                        <div className="d-flex justify-content-center">
                            <video className="video mt-3 mb-4 pb-lg-5 img-fluid" controls>
                            <source src={video} type="video/mp4"></source>
                            </video>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Descripcion;