import { useState } from "react";
import commerce from "../Utils/libs/commerce";

const Cart = () => {

    const [cart, setCart] = useState([])

    const getCartItems = async () => {
        const cartItems = await commerce.cart.contents()
        setCart(cartItems)
    }

    return ( 
    <>
        <div className="flex items-center justify-between  p-10">
            <div id="cart-section" className="w-3/4 border">
                <h1 className="text-left font-bold text-2xl">Summary</h1>
            </div>
            <div id="price-section" className="w-1/4 border ml-32">
                <h1 className="text-left font-bold text-2xl">Price</h1>
            </div>
        </div>
    </> 
    );
}
 
export default Cart;