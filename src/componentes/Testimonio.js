import React from "react";

function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../imagenes/medellin1.jpg")} alt="foto 1 de medellin"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> Historia de Medellin </p>
        <br/>
        <p className="cargo-testimonio"> Medellín se ha convertido en un referente en Colombia y el mundo. Su actividad comercial, industrial, cultural, religiosa, social y deportiva han traído desarrollo y un estilo de vida amable y prometedor. Su historia se remonta al siglo XVII, cuando comenzaría el proyecto que poco a poco se iría convirtiendo en el lugar que es hoy. </p>
      </div>
    </div>
  ); 
}

export default Testimonio;