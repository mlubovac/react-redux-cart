export const setItemQuantity = (guid, quantity) => {
    return {
        type: "SET_CART_ITEM_QUANTITY",
        payload: {
            guid,
            quantity
        }
    }
} 