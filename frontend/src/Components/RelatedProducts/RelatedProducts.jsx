import React from 'react'
import './RelatedProducts.css'
import data_product  from '../Assests/data'
import { Form } from 'react-router-dom'
import Item from '../Items/Item'

const RelatedProducts = () => {
  return (
    <div className='relateproducts'>
        <h1>Realted Products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item,i) =>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts