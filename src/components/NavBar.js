import React, {Component} from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import logo from "../images/logo.png"
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const logoStyle = {
    maxWidth:'200px'
}

function NavBar(){

    const { cartQuantity } = useContext(CartContext);

    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img style={logoStyle} src={logo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        <Link className="nav-link" to="/category/foods">Comidas</Link>
                        <Link className="nav-link" to="/category/drinks">Bebidas</Link>
                        {
                            cartQuantity() !== 0
                            ? <CartWidget/>
                            : console.log('no hay items en el carrito')
                        }
                    </div>
                </div>
                </div>
           </nav>);
}

export default NavBar;