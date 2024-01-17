import React from "react";

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../imagenes/medellin1.jpg")} alt="foto 1 de medellin"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> primera imagen de Medellin </p>
        <p className="cargo-testimonio"> estoy viviendo en Bogota pero soy de Medellin </p>
      </div>
    </div>
  ); 
}

export default Testimonio;