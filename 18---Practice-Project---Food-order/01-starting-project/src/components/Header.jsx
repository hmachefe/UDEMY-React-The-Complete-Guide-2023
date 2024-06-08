import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/Cartcontext.jsx";
import { useContext } from "react";


export default function Header() {

    const cartCtxt = useContext(CartContext);
    const totalCartItems = cartCtxt.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="restaurant"/>
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly>Cart({totalCartItems})</Button>
            </nav>    
        </header>
    );
}