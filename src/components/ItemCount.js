import React, { useState } from 'react';

const countStyle={
    backgroundColor:'#d1d1d1',
    padding: '6px 25px'
}

function ItemCount({stock,count, setCount, onAdd}){
    
    const Add = ()=>{
        if (count !== parseInt(stock)){
            setCount(count + 1)
        }
    }

    const Substract = ()=>{
        if (count !== 0){
            setCount(count - 1)
        }
    }

    return(<div className="card text-center my-3" style={{width: 18 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Stock:{stock}</h5>
                    <div>
                        <button onClick={() => Add()} type='button' className="btn btn-primary" disabled={count === stock}>+</button>
                        <span style={countStyle}>{count}</span>
                        <button onClick={() => Substract()} type='button' className="btn btn-primary" disabled={count === 0}>-</button>
                    </div>
                    <button onClick={onAdd} style={{marginTop:10 +'px'}} type='button' className="btn btn-primary" disabled={count === 0}>Agregar al carrito</button>
                </div>
           </div>)
}

export default ItemCount;