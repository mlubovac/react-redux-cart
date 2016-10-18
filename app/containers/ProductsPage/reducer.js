const productsReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {

        case "GET_PRODUCTS_SUCCESS":
            return payload.products;

        default: 
            return state;
    }
};

export default productsReducer;