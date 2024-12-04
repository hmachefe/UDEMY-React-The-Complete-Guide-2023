import React from 'react'
import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {

  const params = useParams();

  return (
    <>
    <h1>Product Details !</h1>
    <div>{params.productId}</div>
    {/* go back one level through the navigation */}
    <p><Link to=".." relative="path">Back</Link></p> 
    </>
  )
}

export default ProductDetailPage;