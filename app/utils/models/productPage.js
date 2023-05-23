export const ProductPageModel = (
    {
        pageNumber = "",
        productList = []
    }) => {
    return {
        pageNumber: pageNumber,
        productList: productList,
    };
};
