import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const isVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://react-cc956-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
    console.log(cart);
  }, [cart]);

  return (
    <Layout>
        {isVisible && <Cart />}
        <Products />
    </Layout>
  );
}

export default App;
