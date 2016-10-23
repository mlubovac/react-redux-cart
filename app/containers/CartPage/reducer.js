const cartReducer = (state = [], action) => {
    
    const { type, payload } = action;

    switch (type) {

        case "ADD_ITEM_TO_CART":
            return addItemToCart(state, payload);

        case "REMOVE_ITEM_FROM_CART":
            return removeItemFromCart(state, payload);            

        case "SET_CART_ITEM_QUANTITY":
            return setItemQuantity(state, payload);;

        default:
            return state;
    }
};

export default cartReducer;

const isItemInCart = (state, payload) => {
    return state.filter((item) => item.guid === payload.guid).length; 
};

const removeItemFromCart = (state, payload) => {
    return state.filter((item) => item.guid !== payload.guid)
};

const incrementItemQuantity = (state, payload) => {    
    return state.map(item => {
        if (item.guid === payload.guid) {
            item.quantity += 1;
        }
        return item;
    });    
};

const setItemQuantity = (state, payload) => {    
    return state.map(item => {
        if (item.guid === payload.guid) {
            item.quantity = payload.quantity;
        }
        return item;
    });    
};

const addItemToCart = (state, payload) =>  {
    if (!isItemInCart(state, payload)) {
        return [...state, payload]; 
    }
    return incrementItemQuantity(state, payload);
};