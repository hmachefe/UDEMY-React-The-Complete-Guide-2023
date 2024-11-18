import React from 'react'
import { useContext } from 'react'
import Modal from './Modal'
import CartContext from '../../store/Cartcontext';
import { currencyFormatter } from '../../util/formatting';
import Button from './Button';
import UserProgressContext from '../../store/UserProgressContext';

function Cart() {

    const cartCtxt = useContext(CartContext);
    const userProgressCtxt = useContext(UserProgressContext);

    const cartTotal = cartCtxt.items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);


    function handleCloseCart() {
        userProgressCtxt.hideCart();    
    }

  return (
    <Modal className="cart" open={userProgressCtxt.progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtxt.items.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.quantity}
                </li>
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
            <Button onClick={handleCloseCart}>Go to Checkout</Button>
        </p>
    </Modal>
  )
}

export default Cart