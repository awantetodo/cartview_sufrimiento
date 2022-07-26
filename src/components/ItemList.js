import React from "react";
import Item from './Item';

const ulStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'center',
    marginTop: '50px',
    flexWrap: 'wrap'
}

function ItemList({items}){
    return(<ul style={ulStyle}>{items.map(i => <Item id={i.id} title={i.title} price={i.price} pictureurl={i.pictureurl}/>)}</ul>)
}

export default ItemList;