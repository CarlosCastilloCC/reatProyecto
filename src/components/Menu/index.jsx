import "./menu.css"
import Logo from "../../assets/images/Logo2.png";


function Menu() {
    return(
       <header>
       <div className="row" id="row1">
           <div className="col" id="row1">
               <nav className="navbar navbar-expand-lg navbar-light bg-light" id="row2">
                  <a className="navbar-brand" href="#">
            <img src={Logo}  alt="Logo" loading="lazy"/>
          </a> 


  <button className="navbar-toggler" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse text-titulo" id="navbarNav">
      <ul className="navbar-nav ml-auto" id="menu">
      <li className="nav-item active">
        <a className="nav-link" href="#acerca" >Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#beneficios" >Beneficios</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testimonios" >Testimonios</a>
      </li>
     
    </ul>
  </div>
               </nav>
           </div>
       </div>



          
       </header>
    )
}

export default Menu;


