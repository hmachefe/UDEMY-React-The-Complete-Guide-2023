import React from 'react';
import { Link } from 'react-router-dom';

// dummy products hard-coded, would come from the backend in reality
const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'},
];

function ProductsPage() {
  return (
    <>
    <h1>The products page</h1>
    <ul>
      {PRODUCTS.map(product => (
        <li key={product.id}>
          <Link to={product.id}>{product.title}</Link>
        </li>
      ))}
      {/* <li><Link>Product 1</Link></li>
      <li><Link>Product 2</Link></li>
      <li><Link>Product 3</Link></li> */}
    </ul>
    </>
  )
}

export default ProductsPage