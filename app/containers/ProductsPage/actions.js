import axios from 'axios';

export const getProducts = () => {
    return (dispatch) => {
        dispatch({ type: "GET_PRODUCTS" });
        return axios.get('http://localhost:8080/app/mockdata/index.json')
                .then(response => dispatch(getProductsSuccess(response.data)))
                .catch(error => {
                    throw(error);
                });
    };
};

const getProductsSuccess = (products) => {
    return {
        type: "GET_PRODUCTS_SUCCESS",
        payload: {
            products
        }
    };
}