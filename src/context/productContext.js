import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducers/ProductReducer";

const productContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {}
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = () => {
        dispatch({ type: "SET_LOADING" });
        axios({
            url: "https://api.pujakaitem.com/api/products",
            method: "GET"
        }).then((res) => {
            const products = res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        }).catch(dispatch({ type: "SET_ERROR" }))
    }

    useEffect(() => {
        getProducts();
    }, [])

    const getSingleProduct = (id) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        axios({
            url: `https://api.pujakaitem.com/api/products/?id=${id}`,
            method: "GET"
        }).then((res) => {
            const singleProduct = res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        }).catch(dispatch({ type: "SET_SINGLE_ERROR" }))
    }

    return (
        <productContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </productContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(productContext);
}

export { productContext, ProductProvider, useProductContext };