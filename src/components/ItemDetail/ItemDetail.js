import React from 'react'
import { useNavigate, Link} from 'react-router-dom';
import ItemCount from '../ItemCount'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({productDetail}) => {
  const {id, title, price, pictureurl,stock} = productDetail;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1)
  }

  const [count, setCount] = useState(0);
  
  const { addItem, isInCart } = useContext(CartContext)
  


  const agregarAlCarrito = () => {
    const itemToAdd = {
      id,
      title,
      price,
      pictureurl,
      count
    }
    count > 0 && addItem(itemToAdd)
  }


  return (
    <div style={{margin:50 + 'px'}}>
        <h2>{title}</h2>
        <div className="d-flex">
          <img style={{maxWidth:250 + 'px'}} src={pictureurl} alt={title}/>
          <div className="d-flex flex-column">
            <p style={{margin:20 + 'px',fontSize:50 + 'px'}}>${price}</p>
            <span className="stockInfo">Stock: {stock}</span>
            <br/>
            {
              !isInCart(id)
              ? <ItemCount
                  stock={stock} 
                  onAdd={agregarAlCarrito}
                  setCount={setCount}
                  count={count}
                />
              : <Link to='/cart' className="btn btn-success my-3">Terminar mi compra</Link>
            }
            <hr/>
            <button onClick={handleNavigate} type="button" className="getBack-btn">Volver</button>
          </div>
        </div>

    </div>
  )
}

export default ItemDetail