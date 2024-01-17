import React from "react";
import '../estilos/Testimonio.css';

function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require(`../imagenes/${props.imagen}.png`)} alt="foto camila lopez"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong></p>
        <p className="cargo-testimonio"><strong>{props.cargo}</strong> en {props.pais}</p>
        <p className="texto-testimonio"> {props.testimonio} </p>
      </div>
    </div>
  ); 
}

export default Testimonio;