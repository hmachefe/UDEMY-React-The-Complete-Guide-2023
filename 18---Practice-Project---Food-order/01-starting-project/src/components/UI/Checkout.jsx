import React from 'react';
import { useContext } from 'react';

import Modal from './Modal';
import CartContext from '../../store/Cartcontext';
import { currencyFormatter } from '../../util/formatting';
import Input from './Input';
import Button from './Button';
import UserProgressContext from '../../store/UserProgressContext';

function Checkout() {

    const cartCtxt = useContext(CartContext);
    const userProgressCtxt = useContext(UserProgressContext);
    const cartTotal = cartCtxt.items.reduce((total, item) => {
     return total + item.price * item.quantity;
    }, 0);

    function handClose() {
        userProgressCtxt.hideCheckout();
    }

  return (
    <Modal open={userProgressCtxt.progress === 'checkout'} onClose={handClose}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>

            <Input label="Full Name" type="text" id="full-name"/>
            <Input label="Email Address" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>

            <p className="modal-actions">
                <Button type="button" textOnly onClick={handClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
  )
}

export default Checkout