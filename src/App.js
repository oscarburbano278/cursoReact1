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

        <Testimonio
        imagen = 'juan'
        nombre ='Juan Castañeda'
        cargo = 'Partner'
        pais = 'Venezuela'
        testimonio = 'Debo destacar que la atención de Fabián a nuestras necesidades es excepcional. No sólo nos explica lo que necesitamos saber, sino que aporta ideas que mejoran la orientación de nuestros proyectos. El equipo siempre responde en tiempo y forma, y además trabaja con nosotros de manera conveniente y coherente con los objetivos de nuestra empresa.'
         />

        <Testimonio
        imagen = 'salvador'
        nombre ='Salvador Correa'
        cargo = 'Director'
        pais = 'Panamá'
        testimonio = 'Muy buen servicio y atención. Captaron mi idea desde el primer momento, facilitando la puesta online de la web, y con un alto grado de atención al cliente'
         />
      </div>      
    </div>
  );
}

export default App;
