import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const createCartContext = createContext();


const getCartItem = () => {

    let cartItems = localStorage.getItem("setCartItem");

    if (cartItems === null) {
        return [];
    }

    if (cartItems.length === 0) {
        return [];
    } else {
        return JSON.parse(cartItems);
    }
}

const initialState = {
    cart: getCartItem(),
    total_items: 0,
    total_price: 0,
    shipping_fee: 10000
}

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "CART_TOTAL" });
        localStorage.setItem("setCartItem", JSON.stringify(state.cart))
    }, [state.cart])

    const goToCart = (singleProduct, amount, id, color) => {
        dispatch({ type: "ADD_TO_CART", payload: { singleProduct, amount, id, color } });
    }

    const removeCartItem = (id) => {
        dispatch({ type: "REMOVE_CART_ITEM", payload: id });
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    const increaseAmount = (id) => {
        dispatch({ type: "INCREASE_AMT", payload: id })
    }
    const decreaseAmount = (id) => {
        dispatch({ type: "DECREASE_AMT", payload: id })
    }

    return (
        <createCartContext.Provider value={{ ...state, removeCartItem, goToCart, clearCart, increaseAmount, decreaseAmount }}>
            {children}
        </createCartContext.Provider>
    )
}

const useCartContex = () => {
    return useContext(createCartContext);
}

export { CartContextProvider, useCartContex }