import React from 'react';
import { useContext } from 'react';

import Modal from './Modal';
import CartContext from '../../store/Cartcontext';
import { currencyFormatter } from '../../util/formatting';
import Input from './Input';
import Button from './Button';
import UserProgressContext from '../../store/UserProgressContext';
import useHttp from '../../hooks/useHttp';
import Error from './Error';

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
     // body
};

function Checkout() {

    const cartCtxt = useContext(CartContext);
    const userProgressCtxt = useContext(UserProgressContext);

    const {
        data, 
        isLoading: isSending, 
        error, 
        sendRequest, 
        clearData
    } = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartCtxt.items.reduce((total, item) => {
     return total + item.price * item.quantity;
    }, 0);

    function handClose() {
        userProgressCtxt.hideCheckout();
    }

    function handleFinish() {
        userProgressCtxt.hideCheckout();
        cartCtxt.clearCart();
        clearData();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtxt.items, 
                customer: customerData
            }
        }));
    }

    let actions = (<>
        <Button type="button" textOnly onClick={handClose}>Close</Button>
        <Button>Submit Order</Button>
    </>);

    if (isSending) {
        actions = <span>Sending order data...</span>;
    }

    if (data && !error) {
        return <Modal 
            open={userProgressCtxt.progress === 'checkout'} 
            onClose={handleFinish}
        >
            <h2>Success!</h2>
            <p>Your order has been submitted successfully.</p>
            <p>We will get back to you with more details.</p>
            <p className='actions'>
                <Button onClick={handleFinish}>Ok</Button>
            </p>
        </Modal>
    }

  return (
    <Modal 
        open={userProgressCtxt.progress === 'checkout'} 
        onClose={handClose}
    >
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>

            <Input label="Full Name" type="text" id="name"/>
            <Input label="Email Address" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>

            {error && <Error title="Failed to submit order" message={error} />}

            <p className="modal-actions">
                {actions}
            </p>
        </form>
    </Modal>
  )
}

export default Checkout