import React from 'react';
import {Link} from 'react-router-dom';
// import {Outlet} from 'react-router';
import ItemCard from './ItemCard';



const shoes = [
    {
      Brand: 'Borjan',
      type: 'Formal Shoes',
      image: 'https://cdn.shopify.com/s/files/1/0083/8405/3305/products/M5622_large.jpg?v=1592493196',
      prize: '6580',
      id: 1
    },
    {
      Brand: 'Borjan',
      type: 'Running Shoes',
      image: 'https://cdn.shopify.com/s/files/1/0083/8405/3305/products/1_36539c7b-a357-45c5-aba1-4fdee525b2dd_large.jpg?v=1589870548',
      prize: '3540',
      id: 2
    },
    {
      Brand: 'Borjan',
      type: 'Sneaker',
      image: 'https://cdn.shopify.com/s/files/1/0083/8405/3305/products/M5622_large.jpg?v=1592493196',
      prize: '6580',
      id: 3
    },
    {
      Brand: 'Borjan',
      type: 'Moccs',
      image: 'https://cdn.shopify.com/s/files/1/0083/8405/3305/products/M5666_large.jpg?v=1592319916',
      prize: '6580',
      id: 4
    }
]

function ProductIndex() {
  return (
    <>
    {
      shoes.map((item) => (
          <Link to={item.type}>
            <ItemCard item = {item}/>
          </Link>
      ))
    }
      {/* <Outlet /> */}
    </>
  )
}

export default ProductIndex
