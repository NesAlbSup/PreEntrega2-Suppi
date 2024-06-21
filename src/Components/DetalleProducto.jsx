import { useState } from 'react';
import { useParams } from 'react-router-dom';
import productosData from './productosData';
import './DetalleProducto.css'

const DetalleProducto = () => {
  const { id } = useParams();
  const producto = productosData.find(prod => prod.id === parseInt(id));

  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad de productos

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    // Aquí podrías implementar la lógica para agregar al carrito
    console.log(`Agregado al carrito: ${cantidad} unidades de ${producto.nombre}`);
  };

  const comprarAhora = () => {
    // Aquí podrías implementar la lógica para agregar al carrito
    console.log(`Comprar ${cantidad} unidades de ${producto.nombre}`);
  };

  if (!producto) {
    return <div>Cargando producto...</div>;
  }

  return (
    <div>
        <div className='greetings'>
            <h3>{producto.nombre}</h3>
        </div>   
    <div className="detalle-producto-container fade-in">
    
      <div className="producto-card">
        <img src={producto.imagen} alt={producto.nombre} className="producto-image" />
      </div>
      <div className="producto-info">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio.toFixed(3)}</p>
        {/* Botones para la cantidad de artículos */}
        <div className="cantidad-buttons">
          <button onClick={disminuirCantidad}>-</button>
          <span>{cantidad}</span>
          <button onClick={aumentarCantidad}>+</button>
        </div>
        
        <button className="agregar-carrito-button" onClick={comprarAhora}>Comprar Ahora</button>
        <button className="agregar-carrito-button" onClick={agregarAlCarrito}>Agregar al Carrito</button>
      </div>
    </div>
    </div>
  );
};

export default DetalleProducto;
