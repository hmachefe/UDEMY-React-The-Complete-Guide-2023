import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },

        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({ // because state is not mutating, owing to reduxjs/toolkit
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                }
            )} else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalQuantity++;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalQuantity--;
        }
    },
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data !'
          }));
          dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data !'
          }));

          const sendRequest = async () => { 
            const response = await fetch('https://react-cc956-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
              });     
              // const responseData = await response.json();   
              if (!response.ok) {
                throw new Error('Sending cart data failed.');
              }
          }

          try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success !',
                message: 'Sent cart data successfully !'
              }));      
          } catch (error) {
                dispatch(uiActions.showNotification({
                  status: 'error',
                  title: 'Error !',
                  message: 'Sending cart data failed !'
                }));  
          }  
    }
};

export const cartActions = cartSlice.actions;

export default cartSlice;