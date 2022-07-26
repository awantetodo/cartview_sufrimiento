import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

let styles = {
    
    display: "flex",
    margin: "5px",
    justifyContent: "flex-start",
    color: "#ed008c"
}
let iconStyle = {
    margin:"7px",
    fontSize:"20px",
}

function CartWidget(){
    
    const {cartQuantity} = useContext(CartContext)

    return(<Link to={'/cart'}>
                <div style={styles}>
                    <FontAwesomeIcon style={iconStyle} icon={faCartShopping}/>
                    <span>{cartQuantity()}</span>
                </div>
           </Link> 
            );
}

export default CartWidget;