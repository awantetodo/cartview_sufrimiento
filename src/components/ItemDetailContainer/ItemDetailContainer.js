import React, { useEffect, useState} from 'react'
import { getProducts } from '../../mocks/FakeApi';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState({})
const { itemId } = useParams()
  useEffect(() => {
    getProducts
    .then((res)=> setProductDetail(res.find((item) => item.id === itemId)))
  },[])

  return (
    <div>
      <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer