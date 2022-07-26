import React from 'react';
import { Link } from 'react-router-dom';

const itemStyle = {
    listStyleType:'none',
    margin:'20px 25px'
}

const buttonStyle = {
    backgroundColor:'#ed008c',
    borderColor:'#ed008c'
}
  

function Item({id, title, price, pictureurl}){
    return(<li key={id} style={itemStyle}>
            <div className="card" style={{width: 18+'rem'}}>
                <img src={pictureurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text">${price}</p>
                    <Link to={`/item/${id}`}><button style={buttonStyle} type="button" className="btn btn-primary">Ver más</button></Link>
                </div>
            </div>
           </li>)
}

export default Item;