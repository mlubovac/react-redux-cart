export const addToCart = (guid, name, price) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: {
            guid,
            name,
            price,
            quantity: 1
        }
    };
};