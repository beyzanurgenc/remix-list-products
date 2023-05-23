import axios from "axios";

const serverUrl = "https://mocki.io/v1/";

export const getProductsListRequest = (url) => {
    return new Promise(function (resolve, reject) {
        let getProductListRequest = axios.get(
            url
        );
        getProductListRequest.then(function (result) {
            resolve(result)
        }, function (error) {
            reject(error.response);
        });
    });
};

export const getProductByIdRequest = (productId) => {
    return new Promise(function (resolve, reject) {
        let getProductByIdRequest = axios.get(
            serverUrl + '1a1fb542-22d1-4919-914a-750114879775?code=' + productId
        );
        getProductByIdRequest.then(function (result) {
            resolve(result.data)
        }, function (error) {
            reject(error.response);
        });
    });
};