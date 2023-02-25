import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer";
import { useProductContext } from "./productContext";

const filterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    gridView: true,
    filters: {
        text: "",
        price: 0,
        minPrice: 0,
        maxPrice: 0
    }
}

const FilterContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const { products } = useProductContext();

    const setGridView = () => {
        dispatch({ type: "SET_GRID" })
    }

    const setListView = () => {
        dispatch({ type: "SET_ROW" })
    }

    const sortProduct = (chosedOption) => {
        dispatch({ type: "SET_SORT_OPTION", payload: chosedOption })
    }

    const searchFilter = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        dispatch({ type: "SET_SEARCH_FILTER", payload: { name, value } })
    }

    const categoryFilter = (data) => {
        dispatch({ type: "CATEGORY_FILTER", payload: data })
    }

    const clearAllFilters = () => {
        dispatch({ type: "CLEAR_FILTERS", payload: products })
    }

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_SEARCH" });
    }, [state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products])

    return (
        <filterContext.Provider value={{ ...state, setGridView, setListView, sortProduct, searchFilter, categoryFilter, clearAllFilters }}>
            {children}
        </filterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(filterContext);
}

export { useFilterContext, FilterContextProvider }