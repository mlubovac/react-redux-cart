export const removeCartItem = (guid) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: {
            guid
        }
    };
};