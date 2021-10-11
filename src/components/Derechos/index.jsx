import "./derechos.css";

function Derechos() {
    return (
        <section className="bg-azul " >
    <div className="container" id="final">
      <div className="row" id="final">
        <div className="">
          
            <ul className="mt-4 contenido mb-3 text-texto ">
                <a className="mapa"><i className="fas fa-map-marker-alt"></i>Medellin-Antioquia</a><br></br>
                <a className="tele"><i className="fas fa-phone-alt"></i>Telefono: 5216127</a><br></br>
                <a><i className="fas fa-envelope"></i> Correo: <a href="link" className="correo">janda.fit01@gmail.com</a> </a>
                
           
            </ul>
          
        </div>
        
       <div className="col footer1" >
        
           <p className="footer text-texto">
           
             l 2020 Derechos Reservados l JAnDafit
          
         </p>
       
        
       </div>
       <div className="">
         
         <ul className="iconos">
          <a href="link"  className="fabook"><i className="fab fa-facebook  mb-3 fa-2x fa-lg" ></i>  </a> 
          
         <a href="link"  className="instagram"> <li className=" fab fa-instagram  ml-3 mb-3 fa-2x fa-lg "></li> </a> 
          
          </ul>
       </div>
      </div>
    </div>
  </section>
    );
}

export default Derechos;