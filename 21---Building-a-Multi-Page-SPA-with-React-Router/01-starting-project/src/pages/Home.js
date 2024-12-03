import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>My Home Page</div>
      <Link to="/products">Go to products</Link>
      {/* <a onClick href="/products">
        Go to products
      </a> */}
    </>
  
  )
}

export default HomePage;