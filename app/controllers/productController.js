import { getProductByIdRequest, getProductsListRequest } from "../services/productService";

const getProductsList = (url) => {
    return new Promise((resolve, reject) => {
        let getProductListPromise = getProductsListRequest(url);
        getProductListPromise.then((result) => {
            resolve(result.data.result);
        }, (error) => {
            reject([]);
        });
    })
};

const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        let getProductByIdPromise = getProductByIdRequest(productId);
        getProductByIdPromise.then((result) => {
            resolve(result);
        }, (error) => {
            reject([]);
        });
    })
};

const ProductController = {
    getProductsList,
    getProductById
};

export default ProductController;