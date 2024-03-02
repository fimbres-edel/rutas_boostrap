import logo from './logo.svg';
import './App.css';
import Menu from './componentes/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import About from './componentes/About';
import Contacto from './componentes/Contacto';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Menu />
       
       <Routes>
        <Route path='/' element={<Inicio />} />
        
        <Route path='/about' element={<About />} />
        <Route path='/contacto' element={<Contacto />} />
       </Routes>
      </div>
    </BrowserRouter>


    
     
    
  );
}

export default App;
