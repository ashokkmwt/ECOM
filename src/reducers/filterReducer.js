const filterReducer = (state, action) => {

    const { filter_products } = state;
    // console.log("is it workign", filter_products);

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: action.payload,
                all_products: action.payload
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
            const { all_products } = state;
            let tempFilterProducts = [...all_products];
            const { text } = state.filters;

            // working but not updating filter_products.
            if (text) {
                tempFilterProducts = tempFilterProducts.filter(obj => {
                    return obj.name.toLowerCase().includes(text);
                });
            }
            return {
                ...state,
                filter_products: tempFilterProducts
            }


        // or I did this, but still not updating filter_products
        // if (text) {
        //     tempFilterProducts = tempFilterProducts.filter(obj => {
        //         return obj.name.toLowerCase().includes(text);
        //     })
        //     return {
        //         ...state,
        //         filter_products: tempFilterProducts
        //     }
        // }
        // return state

        default:
            return state
    }
}

export default filterReducer;