import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetailPage() {

  const params = useParams();

  return (
    <>
    <h1>Product Detail</h1>
    <div>{params.productId}</div>
    </>
  )
}

export default ProductDetailPage;