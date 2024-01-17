import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de nuestros Estudiantes</h1>
        <Testimonio
        imagen = 'camila'
        nombre ='Camila Lopez'
        cargo = 'gerente de proyectos'
        pais = 'Costa rica'
        testimonio = 'Hemos encontrado en ZWS la ayuda que necesitábamos para implementar nuestra página web. Total apertura con ellos en las ideas y requerimientos adecuados a nuestro enfoque del proyecto.'
         />
      </div>      
    </div>
  );
}

export default App;
