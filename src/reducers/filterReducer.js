const filterReducer = (state, action) => {

    const { filter_products, all_products } = state;

    let tempFilterProducts = [...all_products];

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            const priceArray = action.payload.map(element => element.price)
            let maxPrice = Math.max(...priceArray);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {
                    ...state.filters, maxPrice, price: maxPrice
                }
            }

        case "SET_GRID":
            return { ...state, gridView: true }

        case "SET_ROW":
            return { ...state, gridView: false }

        case "SET_SORT_OPTION":

            let newSortProducts;

            let tempProducts = [...filter_products];

            const sorting = (a, b) => {
                if (action.payload === "lowest") return a.price - b.price;

                if (action.payload === "highest") return b.price - a.price;

                if (action.payload === "a-z") return a.name.localeCompare(b.name);

                if (action.payload === "z-a") return b.name.localeCompare(a.name);
            }

            newSortProducts = tempProducts.sort(sorting);

            return { ...state, filter_products: newSortProducts }

        case "SET_SEARCH_FILTER":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value
                }
            }

        case "LOAD_FILTER_SEARCH":

            const { text, price } = state.filters;

            tempFilterProducts = tempFilterProducts.filter(obj => {
                if (text) {
                    return obj.name.toLowerCase().includes(text);
                }
                if (price) {
                    return obj.price <= price;
                }
                return obj;
            });

            return {
                ...state,
                filter_products: tempFilterProducts
            }

        case "CATEGORY_FILTER":

            tempFilterProducts = tempFilterProducts.filter((obj) => {

                if (action.payload.category === "category" && action.payload.product !== "All") {
                    return obj.category === action.payload.product;
                }
                if (action.payload.category === "company" && action.payload.product !== "All") {
                    return obj.company === action.payload.product;
                }
                if (action.payload.category === "colors" && action.payload.product !== "All") {
                    return obj.colors.includes(action.payload.product);
                }

                return obj
            })

            return { ...state, filter_products: tempFilterProducts }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filter_products: action.payload,
                filters: {
                    ...state.filters,
                    text: "",
                    price: state.filters.maxPrice
                }
            }

        default:
            return state
    }
}

export default filterReducer;