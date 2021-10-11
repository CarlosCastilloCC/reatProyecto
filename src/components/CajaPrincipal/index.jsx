import "./caja.css";
// import Fondo from "../../assets/images/inicio.jpeg";


function Caja() {
    return (
        <section className="contenedor bg-bn1">
            
                
                    <div className="row">
                        <div className="col-sm col-lg col-md-12 bg-bn1">
                            {/*<img src={Fondo} className=" inicio img-fluid" alt="inicio"/>*/}
                            <button className="Comienza btn btn-primary text-titulo" type="button"  data-toggle="modal" data-target="#exampleModal" >Comienza Ya</button>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-tittle text-titulo" id="exampleModalLabel"> Ingresa tus Datos</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>

                                    </div>

                                    <form>
                                        <div className="form group text-texto">
                                            <label for="exampleInputNombre">Nombre Completo</label>
                                            <input tyoe="email" className="form-control" id="exampleInputNombre"></input>
                                        </div>
                                        <div className="form group text-titulo">
                                            <label for="ExampleInputCorreo">Correo Electronico</label>
                                            <input type="email" className="form-control" id="exampleInputCorreo" aria-describedby="emailHelp"></input>
                                            <small id="emailHelp" className="ford-text text-muted">we´ll never share your</small>
                                        </div>
                                    </form>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">close</button>
                                        <button type="button" className="btn btn-primary">save changes</button>
                                    </div>

                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
               
          
        </section>
       

    
 
    );
}
export default Caja;













