import React, {Component,useEffect,useState} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { getProducts } from '../mocks/FakeApi';
import { useParams } from 'react-router-dom'

const catalogoContainer = {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px'
}


function ItemListContainer(){
    const [productos,setProductos] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId)
    useEffect(() => {
        getProducts
        .then((datos) =>{
            if (categoryId){
                setProductos(datos.filter((prod)=> prod.category === categoryId))
            } else {
                setProductos(datos)
            }
        })    
    }, [categoryId])
    

    
    return (<div style={catalogoContainer}>
                <ItemList items={productos}/>
            </div>)
}

export default ItemListContainer;