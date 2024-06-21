import './NavBar.css'; 
import logo from '../assets/logo_df.jpg';  
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [isCategoriasOpen, setIsCategoriasOpen] = useState(false);
  const [isTallesOpen, setIsTallesOpen] = useState(false);

  const handleProductosDropdownToggle = (e) => {
    e.preventDefault();
    setIsProductosOpen(!isProductosOpen);
    if (isProductosOpen) {
      setIsCategoriasOpen(false); 
    }
    setIsTallesOpen(false)
    setIsCategoriasOpen(false)
    e.stopPropagation();
  };

  const handleCategoriasDropdownToggle = (e) => {
    e.preventDefault();
    setIsCategoriasOpen(!isCategoriasOpen);
    setIsTallesOpen(false)
    e.stopPropagation();
  };

  const handleTallesDropdownToggle = (e) => {
    e.preventDefault();
    setIsTallesOpen(!isTallesOpen);
    setIsCategoriasOpen(false)
    e.stopPropagation();
  };

  const handleItemClick = (section) => {
    window.location.href = section; 
    if (isProductosOpen) {
        setIsProductosOpen(false); 
    }
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-brand">
          <Link to="/" className="navbar-brand">Raftel Shop</Link>
        </ul>
        <ul className="navbar-links">
          <li className={`dropdown ${isProductosOpen ? 'open' : ''}`} onClick={handleProductosDropdownToggle}>
            <Link className="dropdown-toggle">Productos</Link>
            <ul className="dropdown-menu">
              <li><Link to="/catalogo" >Nuestros Productos</Link></li>
              <li className={`dropdown ${isTallesOpen ? 'open' : ''}`} onClick={handleTallesDropdownToggle}>
                <Link className="dropdown-toggle">Talles</Link>
                {isTallesOpen && (
                  <ul className="dropdown-submenu">
                    <li><Link onClick={() => handleItemClick('#category1')}>Talle 48</Link></li>
                    <li><Link onClick={() => handleItemClick('#category2')}> Talle 49</Link></li>
                    <li><Link onClick={() => handleItemClick('#category3')}>Talle 50</Link></li>
                  </ul>
                )}
              </li>
              
              <li className={`dropdown ${isCategoriasOpen ? 'open' : ''}`} onClick={handleCategoriasDropdownToggle}>
              <Link className='dropdown-toggle'>Categorias</Link>
              {isCategoriasOpen && (
                  <ul className="dropdown-submenu">
                    <li><Link to="/categorias/Deportivas">Deportivas</Link></li>
                    <li><Link to="/categorias/Urbanas">Urbanas</Link></li>
                    <li><Link onClick={() => handleItemClick('#category2')}> Hombre</Link></li>
                    <li><Link onClick={() => handleItemClick('#category3')}>Mujer</Link></li>
                    <li><Link onClick={() => handleItemClick('#category3')}>Unisex</Link></li>
                  </ul>
                )}
              </li>
              
              <li><Link onClick={() => handleItemClick('#product3')}>Proximamente</Link></li>
            </ul>
          </li>
          <li><Link to="/Proximamente" className="dropdown-toggle2">Ofertas y Promociones</Link></li>
          <li><Link to="/Contacto" className="dropdown-toggle2">Contacto</Link></li>
        </ul>
        <ul className="navbar-links-left">
          <li><button>Iniciar Sesión</button></li>
          <li><button>Registrarse</button></li>
          <a href="#cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-items">0</span>
          </a>
        </ul>
      </nav>
      <h2>.</h2>
    </div>
  );
};

export default NavBar;
