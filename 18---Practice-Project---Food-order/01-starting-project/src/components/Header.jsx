import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/Cartcontext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {

    const cartCtxt = useContext(CartContext);
    const userProgressCtxt = useContext(UserProgressContext);

    const totalCartItems = cartCtxt.items.reduce((total, item) => total + item.quantity, 0);

    function handleShowCart() {
        userProgressCtxt.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="restaurant"/>
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Cart({totalCartItems})
                </Button>
            </nav>    
        </header>
    );
}