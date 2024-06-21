import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/itemListContainer.jsx';
import Catalogo from './Components/Catalogo.jsx';
import Contacto from './Components/Contacto.jsx';
import Proximamente from './Components/Proximamente.jsx';
import DetalleProducto from './Components/DetalleProducto.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const customGreeting = "¡Hola! Bienvenido a nuestra tienda online.\n\nExplora nuestros productos.";

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={customGreeting} />} />
        <Route path="/catalogo" element={<Catalogo sideBar={true}/>} />
        <Route path="/categorias/:categoryId" element={<Catalogo sideBar={true}/>} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/proximamente" element={<Proximamente />} /> 
      </Routes>
    </Router>
  );
}

export default App;
