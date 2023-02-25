const cartReducer = (state, action) => {

    let newCart;

    switch (action.type) {

        case "ADD_TO_CART":
            const { singleProduct, amount, id, color } = action.payload;

            let addedProduct;

            addedProduct = {
                image: singleProduct.image[0].url,
                name: singleProduct.name,
                price: singleProduct.price,
                stock: singleProduct.stock,
                color: color,
                amount: amount,
                id: id + color
            }

            let existingItem = state.cart.filter((item) => item.id === id + color);

            if (existingItem.length === 0) {
                return { ...state, cart: [...state.cart, addedProduct] }
            } else {
                newCart = state.cart.map((item) => {
                    if (item.id === id + color) {
                        let newAmount = item.amount + amount;
                        if (newAmount >= singleProduct.stock) {
                            newAmount = singleProduct.stock;
                        }
                        return { ...item, amount: newAmount }
                    } else {
                        return item
                    }
                })
                return { ...state, cart: newCart }
            }

        case "REMOVE_CART_ITEM":

            newCart = state.cart.filter((element) => element.id !== action.payload);

            return { ...state, cart: newCart }

        case "CLEAR_CART":
            return { ...state, cart: [] }

        case "INCREASE_AMT":
            newCart = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let newAmount = element.amount + 1;
                    if (element.amount >= element.stock) {
                        return element
                    }
                    return {
                        ...element, amount: newAmount
                    }
                } else {
                    return element;
                }
            })
            return { ...state, cart: newCart }

        case "DECREASE_AMT":
            newCart = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let newAmount = element.amount - 1;
                    if (element.amount <= 1) {
                        return element
                    }
                    return {
                        ...element, amount: newAmount
                    }
                } else {
                    return element;
                }
            })
            return { ...state, cart: newCart }

        case "CART_TOTAL":
            if (state.cart === null) {
                return
            }
            const { total_items, total_price } = state.cart.reduce((initialValue, element) => {
                let { amount, price } = element;
                initialValue.total_items = initialValue.total_items + amount;
                initialValue.total_price = initialValue.total_price + amount * price;
                return initialValue;
            }, {
                total_items: 0,
                total_price: 0
            })

            return {
                ...state,
                total_items,
                total_price
            }

        default:
            break;
    }

    return state
}

export default cartReducer;