import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  // just for testing purpose as a demo
  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <div>My Home Page</div>
      <p>
        Go to
        <Link to="/products">
          the list of products
        </Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>

      {/* <a onClick href="/products">
        Go to products
      </a> */}
    </>
  
  )
}

export default HomePage;