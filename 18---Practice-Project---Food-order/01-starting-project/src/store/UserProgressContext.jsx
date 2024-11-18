import { createContext } from "react";
import { useState } from "react";

const UserProgressContext = createContext({
    progress: '', // cart, checkout
    showCart: () => {},
    showCheckout: () => {},
    hideCart: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider({ children }) {

    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }   

    const userProgressCtxt = {
        progress: userProgress,
        showCart,
        showCheckout,
        hideCart,
        hideCheckout
    };

    return (
        <UserProgressContext.Provider value={userProgressCtxt}>
            {children}
        </UserProgressContext.Provider>
    );
}


export default UserProgressContext;