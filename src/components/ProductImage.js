import React from 'react';
import {useParams} from 'react-router';

function ProductImage() {
    const {productType} = useParams()
  return (
    <div>
      ProductImage of {productType}
    </div>
  )
}

export default ProductImage
