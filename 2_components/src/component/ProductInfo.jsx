import React from 'react'

const ProductInfo = () => {

    const product = {
        "name": "Laptop",
        "price": "$1299",
        "Availability": "In Stock"
    }
  return (
    <div>
        <h2>Product Name : {product.name}</h2>
        <h2>Product Price : {product.price}</h2>
        <h2>Product Availability : {product.Availability}</h2>
    </div>
  )
}

export default ProductInfo