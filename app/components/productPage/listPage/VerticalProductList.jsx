import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useState } from "react";
import CardView from "~/components/common/CardView";
import ProductController from "~/controllers/productController";
import { ProductPage } from "~/utils/models/productPage";

const VerticalProductList = ({ products }) => {
    const [nextPage, setNextPage] = useState(products.nextUrl);
    const [cachedProducts, setCachedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const [productPerPage, setProductPerPage] = useState(products.products);

    useEffect(() => {
        setCachedProducts([...cachedProducts, ProductPage({ pageNumber: currentPage, productList: productPerPage })]);
    }, []);

    const onClickProduct = (product) => {
        navigate(`/products/${product.code}`)
    };

    const onPreviousPageClick = () => {
        setCurrentPage(currentPage - 1);
        setProductPerPage(cachedProducts.find(productDetail => productDetail.pageNumber === currentPage - 1).productList);
    };

    const onNextPageClick = () => {
        let cachedData = cachedProducts.find(productDetail => productDetail.pageNumber === currentPage + 1);
        if (cachedData) {
            setCurrentPage(currentPage + 1);
            setProductPerPage(cachedData.productList);
        } else {
            ProductController.getProductsList(nextPage).then((result) => {
                setNextPage(result.nextPage);
                setProductPerPage(result.products);
                setCurrentPage(currentPage + 1);
                setCachedProducts([...cachedProducts, ProductPage({ pageNumber: currentPage + 1, productList: result.products })]);
            });
        }
    };

    return (
        <div className="vertical-products">
            <div className="row col-6 m-auto">
                {productPerPage.map((product, index) => (
                    <div className="col-6 p-4" key={index}>
                        <CardView product={product} onClickCallback={(product) => { onClickProduct(product) }} />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center m-auto pagination">
                <button className="slider-button" disabled={currentPage === 1} onClick={() => { onPreviousPageClick() }}>
                    &lt;
                </button>
                <button className="slider-button" onClick={() => { onNextPageClick() }}>
                    &gt;
                </button>
            </div>
        </div >
    );
};

export default VerticalProductList;