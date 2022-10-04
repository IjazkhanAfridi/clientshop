import { useState } from "react";
import {createContext} from "react";
import ProductImages from "../components/assets/Images";

const CartContext = createContext();

export function CartProvider({children}){

    const [items, setItems] = useState([])
    const AddToCart =()=>{
        setItems((prevstate)=>[...prevstate,[ProductImages.id,ProductImages.src,ProductImages.price,ProductImages.size,ProductImages.title]])
    }

    return(
    <CartContext.Provider value={{items,AddToCart}}>{children}</CartContext.Provider>
    );
}

export default CartContext;