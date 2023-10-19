import './App.css';
import NavBar from './components/NavBar';
import ContainerInfo from './components/ContainerInfo'
import SobreMi from './components/SobreMi'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'

const App = () => {
  
  return (
    <div className="App">
      <NavBar />
      <ContainerInfo />
      <div className='full-about-me'>
        <div className='container-full-about-me'>
          <SobreMi />
          <Tecnologias />
          <Proyectos />
          <Contacto />
        </div>
      </div>
    </div>
  );
}

export default App;
